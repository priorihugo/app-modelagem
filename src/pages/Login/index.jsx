import React from "react";
import {
  Button,
  Center,
  Checkbox,
  Column,
  Divider,
  Heading,
  Row,
} from "native-base";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Center height={"full"} width="full" backgroundColor={"FUNDO.1"}>
      <Column width={"4/5"} space={4}>
        <Heading>Entrar</Heading>

        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => {
            return (
              <InputField
                label={"Email"}
                placeholder={"seu@email.com"}
                iconName={"person"}
                errorMessage={errors.email?.message}
                onChangeText={onChange}
              />
            );
          }}
        />

        <Controller
          control={control}
          name="password"
          render={({ field: { onChange } }) => {
            return (
              <InputField
                label={"Senha"}
                placeholder={"sua%senha"}
                iconName={"lock"}
                errorMessage={errors.password?.message}
                secureTextEntry={true}
                onChangeText={onChange}
              />
            );
          }}
        />

        <Divider backgroundColor={"black"} />

        <Button
          onPress={
            //handleSubmit(handleSignUp)
            () => {
              navigation.navigate("Home");
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
      <Divider w={"4/5"} mt={4} mb={4} bgColor={"PRIMARIO.1"} />

      <Column w={"4/5"}>
        <Text alignSelf={"center"} mb={1}>
          Não possui um cadastro?
        </Text>
        <Button
          onPress={() => {
            navigation.navigate("Cadastro de Usuario");
          }}
        >
          Cadastre-se
        </Button>
      </Column>
    </Center>
  );
}
