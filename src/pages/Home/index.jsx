import React from "react";
import {
  Center,
  Column,
  Divider,
  Flex,
  Heading,
  PresenceTransition,
  Text,
  VStack,
} from "native-base";
import { Noticias } from "../../components/Noticias";
import MenuItem from "../../components/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import { useWindowDimensions } from "react-native";

export default function Home() {
  const winSize = useWindowDimensions();

  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"} py={5}>
      <PresenceTransition
        visible={true}
        initial={{
          opacity: 0,
          translateX: -1 * winSize.width,
        }}
        animate={{
          opacity: 1,
          translateX: 0,

        }}
        
        
      >
        <Noticias />

        <Column w={"100%"} p={4}>
          <Heading alignSelf={"flex-start"}>Opções</Heading>
          <Divider backgroundColor={"black"} my={2} />
        </Column>

        <Flex
          flex={"1"}
          flexDirection={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-evenly"}
          mb={20}
        >
          <MenuItem
            label={"Cardapio"}
            iconName={"restaurant-menu"}
            goTo={"Cardapio"}
            buttonColor={"#BF1120"}
          />
          <MenuItem
            label={"Extrato"}
            iconName={"attach-money"}
            goTo={"Saldo"}
            buttonColor={"#BF1120"}
          />
          <MenuItem
            label={"Recarga"}
            Icon={
              <FontAwesomeIcon icon={faPiggyBank} color={"white"} size={40} />
            }
            iconName={"credit-card"}
            goTo={"Recarga"}
            buttonColor={"#BF1120"}
          />
          <MenuItem
            label={"Carteirinha"}
            Icon={
              <FontAwesomeIcon
                icon={faIdCard}
                size={40}
                style={{ color: "white" }}
              />
            }
            iconName={"person"}
            goTo={"Carteirinha Virtual"}
            buttonColor={"#BF1120"}
          />
        </Flex>
      </PresenceTransition>
    </Center>
  );
}
