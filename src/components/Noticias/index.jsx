import React from "react";
import {
  Center,
  FlatList,
  Flex,
  Heading,
  Icon,
  Image,
  Row,
  Text,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { Noticia } from "./Noticia";
import logoUfjf from "../../assets/placeholder.jpg"

const data = [
  {
    tag: "Surpresinha",
    title: "Pedra encontrada no ru",
    image: logoUfjf,
  },
  {
    tag: "Carne de Esquilo",
    title: "Nova especiaria do RU",
    image: logoUfjf,
  },
  {
    title: "titulo placehodler 3",
    image: null,
  },
  {
    title: "titulo placehodler 4",
    image: null,
  },
  {
    title: "titulo placehodler 5",
    image: null,
  },
];

export function Noticias() {
  const winSize = useWindowDimensions();

  return (
    <Flex flex={"1"} px={8}>
      <Heading marginBottom={4}>Notícias</Heading>
      <FlatList
        maxH={40}
        pagingEnabled={true}
        data={data}
        ItemSeparatorComponent={() => {
          return (
            <Icon
              alignSelf={"center"}
              size={5}
              as={<MaterialIcons name={"chevron-right"} />}
            />
          );
        }}
        renderItem={({ item }) => <Noticia item={item} />}
        horizontal={true}
      />
    </Flex>
  );
}
