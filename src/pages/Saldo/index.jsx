import React from "react";
import {
  Center,
  Column,
  Divider,
  FlatList,
  Heading,
  ScrollView,
  Text,
  VStack,
} from "native-base";

const data = [
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: 100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: 100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },  
  {
    date: "11/11/11 - 11:11h",
    amount: -100,
  },
];

export default function Saldo() {
  const saldo = "21,90";
  return (
    <Center flex={"1"} flexDirection={"column"} backgroundColor={"#F2F2F2"}>
      <Divider />
      <Heading marginTop={10}>Seu saldo</Heading>
      <Center w={"90%"} borderWidth={1} borderRadius={4} borderColor={"#CFDEE7"} py={2} backgroundColor={"#CFDEE7"} marginTop={3}>
        <Text color={"#1C1D21"} fontWeight={"bold"} fontSize={16}>R${saldo}</Text>
      </Center>
      <Divider my={4}/>

      <Heading >Seu Extrato</Heading>

      <FlatList
        nestedScrollEnabled
        w={"90%"}
        marginBottom={10}
        data={data}
        ItemSeparatorComponent={() => {
          return <Divider my={1} />;
        }}
        renderItem={({ item }) => {
          return (
            <Column flex={"1"}>
              <Text>{item.date}</Text>

              {item.amount < 0 ? (
                <Text>Destino: </Text>
              ) : (
                <Text>Origem: </Text>
              )}

              <Center
                w={"100%"}
                borderWidth={1}
                borderColor={"#CFDEE7"}
                borderRadius={4}
                py={2}
                backgroundColor={"#CFDEE7"}
              >
                {item.amount < 0 ? (
                  <Text color={"red.400"} fontWeight={"bold"} fontSize={16}>-R${item.amount * -1}</Text>
                ) : (
                  <Text color={"green.400"} fontWeight={"bold"} fontSize={16}>R${item.amount}</Text>
                )}
              </Center>
            </Column>
          );
        }}
      />
    </Center>
  );
}
