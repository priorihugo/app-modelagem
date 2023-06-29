import { createContext, useEffect, useState } from "react";
import Usuario from "../data/classes/User";
import { async } from "@firebase/util";
import { signOut } from "../data/Auth/login";
import Carteirinha from "../data/classes/Carteirinha";
import { Firestore } from "@firebase/firestore";
import { getData } from "../data/Store/userData";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(undefined);
  const [carteirinha, setCarteirinha] = useState(undefined);

  const updateCarteirinha = async () => {
    try {
      const dados = await getData("users", usuario.uid);
      let result = dados.data();

      console.log(" updateCarteirinha thisUser ", result);

      const thisCarteirinha = new Carteirinha({
        saldo: result.carteirinha.balance,
        historico: result.carteirinha.transactions,
        uid_usuario: result.uid,
        nome: result.nome,
        cpf: result.cpf,
      });

      setCarteirinha(thisCarteirinha);
    } catch (err) {
      console.log("update carteirinha err ", err);
    }
  };

  const realizarLogin = async (email, password) => {
    email = email.trim();
    password = password.trim();

    try {
      const thisUser = new Usuario();
      await thisUser.realizarLogin(email, password);

      console.log("login thisUser ", thisUser);

      const thisCarteirinha = new Carteirinha({
        saldo: thisUser.carteirinha.balance,
        historico: thisUser.carteirinha.transaction,
        uid_usuario: thisUser.uid,
      });

      setCarteirinha(thisCarteirinha);
      setUsuario(thisUser);
    } catch (err) {
      console.log("realizar login err ", err);
      throw err;
    }
  };

  const signout = async () => {
    signOut();
    setUsuario(undefined);
  };

  const store = {
    realizarLogin: realizarLogin,
    usuario: usuario,
    carteirinha: carteirinha,
    signout: signout,
    updateCarteirinha: updateCarteirinha,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}
