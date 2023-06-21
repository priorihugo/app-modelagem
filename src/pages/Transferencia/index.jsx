import React from "react";
import { Button, Center, Column, Divider, Row, Text, VStack } from "native-base";
import { ControlledInputField } from "../../components/ControlledInputField";
import { useForm } from "react-hook-form";

export default function Transferencia() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Center flex={"1"}>
      <Column w={"90%"}>
        <Text>Origem</Text>
        <Divider my={1} />
        <Row mx={4} justifyContent={"space-between"}>
          <Text>Nome:</Text>
          <Text>Nome-Placeholder</Text>
        </Row>
        <Row mx={4} justifyContent={"space-between"}>
          <Text>CPF:</Text>
          <Text>CPF-Placeholder</Text>
        </Row>
        <Row mx={4} justifyContent={"space-between"}>
          <Text>Saldo Atual</Text>
          <Text>Saldo-Placeholder</Text>
        </Row>
        <Divider my={1}/>
      </Column>

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

      <Button w={'90%'} my={4}>
        Confirmar
      </Button>
    </Center>
  );
}
