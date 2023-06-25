import React from 'react';
import { Center, Text, VStack } from 'native-base';
import Carteirinha from './Carteirinha';


export default function CarteirinhaVirtual() {
  return (
    <Center flex ={'1'} backgroundColor={'#F2F2F2'} >
        <Carteirinha/>        
    </Center>
  );
}