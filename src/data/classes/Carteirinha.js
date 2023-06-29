import { signIn } from "../Auth/login.js";
import { getData, updateData, conditionalGetData } from "../Store/userData.js";
import { arrayUnion } from "firebase/firestore";
import { isAsyncMode } from "react-is";
import Usuario from "./User";

export default class Carteirinha {
  constructor({ uid_usuario, saldo, historico  , nome , cpf}) {
    this.uid_usuario = uid_usuario;
    this.saldo = Number(saldo);
    this.historico = historico;
    this.user_name = nome
    this.user_cpf = cpf
  }

  async debitarSaldo(valor, tipo, destinoNome, destinoCPF = "") {
    await this.updateDados();
    if (this.saldo - valor < -2.8) {
      throw "Saldo insufuciente";
    } else {
      this.saldo = Number(this.saldo) - Number(valor);

      const utc_date = new Date().toUTCString();

      let idi = this.historico;
      idi = idi.length != undefined ? idi.length : 0;

      await updateData("users", this.uid_usuario, {
        "wallet.balance": this.saldo,
        "wallet.transactions": arrayUnion({
          id: idi,
          type: tipo,
          value: -valor,
          date: utc_date,
          source: destinoNome,
          sourceCPF: destinoCPF,
        }),
      });
      await this.updateDados();
    }
  }

  async updateDados(uid = this.uid_usuario) {
    getData("users", uid).then((data) => {
      let result = data.data();
      // leitura dos dados da carteira
      const carteirinha = result.wallet;

      this.user_name = result.info.name
      this.user_cpf = result.info.cpf
      this.saldo = carteirinha.balance;
      this.historico = carteirinha.transaction;
      this.uid_usuario = result.uid;
    });
  }

  async adicionarSaldo(valor, tipo, origemNome, origemCPF = "") {
    await this.updateDados();
    this.saldo = this.saldo + valor;
    const utc_date = new Date().toUTCString();

    let idi = this.historico;
    idi = idi.length != undefined ? idi.length : 0;

    await updateData("users", this.uid_usuario, {
      "wallet.balance": this.saldo,
      "wallet.transactions": arrayUnion({
        id: idi,
        type: tipo,
        value: valor,
        date: utc_date,
        source: origemNome,
        sourceCPF: origemCPF,
      }),
    });

    await this.updateDados();
  }

  async compartilharSaldo(cpfDest, valor) {
    valor = Number(valor);
    if (valor < 0) {
      throw "valor invalido";
    }

    const userDest = await Usuario.buscarUsuarioPorCPF(cpfDest);

    console.log("user dest ", userDest);

    this.debitarSaldo(valor , 'Transferencia a usuario' , userDest.info.nome , userDest.info.cpf)

    let idi = userDest.wallet.transactions;
    idi = idi.length != undefined ? idi.length : 0;

    const utc_date = new Date().toUTCString();

    await updateData("users", userDest.info.uid, {
        "wallet.balance": Number(userDest.wallet.balance) + Number(valor),
        "wallet.transactions": arrayUnion({
          id: idi,
          type: "Transferencia a usuario",
          value: valor,
          date: utc_date,
          source: this.user_name,
          sourceCPF: this.user_cpf,
        }),
      });


  }

  async consultarSaldo() {
    return this.saldo;
  }
}
