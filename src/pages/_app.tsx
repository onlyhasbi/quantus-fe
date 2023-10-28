import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@/config/theme';
import { Red_Hat_Display } from 'next/font/google';

// If loading a variable font, you don't need to specify the font weight
const RedHatDisplay = Red_Hat_Display({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <main
        className={RedHatDisplay.className}
        style={{ background: '#F9F9F9' }}
      >
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  );
}
