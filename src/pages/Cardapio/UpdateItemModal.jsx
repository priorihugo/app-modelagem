import React, { useState } from "react";
import {
  VStack,
  Modal,
  Button,
  IconButton,
  Pressable,
  Image,
  Center,
} from "native-base";
import { ControlledInputField } from "../../components/ControlledInputField";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import { useForm } from "react-hook-form";
import { TouchableOpacity } from "react-native";
import { Alert } from "react-native";

export function UpdateItemModal({ notify, setNotify, type, cardapio , reload }) {
  const dictionary = {
    acompanhamento: "Acompanhamento",
    opcao: "Vegetariano",
    sobremesa: "Sobremesa",
    principal: "Principal",
    guarnicao: "Guarnição",
  };

  const [foto, setFoto] = useState(undefined);

  console.log("foto ", foto);

  const {
    control,
    handleSubmit,
    getValues,
    trigger,
    formState: { errors },
  } = useForm();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      base64: true,
      quality: 1,
    });

    console.log("image picker ", result);

    if (!result.canceled) {
      //state tem as info de base64 e uri
      setFoto(result.assets[0]);
    }
  };

  const handleConfirm = async () => {
    const data = getValues();

    if (
      foto == undefined ||
      data.name == "" ||
      data.name == undefined ||
      data.descricao == "" ||
      data.descricao == undefined ||
      data.ingredientes == "" ||
      data.ingredientes == undefined
    ) {
      Alert.alert("Dados não preenchidos ");
    } else {
      try {
        await cardapio.registrarPrato({
          tipo: type,
          nome: data.name,
          foto: "data:image/jpeg;base64," + foto?.base64,
          descricao: data.descricao,
          ingredientes: data.ingredientes,
        });
      } catch {}

      reload();
      setNotify(false)
    }
    //  async registrarPrato({ tipo, nome, foto, descricao, ingredientes }) {
  };

  return (
    <Modal isOpen={notify} onClose={() => setNotify(false)}>
      <Modal.Content>
        <Modal.CloseButton onPress={() => setNotify(false)} />
        <Modal.Header>Editar {dictionary[type]}</Modal.Header>
        <Modal.Body>
          <Center w={"100%"} h={40}>
            {foto ? (
              <TouchableOpacity onPress={pickImage}>
                <Image
                  size={40}
                  source={{ uri: "data:image/jpeg;base64," + foto?.base64 }}
                />
              </TouchableOpacity>
            ) : (
              <IconButton
                onPress={pickImage}
                icon={<MaterialIcons name={"add"} />}
              />
            )}
          </Center>

          <ControlledInputField
            control={control}
            errors={errors}
            inputLabel={"Nome do Prato"}
            name={"name"}
            placeholder={"nome do prato"}
          />
          <ControlledInputField
            control={control}
            errors={errors}
            inputLabel={"Ingredientes"}
            name={"ingredientes"}
            placeholder={"ingredientes"}
          />
          <ControlledInputField
            control={control}
            errors={errors}
            inputLabel={"Descrição"}
            name={"descricao"}
            placeholder={"descrição"}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button.Group>
            <Button
              backgroundColor={"error.300"}
              onPress={() => {
                setNotify(false);
              }}
            >
              Cancelar
            </Button>
            <Button backgroundColor={"success.300"} onPress={handleConfirm}>
              Salvar
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
}
