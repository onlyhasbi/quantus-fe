import StatisticCard from './StatisticCard';
import { StatisticProps } from '@/types';
import { Text, Grid, GridItem, VStack } from '@chakra-ui/react';
import { useId } from 'react';

function Statistic({ title, info }: StatisticProps) {
  const id = useId();

  return (
    <VStack spacing="20px" alignItems="flex-start">
      <Text fontSize="32px">{title}</Text>
      <Grid templateColumns="1fr minmax(100px,150px)" gap="20px" w="full">
        <GridItem>
          <Text fontSize="32px">Graph</Text>
        </GridItem>
        <GridItem>
          <VStack spacing="10px">
            {info?.map(({ label, value }, index) => (
              <StatisticCard
                key={`${id + index}`}
                label={label}
                value={value}
              />
            ))}
          </VStack>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default Statistic;
