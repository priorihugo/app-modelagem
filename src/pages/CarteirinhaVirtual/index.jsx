import React from "react";
import { Center, Divider, Pressable, Text, VStack } from "native-base";
import Carteirinha from "./Carteirinha";
import QRCode from "./Qrcode";
import QRCodeCarteirinha from "./Qrcode";
import Catraca from "../../data/classes/Catraca";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

export default function CarteirinhaVirtual() {
  const { usuario } = useContext(AuthContext);
  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"} py={100}>
      <Carteirinha />

      <Divider my={2} />
      <Pressable
        flex={"1"}
        onPress={() => {
          Catraca.debitarUsuario(usuario.matricula);
        }}
      >
        <QRCodeCarteirinha />
      </Pressable>
    </Center>
  );
}
