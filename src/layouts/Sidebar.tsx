import { AssetIcon } from '@/assets/AssetIcon';
import { HomeIcon } from '@/assets/HomeIcon';
import { LogoutIcon } from '@/assets/LogoutIcon';
import { useAuthentication } from '@/hooks/useAuthentication';
import { useLogout } from '@/hooks/useData';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Show,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import Link from 'next/link';
import Header from './Header';
import { usePathname } from 'next/navigation';
import { useRef } from 'react';

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
  const cancelRef = useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { mutate } = useLogout();

  const { handleSignOut } = useAuthentication();

  const handleLogout = () => {
    mutate();
    handleSignOut();
  };

  return (
    <>
      <Flex
        direction="column"
        borderRight="1px"
        borderColor="brand.3"
        paddingBottom="72px"
        minH="full"
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
          width={{ base: 'full', lg: '80%' }}
          paddingX={{ base: 6, lg: 0 }}
          marginX="auto"
          flexGrow={1}
          gap="16px"
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
                  <HStack paddingY="12px" spacing="7px" justifyContent="center">
                    {<Icon color={isSelected ? 'brand.0' : 'brand.1'} />}
                    <Text color={isSelected ? 'brand.0' : 'brand.1'}>
                      {item.label}
                    </Text>
                  </HStack>
                </Link>
              </Box>
            );
          })}
          <HStack
            paddingY="12px"
            mt="auto"
            onClick={onOpen}
            spacing="7px"
            justifyContent="center"
            cursor="pointer"
          >
            <Text color="brand.1">Logout</Text>
            {<LogoutIcon color="brand.1" />}
          </HStack>
        </Flex>
      </Flex>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="xs"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent p="15px">
            <Text fontSize="16px" fontWeight={600} textAlign="center">
              Logout
            </Text>

            <Text textAlign="center" fontSize="14px" mt="11px" mb="15px">
              When you want to use this app,
              <br />
              you have to relogin, are you sure?
            </Text>
            <HStack justifyContent="center">
              <Button
                colorScheme="red"
                variant="outline"
                ref={cancelRef}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                onClick={handleLogout}
                ml={3}
                bgGradient="linear(to-t, brand.201, brand.200)"
                colorScheme="undefined"
              >
                Logout
              </Button>
            </HStack>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default Sidebar;
