import React from "react";
import { Center, ScrollView, Text, Spinner, VStack } from "native-base";
import { CardapioItem } from "./CardapioItem";
import { useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useState } from "react";
import CardapioDataBase from "../../data/classes/CardapioDataBase";

export default function Cardapio() {
  const [cardapio, setCardapio] = useState();

  const [rl, setRL] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const reload = () => {
    setRL(!rl);
  };

  useFocusEffect(
    useCallback(() => {
      const fetch = async () => {
        const cardapio = new CardapioDataBase();
        await cardapio.fetch();
        setCardapio(cardapio);
        setIsLoading(false);
      };
      fetch();
    }, [rl])
  );

  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"}>
      {isLoading ? (
        <Center flex={"1"} height={"100%"}>
          <Spinner />
        </Center>
      ) : (
        <ScrollView w ={ '100%'}>
          {/*
    acompanhamento: "Acompanhamento",
    opcao: "Vegetariano",
    sobremesa : 'Sobremesa',
    principal : 'Principal',
    guarnicao : "Guarnição",
            */}
          <CardapioItem
            cardapio={cardapio}
            item={cardapio.pratos.principal}
            type={"principal"}
            reload={reload}
          />
          <CardapioItem
            cardapio={cardapio}
            item={cardapio.pratos.opcao}
            type={"opcao"}
            reload={reload}
            imageLeft={false}
          />
          <CardapioItem
            cardapio={cardapio}
            item={cardapio.pratos.acompanhamento}
            type={"acompanhamento"}
            reload={reload}
          />
          <CardapioItem
            cardapio={cardapio}
            item={cardapio.pratos.guarnicao}
            type={"guarnicao"}
            reload={reload}
            imageLeft={false}
          />
          <CardapioItem
            cardapio={cardapio}
            item={cardapio.pratos.sobremesa}
            type={"sobremesa"}
            reload={reload}
          />
        </ScrollView>
      )}
    </Center>
  );
}
