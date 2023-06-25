import React from "react";
import { Avatar, Center, Column, Row, Text, Image, Heading } from "native-base";
import {
  DrawerContentScrollView,
  DrawerItem,
  Drawer,
} from "@react-navigation/drawer";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

/*
<Drawer.Screen name="Principal" component={Home} />
      <Drawer.Screen name="Cardapio" component={Cardapio} />
      <Drawer.Screen
        name="Carteirinha Virtual"
        component={CarteirinhaVirtual}
      />
      <Drawer.Screen name="Informações" component={Informacoes} />
      <Drawer.Screen name="Recarga" component={Recarga} />
      <Drawer.Screen name="Saldo" component={Saldo} />
      <Drawer.Screen name="Transferencia" component={Transferencia} />


*/

export function CustomDrawer() {
  const image = require("../../assets/UFJF-logo.jpg");
  const navigation = useNavigation();
  console.log(image);
  return (
    <Column flex={"1"} backgroundColor={"#261F1D"}>
      <Row my={10} alignItems={"center"} p={4} space={2}>
        <Image
          source={image}
          alt="UFJF Logo"
          borderRadius={100}
          resizeMode="contain"
          size={20}
        />

        <Heading color={"#F2F2F2"}>Connect</Heading>
      </Row>
      <DrawerContentScrollView>
        <DrawerItem
          inactiveTintColor="white"
          label={"Principal"}
          icon={({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          )}
          onPress={() => {
            navigation.navigate("Principal");
          }}
        />
        <DrawerItem
          inactiveTintColor="white"
          label={"Carteirinha Virtual"}
          icon={({ color, size }) => (
            <MaterialIcons name="credit-card" color={color} size={size} />
          )}
          onPress={() => {
            navigation.navigate("Carteirinha Virtual");
          }}
        />
        <DrawerItem
          inactiveTintColor="white"
          label={"Informações"}
          icon={({ color, size }) => (
            <MaterialIcons name="info" color={color} size={size} />
          )}
          onPress={() => {
            navigation.navigate("Informações");
          }}
        />
        <DrawerItem
          inactiveTintColor="white"
          label={"Recarga"}
          icon={({ color, size }) => (
            <MaterialIcons name="add-card" color={color} size={size} />
          )}
          onPress={() => {
            navigation.navigate("Recarga");
          }}
        />
        <DrawerItem
          inactiveTintColor="white"
          label={"Saldo"}
          icon={({ color, size }) => (
            <MaterialIcons name="attach-money" color={color} size={size} />
          )}
          onPress={() => {
            navigation.navigate("Saldo");
          }}
        />
        <DrawerItem
          inactiveTintColor="white"
          label={"Transferencia"}
          icon={({ color, size }) => (
            <MaterialIcons name="home" color={color} size={size} />
          )}
          onPress={() => {
            navigation.navigate("Transferencia");
          }}
        />
      </DrawerContentScrollView>

      <Column>
        <Row alignItems={"center"} p={4} space={4}>
          <Avatar />
          <Text color={"white"}>Name placeholder</Text>
        </Row>
        <DrawerItem
          inactiveTintColor="white"
          label={"Sair"}
          icon={({ color, size }) => (
            <MaterialIcons name="exit-to-app" color={color} size={size} />
          )}
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </Column>
    </Column>
  );
}
