import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../../pages/Login";
import RotaDrawerHome from "../RotaDrawerHome";

const Stack = createStackNavigator();

export default function RotaUsuario() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#BF1120",
          },
          headerTitleStyle:{
            color: 'white',
            
          }
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="RotaDrawerHome"
        component={RotaDrawerHome}
      />
    </Stack.Navigator>
  );
}
