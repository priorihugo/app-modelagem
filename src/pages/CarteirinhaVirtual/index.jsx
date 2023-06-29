import React from 'react';
import { Center, Divider, Text, VStack } from 'native-base';
import Carteirinha from './Carteirinha';
import QRCode from './Qrcode';
import QRCodeCarteirinha from './Qrcode';


export default function CarteirinhaVirtual() {
  return (
    <Center flex ={'1'} backgroundColor={'#F2F2F2'} py={100}>
        <Carteirinha/>   


        <Divider my ={2} />

        <QRCodeCarteirinha/> 
    </Center>
  );
}