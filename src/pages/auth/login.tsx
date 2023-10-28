import Illustration from '@/features/login/Illustration';
import LoginForm from '@/features/login/LoginForm';
import { GridItem, Grid, Center } from '@chakra-ui/react';
import type { FieldValues } from 'react-hook-form';

function auth() {
  const onSubmit = (values: FieldValues) => {
    console.log(values);
  };

  return (
    <Grid gridTemplateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}>
      <GridItem>
        <Center minH="100vh" bg="brand.150">
          <Illustration />
        </Center>
      </GridItem>
      <GridItem>
        <Center minH="100vh">
          <LoginForm onSubmit={onSubmit} />
        </Center>
      </GridItem>
    </Grid>
  );
}
export default auth;
