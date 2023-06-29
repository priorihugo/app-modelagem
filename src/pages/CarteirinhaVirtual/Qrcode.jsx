import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Padding } from "@mui/icons-material";

export default function QRCodeCarteirinha() {
    const auth = useContext(AuthContext);
  
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerQr}>
          <QRCode
            value={auth.usuario?.matricula}
            size={250}
            color="black"
            backgroundColor="white"
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
          />
        </View>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    containerQr: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });