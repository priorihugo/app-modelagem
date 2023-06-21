import React from "react";
import { Center, Column, Flex, Heading, Image, Row, VStack } from "native-base";

export function CardapioItem({ title, description, imgSource }) {
  return (
    <Center w={"100%"}>
      <Row flex={1} my={4} w={"95%"} backgroundColor={"red.200"}>
        <Image src={imgSource} />
        <Column w={"100%"}>
          <Heading>{title}</Heading>
          <Center
            w={"100%"}
            borderWidth={1}
            borderColor={"black"}
            borderRadius={4}
          >
            {description}
          </Center>
        </Column>
      </Row>
    </Center>
  );
}
