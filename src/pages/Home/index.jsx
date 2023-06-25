import React from "react";
import {
  Center,
  Column,
  Divider,
  Flex,
  Heading,
  Text,
  VStack,
} from "native-base";
import { Noticias } from "../../components/Noticias";
import MenuItem from "../../components/MenuItem";

export default function Home() {
  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"} py={5}>
      <Noticias />

      <Column w={'100%'} p={4}>
        <Heading  alignSelf={'flex-start'}>Opções</Heading>
        <Divider backgroundColor={'black'} my={2}/>
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
          iconName={"credit-card"}
          goTo={"Recarga"}
          buttonColor={"#BF1120"}
        />
        <MenuItem
          label={"Carteirinha"}
          iconName={"person"}
          goTo={"Carteirinha Virtual"}
          buttonColor={"#BF1120"}
        />
      </Flex>
    </Center>
  );
}
