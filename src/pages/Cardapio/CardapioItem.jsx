import React from "react";
import {
  Button,
  Center,
  Column,
  Divider,
  Flex,
  Text,
  Heading,
  Image,
  Row,
  VStack,
  IconButton,
} from "native-base";
import { useState } from "react";
import { UpdateItemModal } from "./UpdateItemModal";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { MaterialIcons } from "@expo/vector-icons";

export function CardapioItem({
  item,
  type,
  cardapio,
  reload,
  imageLeft = true,
}) {
  const [notify, setNotify] = useState(false);

  const auth = useContext(AuthContext);

  const [rl, setRL] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const dictionary = {
    acompanhamento: "Acompanhamento",
    opcao: "Vegetariano",
    sobremesa: "Sobremesa",
    principal: "Principal",
    guarnicao: "Guarnição",
  };

  return (
    <Center w={"100%"}>
      <Row flex={1} my={4} w={"95%"} alignItems={"center"}>
        {item.foto && imageLeft != "" ? (
          <Center
            flex={"1"}
            maxW={"40%"}
            borderRadius={4}
            borderWidth={1}
            overflow={"hidden"}
            mr={2}
          >
            <Image
              flex={"1"}
              size={"lg"}
              resizeMode="cover"
              source={{ uri: item.foto }}
            />
          </Center>
        ) : null}
        <Column flex={"1"} minW={"60%"}>
          <Heading>{dictionary[type] ? dictionary[type] : type}</Heading>
          <Divider />
          <Column
            flex={"1"}
            borderWidth={1}
            borderColor={"black"}
            borderRadius={4}
            py={2}
            px={2}
          >
            <Text>Prato: {item.nome}</Text>
            <Text>Ingredientes: {item.ingredientes}</Text>
          </Column>
        </Column>

        {item.foto && !imageLeft != "" ? (
          <Center
            flex={"1"}
            maxW={"40%"}
            borderRadius={4}
            borderWidth={1}
            overflow={"hidden"}
            ml={2}
          >
            <Image
              flex={"1"}
              size={"lg"}
              resizeMode="cover"
              source={{ uri: item.foto }}
            />
          </Center>
        ) : null}
      </Row>
      <UpdateItemModal
        cardapio={cardapio}
        type={type}
        notify={notify}
        setNotify={setNotify}
        reload={reload}
      />
      {auth.usuario.isAdmin ? (
        <Button
          w={"90%"}
          variant={"outline"}
          leftIcon={
            <MaterialIcons
              name={"edit"}
              onPress={() => {
                console.log("press");
                setNotify(true);
              }}
            />
          }
        >
          Editar
        </Button>
      ) : null}
    </Center>
  );
}
