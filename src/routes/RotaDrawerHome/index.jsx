import React from "react";
import { VStack } from "native-base";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../../pages/Home";
import Cardapio from "../../pages/Cardapio";
import CarteirinhaVirtual from "../../pages/CarteirinhaVirtual";
import Informacoes from "../../pages/Informacoes";
import Recarga from "../../pages/Recarga";
import Saldo from "../../pages/Saldo";
import Transferencia from "../../pages/Transferencia";
import { CustomDrawer } from "./CustomDrawer";

const Drawer = createDrawerNavigator();

export default function RotaDrawerHome() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{

        headerTintColor:'white',

        headerStyle: {
          backgroundColor: "#BF1120",
        },
        headerTitleStyle: {
          color: "#F2F2F2",
        },
      }}
    >
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
    </Drawer.Navigator>
  );
}
