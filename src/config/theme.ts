import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: () => ({
      'input': {
        boxShadow: 'none !important',
      },
    }),
  },
  colors: {
    brand: {
      201: '#278CEA',
      200: '#7DC1FF',
      150: '#4A9BE5',
      100: '#88C1F4',
      50: '#ECF3FA',
    },
  },
  components: {
    Input: {
      variants: {
        outline: {
          bg: 'brand.50',
          borderColor: 'brand.100',
          fontSize: '14px',
        },
      },
    },
  },
});
