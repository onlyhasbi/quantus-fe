import Splash from '@/features/splash';
import Header from './Header';
import Sidebar from './Sidebar';
import { useAuthentication } from '@/hooks/useAuthentication';
import { Box, Container, Grid, GridItem, Show } from '@chakra-ui/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated) return <Splash />;

  return (
    <Grid
      gridTemplateAreas={{
        base: `"nav" "aside" "main"`,
        lg: `"aside nav" "aside main"`,
      }}
      gridTemplateColumns={{ base: '1fr', lg: '230px 1fr' }}
      minH="100vh"
    >
      <GridItem area="aside">
        <Sidebar />
      </GridItem>
      <GridItem area="nav">
        <Container maxW="6xl">
          <Header />
        </Container>
      </GridItem>
      <GridItem area="main" overflowX="hidden">
        <Container maxW="6xl" minH="80vh">
          {children}
        </Container>
      </GridItem>
    </Grid>
  );
};

export default Layout;
