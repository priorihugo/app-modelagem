import React, { useCallback, useContext } from "react";
import { Center, Flex, Text, VStack } from "native-base";
import MenuItem from "../../components/MenuItem";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPix } from "@fortawesome/free-brands-svg-icons";
import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons";
import { ControlledInputField } from "../../components/ControlledInputField";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { Alert } from "react-native";
import { useFocusEffect } from "@react-navigation/core";

export default function Recarga() {
  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm();

  useFocusEffect(
    useCallback(() => {
      const update = async () => {
        await auth.updateCarteirinha();
      };
      update();

      console.log("carteirinha ", auth.carteirinha);
    }, [])
  );



  const auth = useContext(AuthContext);

  const handleConfirm = async (tipo, origem) => {
    const data = getValues();

    try {
      auth.carteirinha.adicionarSaldo(data.amount, tipo, origem , '');
      Alert.alert("Recarga realizada com sucesso")
    } catch (err) {
      Alert.alert("Não foi possivel adicionar saldo");
    }
  };

  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"}>
      <Center w={'100%'} p={4}>
        <ControlledInputField
          control={control}
          errors={errors}
          inputLabel={"Quantidade"}
          leftIconName={"money"}
          name={"amount"}
          placeholder={"Quantidade"}
        />
      </Center>

      <Center flexDirection={"row"} alignItems={"flex-start"}>
        <MenuItem
          label={"Pix"}
          Icon={<FontAwesomeIcon icon={faPix} size={40} color={"white"} />}
          boxSize={20}
          buttonColor="#BF1120"
          onPress={() => {
            handleConfirm("Pix", "Pix");
          }}
        />
        <MenuItem
          label={"Credito"}
          iconName={"credit-card"}
          boxSize={20}
          buttonColor="#BF1120"
          onPress={() => {
            handleConfirm("Credito", "Credito");
          }}
        />
        <MenuItem
          label={"Transferencia Bancaria"}
          Icon={
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              color={"white"}
              size={40}
            />
          }
          iconName={"credit-card"}
          boxSize={20}
          buttonColor="#BF1120"
          onPress={() => {
            handleConfirm("Transferencia Bancaria", "Transferencia Bancaria");
          }}
        />
      </Center>
    </Center>
  );
}
