import React, { useContext } from "react";
import { Button, Center, Column, Divider, Row, Text, VStack } from "native-base";
import { ControlledInputField } from "../../components/ControlledInputField";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";

export default function Transferencia() {
  const auth = useContext(AuthContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <Center flex={"1"} backgroundColor={'#F2F2F2'}>
      <Column w={"90%"}>
        <Text>Origem</Text>
        <Divider my={1} />
        <Row mx={4} justifyContent={"space-between"}>
          <Text>Nome:</Text>
          <Text>{auth.usuario?.nome}</Text>
        </Row>
        <Row mx={4} justifyContent={"space-between"}>
          <Text>CPF:</Text>
          <Text>{auth.usuario?.cpf}</Text>
        </Row>
        <Row mx={4} justifyContent={"space-between"}>
          <Text>Saldo Atual</Text>
          <Text>{auth.usuario?.saldo}</Text>
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

      <Button w={'90%'} my={4} backgroundColor={'#BF1120'}>
        Confirmar
      </Button>
    </Center>
  );
}
