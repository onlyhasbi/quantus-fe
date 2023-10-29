import React from 'react';
import Statistic from '@/features/dashboard/Statistic';
import Layout from '@/layouts';
import { Flex } from '@chakra-ui/react';
import { useAssets } from '@/hooks/useData';
import { defaultStatus, defaultLocation } from '@/features/dashboard/utils';

export default function Home() {
  const [resStatus, resLocation] = useAssets();

  const status = resStatus?.data?.results;
  const location = resLocation?.data?.results;

  return (
    <Flex direction="column" gap="16px">
      <Statistic title="Status" info={defaultStatus(status)} />
      <Statistic title="Location" info={defaultLocation(location)} />
    </Flex>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
