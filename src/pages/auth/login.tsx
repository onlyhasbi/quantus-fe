import { config } from '@/config';
import Illustration from '@/features/login/Illustration';
import LoginForm from '@/features/login/LoginForm';
import Splash from '@/features/splash';
import { useAuthentication, useLogin } from '@/hooks/useAuthentication';
import { setLocalStorage } from '@/lib/storage';
import { AuthPayload } from '@/types';
import { Center, Grid, GridItem } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { FieldValues } from 'react-hook-form';

function Login() {
  const { mutate, isSuccess, data } = useLogin();
  const router = useRouter();

  const onSubmit = (values: FieldValues) => {
    mutate(values as AuthPayload);
  };

  const { isAuthenticated } = useAuthentication();

  if (isSuccess) {
    setLocalStorage(config.token_name, data.token);
    router.push('/');
  }

  if (isAuthenticated) return <Splash />;

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
export default Login;
