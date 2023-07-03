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
    this.saldo = Number(carteirinha?.balance).toFixed(2);
    this.historico = carteirinha?.transactions;
    console.log("result?.info.uid "  , result?.info.uid)
    this.uid_usuario = result?.info.uid;
  }

  async debitarSaldo(valor, tipo, destinoNome, destinoCPF = "") {
    await this.updateCarteirinha();

    if (this.saldo - valor < -2.8) {
      throw "Saldo insufuciente";
    } else {
      this.saldo = Number(this.saldo).toFixed(2) - Number(valor).toFixed(2);

      const utc_date = new Date().toUTCString();

      let idi = this.historico;
      idi = idi.length != undefined ? idi.length : 0;

      try{
        await updateData("users", this.uid_usuario, {
          "wallet.balance": Number(this.saldo).toFixed(2),
          "wallet.transactions": arrayUnion({
            id: idi,
            type: tipo,
            value: -1 * Number(valor).toFixed(2),
            date: utc_date,
            source: destinoNome,
            sourceCPF: destinoCPF,
          }),
        });

      }catch(err){
        console.log('debitarSaldo err ' , err)
      }
      
      await this.updateCarteirinha();
    }
  }

  async updateCarteirinha(uid = this.uid_usuario) {

    console.log('update carteirinha')
    console.log('uid ' , uid)
    const data = await getData("users", uid);
    let result = data.data();

    console.log("update carteirinha result ", result);
    const carteirinha = result.wallet;
    this.user_name = result.info.name;
    this.user_cpf = result.info.cpf;
    this.saldo = Number(carteirinha.balance).toFixed(2);
    this.historico = carteirinha.transactions;
    this.uid_usuario = result.info.uid;
  }

  async adicionarSaldo(valor, tipo, origemNome, origemCPF = "") {
    console.log("adicionar saldo inicio");

    await this.updateCarteirinha();
    this.saldo = Number(this.saldo).toFixed(2) + Number(valor).toFixed(2);
    const utc_date = new Date().toUTCString();

    let idi = this.historico;
    idi = idi.length != undefined ? idi.length : 0;

    console.log("adicionar saldo checkpoint");

    try {
      await updateData("users", this.uid_usuario, {
        "wallet.balance": Number(this.saldo).toFixed(2),
        "wallet.transactions": arrayUnion({
          id: idi,
          type: tipo,
          value: Number(valor).toFixed(2),
          date: utc_date,
          source: origemNome,
          sourceCPF: origemCPF,
        }),
      });
    } catch (err) {
      console.log("adicionar saldo err ", err);
    }

    await this.updateCarteirinha();
  }

  async compartilharSaldo(cpfDest, valor) {
    valor = Number(valor).toFixed(2);
    if (valor < 1.4) {
      throw "valor invalido";
    }

    try {
      const userDest = await Usuario.buscarUsuarioPorCPF(cpfDest);
      console.log("user dest ", userDest);

      const testUser = new Usuario(userDest);

      console.log("test user ", testUser);

      await this.debitarSaldo(
        valor,
        "Transferencia a usuario",
        testUser.nome,
        testUser.cpf
      );

      const destCarteirinha = testUser.carteirinha;

      console.log("dest carteirinha ", destCarteirinha);

      await destCarteirinha.adicionarSaldo(
        valor,
        "Transferencia de usuario",
        this.user_name,
        this.user_cpf
      );
    } catch (err) {
      console.log("Transferencia err ", err);
      throw "Usuario não encontrado";
    }
  }
  async consultarSaldo() {
    return this.saldo;
  }
}
