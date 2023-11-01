import { url } from '@/config/url';
import { useGet } from '@/hooks/useData';
import { Asset as AssetContext } from '@/store/context';
import { capitalize } from '@/utils/capitalize';
import {
  Avatar,
  Button,
  Circle,
  Flex,
  Image,
  SkeletonText,
  Stack,
  Text,
} from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';

const Header = () => {
  const { data, isLoading, isSuccess } = useGet(url.auth.me);
  const { onOpen } = useContext(AssetContext);
  const isAsset = usePathname() === '/asset';

  if (isSuccess) {
    return (
      <Flex
        w="full"
        justifyContent={{
          base: 'center',
          lg: isAsset ? 'space-between' : 'start',
        }}
        mt="57px"
        mb="23px"
        cursor="pointer"
      >
        <Stack
          direction={{ lg: 'row', base: 'column' }}
          alignItems={{ base: 'center' }}
          gap={3}
        >
          <Circle size={{ lg: '40px', base: 75 }} bg="green.600">
            <Avatar size="40px" name="user" src="https://i.pravatar.cc/40" />
          </Circle>

          <Flex direction="column" gap="2px" ml="3px">
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
          <Image src="/assets/arrow-down.svg" alt="arrow-down-icon" />
        </Stack>

        <Button
          display={isAsset ? 'block' : 'none'}
          minW="167px"
          colorScheme="undefined"
          bgGradient="linear(to-t, brand.201, brand.200)"
          onClick={onOpen}
        >
          <Text fontSize="16px" fontWeight={500}>
            Input Asset
          </Text>
        </Button>
      </Flex>
    );
  }
};

export default Header;
