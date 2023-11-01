import Illustration from '@/features/login/Illustration';
import LoginForm from '@/features/login/LoginForm';
import Splash from '@/features/splash';
import { useEffect } from 'react';
import { usePost } from '@/hooks/useData';
import { AuthPayload } from '@/types';
import { GridItem, Grid, Center } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { setLocalStorage } from '@/lib/storage';
import { config } from '@/config';
import { useAuthentication } from '@/hooks/useAuthentication';
import type { FieldValues } from 'react-hook-form';
import { url } from '@/config/url';

function Login() {
  const { mutate, isSuccess, data } = usePost<AuthPayload>(url.auth.login);
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
