import { NavigationContainer } from '@react-navigation/native';
import { Flex } from 'native-base';
import React from 'react';
import { View } from 'react-native';
import { RotaUsuario } from './RotaUsuario';


export function Routes() {
  return (
    <NavigationContainer>
      <RotaUsuario/>
    </NavigationContainer>
  );
}