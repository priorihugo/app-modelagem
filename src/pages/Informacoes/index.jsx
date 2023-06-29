import React from "react";
import { Center, Column, Divider, Heading, Row, ScrollView, Text, VStack } from "native-base";
import { Image } from "native-base";
import RUCampus from "../../assets/movimentoCampus.jpg"
import RUCentro from "../../assets/image-4.png"
import { FitScreen } from "@mui/icons-material";

export default function Informacoes() {
  return (
    <ScrollView>
    <Center flex={"1"} backgroundColor={'#F2F2F2'}>
      <Row w={'90%'} justifyContent={'space-between'} marginTop={15}>
      <Heading color={'red.700'}>Movimentação</Heading>
      <Column>
      <Text>Atualizado em :</Text>
      <Text>11/11/11 às 12:35h</Text>
      </Column>

      </Row>

      <Divider />

      <Column w={"90%"} paddingLeft={15} paddingRight={15}>
        <Heading marginTop={50} color={'red.700'}>RU Campus</Heading>

        <Center marginTop={5} marginBottom={2} borderWidth={1} borderRadius={200} borderColor={"#CFDEE7"} py={2} backgroundColor={"#CFDEE7"} >
          <Text color={"#1C1D21"} fontWeight={"bold"} fontSize={20}>CHEIO</Text>
        </Center>

        <Image
          source={RUCampus}
          style={{
            width: 400,
            height: 130,
            resizeMode: "contain",
            alignSelf: 'center',
          }}
        />

        <Divider />
        <Heading marginTop={50} color={'red.700'}>RU Centro</Heading>

        <Center marginTop={5} marginBottom={2} borderWidth={1} borderRadius={200} borderColor={"#CFDEE7"} py={2} backgroundColor={"#CFDEE7"} >
          <Text color={"#1C1D21"} fontWeight={"bold"} fontSize={20}>MODERADO</Text>
        </Center>

        <Image
          source={RUCentro}
          style={{
            width: 400,
            height: 130,
            resizeMode: "contain",
            alignSelf: 'center',
          }}
        />
      </Column>
    </Center>
    </ScrollView>
  );
}
