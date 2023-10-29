import {
  HStack,
  Box,
  Divider,
  Flex,
  Show,
  Text,
  Image,
} from '@chakra-ui/react';
// import logo from '../../../assets/logo.svg';
import Header from './Header';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon } from '@/assets/HomeIcon';
import { AssetIcon } from '@/assets/AssetIcon';

const sidebarMenu = [
  {
    label: 'Home',
    path: '/',
    icon: HomeIcon,
  },
  {
    label: 'Asset',
    path: '/asset',
    icon: AssetIcon,
  },
];

const Sidebar = () => {
  const currentPath = usePathname();

  return (
    <Flex
      direction="column"
      minH="full"
      borderRight="1px"
      borderColor="gray.100"
    >
      <Text mt="33px" textAlign="center" fontSize="14px" fontWeight={500}>
        TEST QTI
      </Text>
      <Box
        width={{ lg: '130px', base: '15rem' }}
        marginX="auto"
        mt=" 20px"
        mb="72px"
      >
        <Link href="/">
          <Image src="/assets/horizontal-logo.svg" alt="logo" />
        </Link>
      </Box>
      <Show below="lg">
        <Header />
      </Show>
      <Flex
        direction="column"
        gap="16px"
        width={{ base: 'full', lg: '80%' }}
        paddingX={{ base: 6, lg: 0 }}
        marginX="auto"
        minH="100vh"
      >
        {sidebarMenu.map((item, index) => {
          const isSelected = item.path === currentPath;
          const { icon: Icon } = item;

          return (
            <Box
              key={item.path}
              bg={isSelected ? 'brand.300' : 'transparent'}
              borderRadius="6px"
            >
              <Link href={item.path}>
                <HStack paddingY="12px" gap="7px" justifyContent="center">
                  {<Icon color={isSelected ? 'brand.0' : 'brand.1'} />}
                  <Text color={isSelected ? 'brand.0' : 'brand.1'}>
                    {item.label}
                  </Text>
                </HStack>
              </Link>
            </Box>
          );
        })}
        <Link href="auth/login" style={{ marginTop: 'full' }}>
          <HStack paddingY="12px" gap="7px" justifyContent="center">
            {/* {<Icon color='brand.1' />} */}
            <Text color="brand.1">Logout</Text>
          </HStack>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
