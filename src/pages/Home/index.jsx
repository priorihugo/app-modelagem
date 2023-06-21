import React from 'react';
import { Center, Flex, Text, VStack } from 'native-base';
import { Noticias } from '../../components/Noticias';
import MenuItem from '../../components/MenuItem';

export default function Home() {
  return (
    <Center flex ={'1'}>
        <Noticias />

        <Flex flex={'1'} flexDirection={'row'} flexWrap={'wrap'} justifyContent={'space-evenly'} >
          <MenuItem
            label={'Cardapio'}
            iconImage={'restaurant-menu'}
          />
          <MenuItem
            label={'Extrato'}
            iconImage={'attach-money'}
          />
          <MenuItem
            label={'Recarga'}
            iconImage={'credit-card'}
            />
          <MenuItem
            label={'Carteirinha'}
            iconImage={'person'}

          />
        </Flex>
    </Center>
  );
}