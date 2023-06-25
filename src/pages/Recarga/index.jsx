import React from "react";
import { Center, Flex, Text, VStack } from "native-base";
import MenuItem from "../../components/MenuItem";

export default function Recarga() {
  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"}>
      <Center flexDirection={"row"}>
        <MenuItem label={"Pix"} boxSize={20} buttonColor="#BF1120" />
        <MenuItem
          label={"Credito"}
          iconName={"credit-card"}
          boxSize={20}
          buttonColor="#BF1120"
        />
        <MenuItem
          label={"Transferencia"}
          iconName={"credit-card"}
          boxSize={20}
          buttonColor="#BF1120"
        />
      </Center>
    </Center>
  );
}
