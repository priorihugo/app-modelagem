import React from "react";
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

export default function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Center height={"full"} width="full" backgroundColor={"#F2F2F2"}>
      <Column width={"4/5"} space={4}>
        <Heading color={'#BF1120'} >Entrar</Heading>

        <ControlledInputField
          control={control}
          errors={errors}
          inputLabel={"CPF"}
          leftIconName={"person"}
          name={"cpf"}
          placeholder={"Insira seu cpf"}
        />

        <ControlledInputField
          control={control}
          errors={errors}
          inputLabel={"Senha"}
          leftIconName={"lock"}
          name={"password"}
          placeholder={"Insira sua senha"}
        />

        <Divider backgroundColor={"black"} />

        <Button
          backgroundColor={"#BF1120"}
          onPress={
            //handleSubmit(handleSignUp)
            () => {
              console.log('login pressed')
              navigation.navigate("RotaDrawerHome");
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
