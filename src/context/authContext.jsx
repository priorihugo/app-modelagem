import { createContext, useState } from "react";
import Usuario from "../data/classes/User";
import { async } from "@firebase/util";
import { signOut } from "../data/Auth/login";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(undefined);


  const realizarLogin = async (email, password) => {
    email = email.trim()
    password = password.trim();

    try{
        const thisUser = new Usuario();
        await thisUser.realizarLogin(email, password);
    
        console.log("thisUser ", thisUser);
        setUsuario(thisUser);
    }catch(err){
        console.log('realizar login err ' , err)
        throw err;
    }

  };

  const signout = async () => {
        signOut();
        setUsuario(undefined);
  }

  const store = {
    realizarLogin: realizarLogin,
    usuario: usuario,
    signout:signout,
  };

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
}
