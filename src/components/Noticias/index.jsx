import React from "react";
import { FlatList, Flex, Heading, Icon, Image, Row, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";


const data = [
  {
    title: "titulo placehodler 1",
    image: null,
  },
  {
    title: "titulo placehodler 2",
    image: null,
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
    <Flex flex={"1"} px={4} py={10}>
        <Heading>Notícias</Heading>
      <FlatList
      pagingEnabled={true}
        data={data}
        ItemSeparatorComponent={()=>{
            return (
                <Icon
                  alignSelf={"center"}
                  size={5}
                  as={<MaterialIcons name={"chevron-right"} />}
                />
              );
        }}
        renderItem={({ item }) => {
          return (
            <Row borderWidth={1} borderRadius={4} borderColor={'black'} w={winSize.width - 80} backgroundColor={'gray.100'}>
              <Image src={item.image} />
              <Text>{item.title}</Text>
            </Row>
          );
        }}
        horizontal={true}
      />
    </Flex>
  );
}
