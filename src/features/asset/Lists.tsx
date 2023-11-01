import { Options } from '@/types';
import {
  List,
  Text,
  ListItem,
  IconButton,
  Image,
  Stack,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  assets: Options[];
  onUpdate: (id: string) => void;
};

function Lists({ assets, onUpdate }: Props) {
  const handleUpdate = (id: string) => {
    onUpdate(id);
  };

  const handleDivide = (total: number, index: number) => {
    if (total === 1) return 0;
    return index == total ? 0 : '1px';
  };

  return (
    <List
      bg="#fff"
      mt="12px"
      p="10px"
      borderRadius="6px"
      minH="85px"
      maxH="380px"
      overflowY="scroll"
    >
      {assets.map((item, index) => (
        <ListItem
          key={item.id}
          borderBottom={handleDivide(assets.length - 1, index)}
          borderColor="brand.4"
          cursor="pointer"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            p="12px"
          >
            <Stack direction="column" gap="2px">
              <Text fontSize="14px" fontWeight={500} color="brand.1">
                Asset Name
              </Text>
              <Text fontSize="16px" fontWeight={600} color="brand.2">
                {item.name}
              </Text>
            </Stack>
            <IconButton
              size="sm"
              onClick={() => handleUpdate(item.id)}
              bgGradient="linear(to-t, brand.201, brand.200)"
              colorScheme="undefined"
              aria-label="edit-icon"
              icon={<Image src="/assets/pencil.svg" w="16px" h="16px" />}
              isRound
            />
          </Stack>
        </ListItem>
      ))}
    </List>
  );
}

export default Lists;
