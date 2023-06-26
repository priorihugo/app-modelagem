import React from "react";
import { Center, Flex, Text, VStack } from "native-base";
import MenuItem from "../../components/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";

export default function Recarga() {
  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"}>
      <Center flexDirection={"row"} alignItems={"flex-start"}>
        <MenuItem
          label={"Pix"}
          Icon={<FontAwesomeIcon icon={faPix} size={40} color={"white"} />}
          boxSize={20}
          buttonColor="#BF1120"
        />
        <MenuItem
          label={"Credito"}
          iconName={"credit-card"}
          boxSize={20}
          buttonColor="#BF1120"
        />
        <MenuItem
          label={"Transferencia Bancaria"}
          Icon={
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              color={"white"}
              size={40}
            />
          }
          iconName={"credit-card"}
          boxSize={20}
          buttonColor="#BF1120"
        />
      </Center>
    </Center>
  );
}
