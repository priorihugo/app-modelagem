import React from "react";
import {
  Center,
  Column,
  Divider,
  Heading,
  Image,
  Row,
  Text,
  VStack,
} from "native-base";
import { useWindowDimensions } from "react-native";

export function Noticia({ item }) {
  const winSize = useWindowDimensions();

  return (
    <Row
      borderWidth={1}
      borderRadius={4}
      borderColor={"black"}
      w={winSize.width - 80}
      backgroundColor={"gray.100"}
      p={2}
    >
      <Center h={"100%"} backgroundColor={"black"}>
        <Image size={"lg"} resizeMode="contain" source={item.image} />
      </Center>
      <Column p={1}>
        <Heading>{item.tag}</Heading>
        <Divider />
        <Text>{item.title}</Text>
      </Column>
    </Row>
  );
}
