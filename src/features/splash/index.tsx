import { Center, Image } from '@chakra-ui/react';
import React from 'react';

function Splash() {
  return (
    <Center w="full" h="100vh">
      <Image src="/assets/VerticalLogo.svg" alt="vertical-logo" w="252px" />
    </Center>
  );
}

export default Splash;
