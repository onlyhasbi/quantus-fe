import StatisticCard from './StatisticCard';
import StatusChart from './StatusChart';
import { StatisticProps } from '@/types';
import {
  Text,
  Grid,
  GridItem,
  VStack,
  Stack,
  Card,
  CardHeader,
  CardBody,
} from '@chakra-ui/react';
import { useId } from 'react';

function Statistic({ title, data, info }: StatisticProps) {
  const id = useId();

  return (
    <VStack spacing="20px" alignItems="flex-start">
      <Text fontSize="32px">{title}</Text>
      <Grid templateColumns="1fr minmax(100px,150px)" gap="20px" w="full">
        <GridItem>
          <Card>
            <CardHeader>
              <Text fontSize="16px" fontWeight={600}>
                Chart
              </Text>
            </CardHeader>
            <CardBody>
              <StatusChart data={data} />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Stack direction="column" gap="10px" flexGrow={1} h="full">
            {info?.map(({ label, value }, index) => (
              <StatisticCard
                key={`${id + index}`}
                label={label}
                value={value}
              />
            ))}
          </Stack>
        </GridItem>
      </Grid>
    </VStack>
  );
}

export default Statistic;
