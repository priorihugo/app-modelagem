
import 'react-native-gesture-handler';

import { StatusBar } from "expo-status-bar";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import Routes from "./src/routes/index";

import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor='white'/>
        <Routes/>
    </NativeBaseProvider>
  );
}

