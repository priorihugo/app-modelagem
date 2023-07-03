import AsyncStorage from "@react-native-async-storage/async-storage";

import { signIn } from "../Auth/login.js";
import { getData, updateData, conditionalGetData } from "../Store/userData.js";
import { arrayUnion } from "firebase/firestore";
import { isAsyncMode } from "react-is";
import Carteirinha from "./Carteirinha.js";

export default class Usuario {
  constructor(result) {
    this.nome = result?.info.name;
    this.email = result?.info.email;
    this.cpf = result?.info.cpf;
    this.endereco = result?.info.address;
    this.telefone = result?.info.phone;
    this.dataRegistro = result?.info.registerDate;
    this.validade = result?.info.validityDate;
    this.matricula = result?.info.matricula;
    this.rg = result?.info.rg;
    this.curso = result?.info.course;
    this.foto = result?.info.photo;
    this.isAdmin = result?.isAdmin;
    this.carteirinha = new Carteirinha(result);
  }

  getCarteirinha() {
    return this.carteirinha;
  }

  async realizarLogin(username, password) {
    // TODO: realiza login

    console.log("realizar login");

    try {
      const data = await signIn(username, password);
      console.log("user data ", data);
      this.uid = data.uid;
      console.log(this.uid);
      // retorna os dados do usuario de acordo com o uid
      await this.puxarDados(this.uid);
    } catch (err) {
      console.log("user login err ", err);
      throw err;
    }
  }

  async puxarDados(uid = this.uid) {
    const data = await getData("users", uid);
    let result = await data.data();

    console.log('puxar dados result ' , result)
    // leitura dos dados de cadastro
    this.uid = result?.info.uid
    this.nome = result?.info.name;
    this.email = result?.info.email;
    this.cpf = result?.info.cpf;
    this.endereco = result?.info.address;
    this.telefone = result?.info.phone;
    this.dataRegistro = result?.info.registerDate;
    this.validade = result?.info.validityDate;
    this.matricula = result?.info.matricula;
    this.rg = result?.info.rg;
    this.curso = result?.info.course;
    this.foto = result?.info.photo;
    this.isAdmin = result?.isAdmin;
    this.carteirinha = new Carteirinha(result);
  }

  /*
  static async registrarTrasacao(valor, tipo, uid = this.uid) {
    try {
      await this.puxarDados(uid);

      if (this.carteirinha.balance + valor < 2.8) return false;

      let balance = valor + this.carteirinha.balance;

      let idi = this.carteirinha.transactions;
      idi = idi.length != undefined ? idi.length : 0;

      await updateData("users", uid, {
        "wallet.balance": balance,
        "wallet.transactions": arrayUnion({
          id: idi,
          type: tipo,
          value: valor,
        }),
      });
      await this.puxarDados(uid);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  */

  /*
  async compartilharSaldo(valor, uidDestino, uid = this.uid) {
    try {
      await this.puxarDados(uid);
      if (this.carteirinha.balance < valor) return false;
      await this.registrarTrasacao(-valor, "transferencia", uid).then(
        async (result) => {
          if (result) {
            let user2 = new Usuario();
            await user2.puxarDados(uidDestino);
            await user2.registrarTrasacao(valor, "transferencia", uidDestino);
            return true;
          }
          return false;
        }
      );
      return false;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
  */
  static async buscarUsuarioPorCPF(cpf) {
    // TODO: buscar usuario por cpf no firebase
    try {
      var dataResult;
      const data = await conditionalGetData("users", "info.cpf", cpf);
      dataResult = data.docs[0].data();

      return dataResult;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
}
