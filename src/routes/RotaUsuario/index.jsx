import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../../pages/Login";
import { RotaDrawerHome } from "../RotaDrawerHome";

const Stack = createStackNavigator();

export function RotaUsuario() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Login"} component={Login} />
      <Stack.Screen
        options={{ headerShown: false }}
        name={"Rota_Drawer_Home"}
        component={RotaDrawerHome}
      />
    </Stack.Navigator>
  );
}
