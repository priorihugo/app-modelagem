import React from "react";
import { Center, Column, Divider, Heading, Row, Text, VStack } from "native-base";

export default function Informacoes() {
  return (
    <Center flex={"1"} backgroundColor={'#F2F2F2'}>

      <Row w={'90%'} justifyContent={'space-between'}>
      <Text>Movimentação</Text>
      <Column>
      <Text>Atualizado as :</Text>
      <Text>11/11/11 as 11:32h</Text>
      </Column>

      </Row>

      <Divider />

      <Column w={"90%"}>
        <Heading>RU Campus</Heading>

        <Center borderWidth={1} borderRadius={4} borderColor={"black"}>
          Status
        </Center>

        <Text>Aqui entra uma imagem</Text>

        <Divider />

        <Heading>RU Centro</Heading>

        <Center borderWidth={1} borderRadius={4} borderColor={"black"}>
          Status
        </Center>

        <Text>Aqui entra uma imagem</Text>
      </Column>
    </Center>
  );
}
