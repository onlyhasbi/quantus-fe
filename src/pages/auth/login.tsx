import Illustration from '@/features/login/Illustration';
import LoginForm from '@/features/login/LoginForm';
import { GridItem, Grid, Center } from '@chakra-ui/react';

function auth() {
  return (
    <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} bg="#F9F9F9">
      <GridItem>
        <Center minH="100vh" bg="brand.150">
          <Illustration />
        </Center>
      </GridItem>
      <GridItem>
        <Center minH="100vh">
          <LoginForm />
        </Center>
      </GridItem>
    </Grid>
  );
}
export default auth;

// <Button
//   bgGradient="linear(to-t, brand.201,brand.200)"
//   colorScheme="undefined"
//   color="white"
//   fontWeight={400}
// >
//   Login
// </Button>
