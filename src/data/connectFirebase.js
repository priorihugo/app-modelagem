import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyA2-VrHMOK6mxrZku4MeoCm_g3Lf0zhLaY",
    authDomain: "app-modelagem.firebaseapp.com",
    projectId: "app-modelagem",
    storageBucket: "app-modelagem.appspot.com",
    messagingSenderId: "868360659998",
    appId: "1:868360659998:web:b8cb0d360a9c5b1cdaba0f"
};

export const app = initializeApp(firebaseConfig);