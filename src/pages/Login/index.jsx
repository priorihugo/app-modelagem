import React, { useContext, useState } from "react";
import { Alert } from "react-native";
import {
  Button,
  Center,
  Checkbox,
  Column,
  Divider,
  Heading,
  Modal,
  Row,
  Spinner,
  Text,
} from "native-base";
import { Controller, useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { ControlledInputField } from "../../components/ControlledInputField";
import { Image } from "react-native"
import { ScrollView } from "native-base";
import { StyleSheet } from "react-native";
import logoLogin from "../../assets/UFJF-logo.jpg"; // Importe a imagem corretamente

import Usuario from "../../data/classes/User.js";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { signIn } from "../../data/Auth/login";
import { AuthContext } from "../../context/authContext";

export default function Login() {
  const navigation = useNavigation();

  const auth = useContext(AuthContext);

  const [isLoading , setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm();

  const handleLogin = async () => {

    setIsLoading(true);
    if (trigger()) {
      const data = getValues();
      console.log("data ", data);

      try {
        await auth.realizarLogin(data.email, data.password);
        navigation.navigate("RotaDrawerHome");
      } catch (err) {
        console.log("handle login err ", err);
        Alert.alert("Usuario ou senha incorretos")
      }
    }
    setIsLoading(false);
  };

  return (
    <ScrollView>
    <Center height={"full"} width="full" backgroundColor={"#F2F2F2"}>
      <Column width={"4/5"} space={4}>
        <Image 
          source={logoLogin}
          style={{
            marginTop: 25,
            width: 139,
            height: 127,
            borderRadius: 41,
            alignSelf: 'center',
          }}
        />
        <Heading color={'#BF1120'} justifyContent={'center'} alignItems={'center'} textAlign={'center'}>Entrar</Heading>

        <ControlledInputField
          control={control}
          errors={errors}
          inputLabel={"Email"}
          leftIconName={"person"}
          name={"email"}
          placeholder={"Insira seu email"}
        />

        <ControlledInputField
          control={control}
          errors={errors}
          inputLabel={"Senha"}
          leftIconName={"lock"}
          name={"password"}
          placeholder={"Insira sua senha"}
          secureTextEntry={true}
        />

        <Divider backgroundColor={"black"} />

        <Button backgroundColor={"#BF1120"} onPress={handleLogin}>
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
          borderRadius={300}
          onPress={() => {
            Alert.alert("ainda não implementado");
          }}
        >
          Cadastre-se
        </Button>
      </Column>

      <Modal isOpen ={isLoading} onClose={setIsLoading} backgroundColor={'transparent'} opacity={95}   >
        <Spinner size={'lg'}/>
      </Modal>
    </Center>
    </ScrollView>
  );
}
