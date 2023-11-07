import React from 'react';
import Statistic from '@/features/dashboard/Statistic';
import Layout from '@/layouts';
import { Flex } from '@chakra-ui/react';
import {
  defaultStatus,
  defaultLocation,
  chartStatus,
  chartLocation,
} from '@/features/dashboard/helper';
import { url } from '@/config/url';
import { useGetAll } from '@/hooks/useGetAll';

export default function Home() {
  const [resStatus, resLocation] = useGetAll([
    url.asset.status,
    url.asset.location,
  ]);

  const status = resStatus?.data?.results;
  const location = resLocation?.data?.results;

  return (
    <Flex direction="column" gap="16px" paddingBottom="20px">
      <Statistic
        title="Status"
        data={chartStatus(status)}
        info={defaultStatus(status)}
      />
      <Statistic
        title="Location"
        data={chartLocation(location)}
        info={defaultLocation(location)}
      />
    </Flex>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
