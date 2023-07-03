import React, { useCallback, useContext } from "react";
import {
  Button,
  Center,
  Column,
  Divider,
  Row,
  Text,
  VStack,
  Spinner,
} from "native-base";
import { ControlledInputField } from "../../components/ControlledInputField";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { useFocusEffect } from "@react-navigation/core";
import { Alert } from "react-native";
import { useState } from "react";

export default function Transferencia() {
  const {
    control,
    handleSubmit,
    getValues,

    formState: { errors },
  } = useForm();

  const auth = useContext(AuthContext);

  const [rl, setRL] = useState(false);
  const [isLoading , setIsLoading] = useState(true)

  const reload = () => {
    setRL(!rl);
  };

  useFocusEffect(
    useCallback(() => {
      console.log('Transferencia')
      setIsLoading(true)
      const update = async () => {
        await auth.updateCarteirinha();
        setIsLoading(false)
      };
      update();
      setIsLoading(false);
    }, [rl])
  );

  const handleConfirm = async () => {
    const data = getValues();

    try {
      //11122233344
      auth.carteirinha.compartilharSaldo(data.cpf, data.valor);
    } catch (err) {
      if (err === "Usuario não encontrado") {
        Alert.alert("Usuario não encontrado");
      }
      Alert.alert("Operação não concluida");
    }

    reload();
  };

  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"}>
      {isLoading ? (
        <Center flex={'1'}>
          <Spinner />
        </Center>
      ) : (
        <>
          <Column w={"90%"}>
            <Text>Origem</Text>
            <Divider my={1} />
            <Row mx={4} justifyContent={"space-between"}>
              <Text>Nome:</Text>
              <Text>{auth.usuario.nome}</Text>
            </Row>
            <Row mx={4} justifyContent={"space-between"}>
              <Text>CPF:</Text>
              <Text>{auth.usuario.cpf}</Text>
            </Row>
            <Row mx={4} justifyContent={"space-between"}>
              <Text>Saldo Atual</Text>
              <Text>{auth.carteirinha.saldo}</Text>
            </Row>
            <Divider my={1} />
          </Column>
        </>
      )}

      <Column w={"90%"}>
        <Text>Destino</Text>

        <ControlledInputField
          control={control}
          errors={errors}
          name={"cpf"}
          inputLabel={"CPF"}
          leftIconName={"person"}
          placeholder={"Digite o cpf destino"}
        />

        <ControlledInputField
          control={control}
          errors={errors}
          name={"valor"}
          inputLabel={"Valor"}
          leftIconName={"money"}
          placeholder={"Digite o valor desejado"}
        />
      </Column>

      <Button
        w={"90%"}
        my={4}
        backgroundColor={"#BF1120"}
        onPress={handleConfirm}
      >
        Confirmar
      </Button>
    </Center>
  );
}
