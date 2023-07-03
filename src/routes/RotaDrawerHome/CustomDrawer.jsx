import React, { useContext } from "react";
import { Avatar, Center, Column, Row, Text, Image, Heading } from "native-base";
import {
  DrawerContentScrollView,
  DrawerItem,
  Drawer,
} from "@react-navigation/drawer";

import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

import { faMoneyBillTransfer } from "@fortawesome/free-solid-svg-icons/faMoneyBillTransfer";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons/faPiggyBank";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { AuthContext } from "../../context/authContext";

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
  const logo = require("../../assets/UFJF-logo.jpg");
  const navigation = useNavigation();
  const auth = useContext(AuthContext);
  return (
    <Column flex={"1"} backgroundColor={"#261F1D"}>
      <Row my={10} alignItems={"center"} p={4} space={2}>
        <Image
          source={logo}
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
            <FontAwesomeIcon icon={faIdCard} size={size} color={color} />
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
            <FontAwesomeIcon icon={faPiggyBank} color={color} size={size} />
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
            <FontAwesomeIcon
              icon={faMoneyBillTransfer}
              color={color}
              size={size}
            />
          )}
          onPress={() => {
            navigation.navigate("Transferencia");
          }}
        />
      </DrawerContentScrollView>

      <Column>
        <Row alignItems={"center"} p={4} space={4}>
          <Avatar source={{ uri: auth?.usuario.foto }} />

          <Column>
            <Text color={"white"}>{auth?.usuario?.nome}</Text>
            {auth.usuario.isAdmin ? (
              <Text color={"white"}>Administrador</Text>
            ) : (
              <Text color={"white"}>Usuario</Text>
            )}
          </Column>
        </Row>

        <DrawerItem
          inactiveTintColor="white"
          label={"Sair"}
          icon={({ color, size }) => (
            <MaterialIcons name="exit-to-app" color={color} size={size} />
          )}
          onPress={() => {
            try {
              auth.signout();
              navigation.navigate("Login");
            } catch (err) {
              console.log("sign out err ", err);
            }
          }}
        />
      </Column>
    </Column>
  );
}
