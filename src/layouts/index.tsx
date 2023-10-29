import { Grid, GridItem, Box, Show } from '@chakra-ui/react';
import { useEffect, ReactNode } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const isAuthSuccess = true;
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isAuthSuccess) navigate('/signin', { replace: true });
  // }, [isAuthSuccess, navigate]);

  if (!isAuthSuccess) return null;

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
      <Show above="lg">
        <GridItem area="nav">
          <Header />
        </GridItem>
      </Show>
      <GridItem area="main" overflowX="hidden">
        <Box paddingX="20px">{children}</Box>
      </GridItem>
    </Grid>
  );
};

export default Layout;
