import React from "react";
import { Center, ScrollView, Text, VStack } from "native-base";
import { CardapioItem } from "./CardapioItem";

export default function Cardapio() {
  return (
    <Center flex={"1"} backgroundColor={"#F2F2F2"}>
      <ScrollView>
        <CardapioItem
          title={"Prato Principal"}
          description={"Isca de Frango ao molho de ervas"}
        />
        <CardapioItem
          title={"Prato Vegetariano"}
          description={"Bolinho de Feijão"}
        />
        <CardapioItem
          title={"Guarnição"}
          description={"Macarrão alho e óleo"}
        />
        <CardapioItem
          title={"Acompanhamento"}
          description={"Arroz Branco, Arroz integral e Feijão Preto"}
        />
        <CardapioItem title={"Sobremesa"} description={"Doce ou Fruta"} />
        <CardapioItem title={"Bebida"} description={"Suco"} />
      </ScrollView>
    </Center>
  );
}
