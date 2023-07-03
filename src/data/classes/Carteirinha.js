import { signIn } from "../Auth/login.js";
import { getData, updateData, conditionalGetData } from "../Store/userData.js";
import { arrayUnion } from "firebase/firestore";
import { isAsyncMode } from "react-is";
import Usuario from "./User";

export default class Carteirinha {
  constructor(result) {
    console.log("Carteirinha constructor result ", result);

    const carteirinha = result?.wallet;
    this.user_name = result?.info.name;
    this.user_cpf = result?.info.cpf;
    this.saldo = Number(carteirinha?.balance);
    this.historico = carteirinha?.transactions;
    this.uid_usuario = result?.uid;
  }

  async debitarSaldo(valor, tipo, destinoNome, destinoCPF = "") {
    await this.updateCarteirinha();

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
          value: -1 * Number(valor),
          date: utc_date,
          source: destinoNome,
          sourceCPF: destinoCPF,
        }),
      });
      await this.updateCarteirinha();
    }
  }

  async updateCarteirinha(uid = this.uid_usuario) {
    const data = await getData("users", uid);
    let result = data.data();
    const carteirinha = result.wallet;
    this.user_name = result.info.name;
    this.user_cpf = result.info.cpf;
    this.saldo = Number(carteirinha.balance);
    this.historico = carteirinha.transactions;
    this.uid_usuario = result.uid;
  }

  async adicionarSaldo(valor, tipo, origemNome, origemCPF = "") {
    await this.updateCarteirinha();
    this.saldo = Number(this.saldo) + Number(valor);
    const utc_date = new Date().toUTCString();

    let idi = this.historico;
    idi = idi.length != undefined ? idi.length : 0;

    await updateData("users", this.uid_usuario, {
      "wallet.balance": this.saldo,
      "wallet.transactions": arrayUnion({
        id: idi,
        type: tipo,
        value: Number(valor),
        date: utc_date,
        source: origemNome,
        sourceCPF: origemCPF,
      }),
    });

    await this.updateCarteirinha();
  }

  async compartilharSaldo(cpfDest, valor) {
    valor = Number(valor);
    if (valor < 0) {
      throw "valor invalido";
    }

    try {
      const userDest = await Usuario.buscarUsuarioPorCPF(cpfDest);
      console.log("user dest ", userDest);

      const testUser = new Usuario(userDest);

      console.log("test user ", testUser);

      this.debitarSaldo(
        valor,
        "Transferencia a usuario",
        testUser.nome,
        testUser.cpf
      );

      await testUser
        .getCarteirinha()
        .adicionarSaldo(
          valor,
          "Transferencia de usuario",
          this.user_name,
          this.user_cpf
        );
    } catch (err) {
      throw "Usuario não encontrado";
    }
  }
  async consultarSaldo() {
    return this.saldo;
  }
}
