import React, { useContext } from "react";
import { Center, Column, Divider, Heading, Image, Row, Text } from "native-base";
import { AuthContext } from "../../context/authContext";

export default function Carteirinha() {
  const placeholder = require("../../assets/profile-placeholder.jpg");
  const logo = require("../../assets/UFJF-logo.jpg");

  const auth = useContext(AuthContext);

  return (
    <Column borderRadius={7} backgroundColor={"gray.200"} w={"90%"}>
      <Row
        backgroundColor={"#A6121F"}
        color={"white"}
        borderTopRadius={7}
        justifyContent={"space-between"}
        p={2}
      >
        <Center>
          <Image source={logo} size={10} />
        </Center>

        <Column>
          <Text color={"white"}>Universidade Federal de Juiz de Fora</Text>
          <Text color={"white"}>Estudante/student</Text>
        </Column>
      </Row>

      <Row p={2} fontSize={11}>
        <Center mr={2}>
          <Image source={placeholder} size={"md"} />
        </Center>

        <Column flex={"1"} my={2}>
          <Text fontSize={11} color={"red.400"}>
            Nome/Name:
          </Text>
          <Text fontSize={11}>{auth.usuario?.nome}</Text>
          <Text fontSize={11} color={"red.400"}>
            Curso/Program:
          </Text>
          <Text fontSize={11}>{auth.usuario?.curso}</Text>

          <Column w={"100%"}>
            <Text fontSize={11} color={"red.400"}>
              Matricula/Reg.#:
            </Text>
            <Text fontSize={11}>{auth.usuario?.matricula}</Text>

            <Row justifyContent={"space-between"}>
              <Column>
                <Text fontSize={11} color={"red.400"}>
                  CPF:
                </Text>
                <Text fontSize={11}>{auth.usuario?.cpf}</Text>
              </Column>

              <Column>
                <Text fontSize={11} color={"red.400"}>
                  Identidade/ID:
                </Text>
                <Text fontSize={11}>{auth.usuario?.rg}</Text>
              </Column>
            </Row>
          </Column>
        </Column>
      </Row>

      
     
    </Column>
  );
}
