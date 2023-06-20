import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Login from "../../pages/Login";
import RotaDrawerHome from "../RotaDrawerHome";

const Stack = createStackNavigator();

export default function RotaUsuario() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen options={{
        headerShown: false,
      }} name= "RotaDrawerHome" component={RotaDrawerHome} />
      
    </Stack.Navigator>
  );
}
