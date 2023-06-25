import React from "react";
import { Center, Column, Heading, Image, Row, Text } from "native-base";

export default function Carteirinha() {
  const placeholder = require("../../assets/profile-placeholder.jpg");

  return (
    <Column borderRadius={7} backgroundColor={"gray.200"} w={"90%"}>
      <Row
        backgroundColor={"#BF1120"}
        color={"white"}
        borderTopRadius={7}
        justifyContent={"space-between"}
        p={2}
      >
        <Center>
          <Heading italic bold={false} color={"white"}>
            ufjf
          </Heading>
        </Center>

        <Column>
          <Text color={"white"}>Universidade Federal de Juiz de Fora</Text>
          <Text color={"white"}>Estudante/student</Text>
        </Column>
      </Row>

      <Row p={2}>
        <Center>
          <Image source={placeholder} size={40}/>
        </Center>

        <Column flex={"1"} my={2}>
          <Text color={"red.400"}>Nome/Name:</Text>
          <Text>Zezinho</Text>
          <Text color={"red.400"}>Curso/Program:</Text>
          <Text>Sistemas de informação</Text>

          <Column w={"100%"}>
            <Text color={"red.400"}>Matricula/Reg.#:</Text>
            <Text>202011111</Text>

            <Row justifyContent={"space-between"}>
              <Column>
                <Text color={"red.400"}>CPF:</Text>
                <Text>111.222.333-44</Text>
              </Column>

              <Column>
                <Text color={"red.400"}>Identidade/ID:</Text>
                <Text>123456789</Text>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>
    </Column>
  );
}
