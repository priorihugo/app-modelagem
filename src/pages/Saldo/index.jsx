import React, { useCallback, useContext, useState } from "react";
import {
  Center,
  Column,
  Divider,
  FlatList,
  Heading,
  Row,
  Spinner,
  Text,
  VStack,
} from "native-base";
import { AuthContext } from "../../context/authContext";
import { useFocusEffect } from "@react-navigation/core";

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
];

export default function Saldo() {
  const auth = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      const update = async () => {
        await auth.updateCarteirinha();
        setIsLoading(false);
      };
      update();

      console.log("carteirinha ", auth.carteirinha);
    }, [])
  );

  return (
    <Center flex={"1"} flexDirection={"column"} backgroundColor={"#F2F2F2"}>
      {isLoading ? (
        <Center flex={"1"}>
          <Spinner />
        </Center>
      ) : (
        <>
          <Divider />
          <Heading marginTop={10}>Seu saldo</Heading>
          <Center
            w={"90%"}
            borderWidth={1}
            borderRadius={4}
            borderColor={"#CFDEE7"}
            py={2}
            backgroundColor={"#CFDEE7"}
            marginTop={3}
          >
            <Text color={"#1C1D21"} fontWeight={"bold"} fontSize={16}>
              R${auth.carteirinha?.saldo}
            </Text>
          </Center>
          <Divider my={4} />

          <Heading>Seu Extrato</Heading>

          <FlatList
            nestedScrollEnabled
            w={"90%"}
            marginBottom={10}
            data={auth.carteirinha?.historico}
            ItemSeparatorComponent={() => {
              return <Divider my={1} />;
            }}
            renderItem={({ item }) => {
              return (
                <Column flex={"1"}>
                  <Text>Tipo : {item?.type.toUpperCase()}</Text>

                  <Row justifyContent={"space-between"}>
                    {item?.value < 0 ? (
                      <Column>
                        <Text>Destino: {item.source} </Text>
                        <Text>{item?.sourceCPF} </Text>
                      </Column>
                    ) : (
                      <Column>
                        <Text>Origem: {item.source}</Text>
                        <Text>{item?.sourceCPF} </Text>
                      </Column>
                    )}

                    <Text>
                      Data:
                      {item?.date.toLocaleString("pt-BR", {
                        timeZone: "America/Sao_Paulo",
                        dateStyle: "medium",
                      })}
                    </Text>
                  </Row>

                  <Center
                    w={"100%"}
                    borderWidth={1}
                    borderColor={"#CFDEE7"}
                    borderRadius={4}
                    py={2}
                    backgroundColor={"#CFDEE7"}
                  >
                    {item?.value < 0 ? (
                      <Text color={"red.400"} fontWeight={"bold"} fontSize={16}>
                        -R${item?.value * -1}
                      </Text>
                    ) : (
                      <Text
                        color={"green.400"}
                        fontWeight={"bold"}
                        fontSize={16}
                      >
                        R${item?.value}
                      </Text>
                    )}
                  </Center>
                </Column>
              );
            }}
          />
        </>
      )}
    </Center>
  );
}
