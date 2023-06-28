import React, { useState } from "react";
import { Alert } from "react-native";
import {
  Button,
  Center,
  Checkbox,
  Column,
  Divider,
  Heading,
  Row,
  Text,
} from "native-base";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { ControlledInputField } from "../../components/ControlledInputField";

import Usuario from "../../data/classes/User.js";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <Center height={"full"} width="full" backgroundColor={"#F2F2F2"}>
      <Column width={"4/5"} space={4}>
        <Heading color={'#BF1120'} >Entrar</Heading>

        <ControlledInputField
          control={control}
          errors={errors}
          inputLabel={"Email"}
          leftIconName={"person"}
          name={"email"}
          placeholder={"Insira seu email"}
          content={email}
        />

        <ControlledInputField
          control={control}
          errors={errors}
          inputLabel={"Senha"}
          leftIconName={"lock"}
          name={"password"}
          placeholder={"Insira sua senha"}
          content={password}
        />

        <Divider backgroundColor={"black"} />

        <Button
          backgroundColor={"#BF1120"}
          onPress={
            () => {
              Alert(email)
              console.log('login pressed')
            }
          }
        >
          <Heading color={"white"}>Login</Heading>
        </Button>

        <Row>
          <Checkbox value={true}>
            <Text color={"black"}>Manter conectado</Text>
          </Checkbox>
        </Row>
      </Column>
      <Divider w={"4/5"} mt={4} mb={4} bgColor={"black"} />

      <Column w={"4/5"}>
        <Text alignSelf={"center"} mb={1}>
          Não possui um cadastro?
        </Text>
        <Button
          backgroundColor={"#BF1120"}
          onPress={() => {
            navigation.navigate("RotaDrawerHome");
          }}
        >
          Cadastre-se
        </Button>
      </Column>
    </Center>
  );
}
