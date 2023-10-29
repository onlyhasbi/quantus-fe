import React from 'react';
import { Card, Text } from '@chakra-ui/react';
import { StatisticCardProps } from '@/types';

function StatisticCard({ label, value }: StatisticCardProps) {
  return (
    <Card py="8px" px="12px" w="full">
      <Text mb="34px" fontSize="16px" color="brand.1">
        {label}
      </Text>
      <Text fontSize="24px" color="brand.2">
        {value}
      </Text>
    </Card>
  );
}

export default StatisticCard;
