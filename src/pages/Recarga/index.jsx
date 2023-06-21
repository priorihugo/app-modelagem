import React from "react";
import { Center, Flex, Text, VStack } from "native-base";
import MenuItem from "../../components/MenuItem";

export default function Recarga() {
  return (
    <Center flex={"1"}>
      <Center flexDirection={"row"}>
        <MenuItem label={"Pix"} iconImage={"pix"} boxSize={20}/>
        <MenuItem label={"Credito"} iconImage={"credit-card"} boxSize={20}/>
        <MenuItem label={"Transferencia"} iconImage={"credit-card"} boxSize={20}/>
      </Center>
    </Center>
  );
}
