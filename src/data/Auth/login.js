import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";

import FirebaseError from "../Error/firebaseError.js";

import { app } from "../connectFirebase.js";

const auth = getAuth(app);

export async function signIn(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    return auth.currentUser;
  } catch (error) {
    throw new FirebaseError(error.code);
  }
}

// export async function signInUp(auth, email, password) {
//     try {
//         await createUserWithEmailAndPassword(
//             auth,
//             email,
//             password
//         );
//         try {
//             await sendEmailVerification();
//         } finally {
//             return "Cadastro realizado com sucesso! Verifique seu email para continuar."
//         }
//     } catch (error) {
//         if (error instanceof FirebaseError) throw error;
//         else throw new FirebaseError(error.code);
//     }
// }

export async function signOut() {
  await auth.signOut();
}

// export async function emailVerificationSend(auth, email=null, con=true) {
//     if (con) {
//         try {
//             await sendEmailVerification(auth.currentUser);
//             return true;
//         } catch (error) {
//             return false;
//         }
//     } else {
//         try {
//             await sendEmailVerification(auth, email);
//             return true;
//         } catch (error) {
//             return false;
//         }
//     }

// }

// export async function resetPassword(auth, email) {
//     try {
//         await sendPasswordResetEmail(auth, email);
//         return true;
//     } catch (error) {
//         return false;
//     }
// }
