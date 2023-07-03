import { conditionalGetData, getData } from "../Store/userData.js";
import Carteirinha from "./Carteirinha.js";

import Usuario from "./User.js";

export default class Catraca {
  static async validarCarteirinha(matricula) {
    const data = await conditionalGetData("users", "info.matricula", matricula);
    if (data.docs[0] == undefined) {
      console.log("usuario não validado ");
      return undefined;
    } else {
      console.log("usuario validado ", data.docs[0].data());
      const user = data.docs[0].data();
      const userTeste = new Usuario(user);
      return userTeste.getCarteirinha();
    }
  }

  static async debitarUsuario(matricula) {
    let valid = await this.validarCarteirinha(matricula);

    if (valid) {
      if (valid.saldo < -2.8) {
        throw "Sem saldo disponivel";
      } else {
        await valid.debitarSaldo(
          1.4,
          "Pagamento Catraca ",
          "Restaurante Universitario",
          " "
        );
      }
    }
  }

  async permitirEntrada() {
    return true;
  }

  async emitirErro() {
    return false;
  }
}
