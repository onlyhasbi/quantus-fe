import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/config/theme';
import { Red_Hat_Display } from 'next/font/google';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Browser from '@/utils/browser';
import { Asset, useToggle } from '@/store/context';

const RedHatDisplay = Red_Hat_Display({ subsets: ['latin'] });

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: JSX.Element) => React.ReactElement;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  const { show, onOpen, onClose } = useToggle();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Asset.Provider value={{ show, onOpen, onClose }}>
          <Browser>
            <main
              className={RedHatDisplay.className}
              style={{ background: '#F9F9F9', minHeight: '100vh' }}
            >
              {getLayout(<Component {...pageProps} />)}
            </main>
          </Browser>
        </Asset.Provider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
