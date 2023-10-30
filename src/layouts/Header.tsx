import {
  Circle,
  Flex,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  VStack,
  Stack,
  Divider,
  SkeletonText,
  Avatar,
} from '@chakra-ui/react';
import React from 'react';
// import { deleteToken } from '../../../hooks/useAuth.hook';
// import { capitalize, getFirstCharacter } from '../../../utils';
import Link from 'next/link';

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';
import { useLogout, useProfile } from '@/hooks/useData';
import { capitalize } from '@/utils/capitalize';

const routes = [
  { path: '/profile', label: 'Profil' },
  { path: '/offer', label: 'Penawaran' },
  { path: '/work', label: 'Pekerjaan' },
];

const Header = () => {
  const location = usePathname();
  const router = useRouter();
  const path = location === '/' ? 'home' : location;

  const { data, isLoading } = useProfile();
  const { mutate } = useLogout();

  const handleLogOut = () => {
    mutate();
    router.push('/');
    // deleteToken(import.meta.env.VITE_TOKEN_NAME);
  };

  return (
    <Flex
      w="full"
      justifyContent={{ base: 'center', lg: 'start' }}
      mt="57px"
      mb="23px"
      paddingLeft={{ base: 0, lg: '20px' }}
      cursor="pointer"
    >
      <Stack
        direction={{ lg: 'row', base: 'column' }}
        alignItems={{ base: 'center' }}
        gap={4}
      >
        <Circle size={{ lg: '40px', base: 75 }} bg="green.600">
          <Avatar size="40px" name="user" src="https://i.pravatar.cc/40" />
        </Circle>

        <Flex direction="column" gap="2px">
          {isLoading ? (
            <>
              <SkeletonText w="5rem" noOfLines={1} skeletonHeight="2" />
              <SkeletonText w="4rem" noOfLines={1} skeletonHeight="2" />
            </>
          ) : (
            <>
              <Text
                order={{ lg: '0', base: '1' }}
                fontSize="14px"
                color="#06122A"
                fontWeight={500}
              >
                {capitalize(data?.username)}
              </Text>
              <Text fontSize="12px" color="#676F7D">
                {data.email}
              </Text>
            </>
          )}
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Header;
