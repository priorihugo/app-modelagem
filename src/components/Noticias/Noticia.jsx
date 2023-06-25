import React from "react";
import { Center, Image, Row, Text, VStack } from "native-base";
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
    >
      <Center>
        <Image src={item.image} />
      </Center>
      <Text>{item.title}</Text>
    </Row>
  );
}
