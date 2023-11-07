import AssetForm from '@/features/asset/Form';
import Lists from '@/features/asset/Lists';
import InputSearch from '@/features/asset/Search';
import Layout from '@/layouts';
import React, { useContext, useCallback } from 'react';
import { url } from '@/config/url';
import { AlertDialogInfo } from '@/features/asset/Alert';
import { Asset as AssetContext } from '@/store/context';
import { AssetPayload, AssetsScrollResponse, Options } from '@/types';
import { Box, Text } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import {
  useAddAsset,
  useDeleteAsset,
  useGetAllAsset,
  useGetAsset,
  useUpdateAsset,
} from '@/hooks/assets';
import { flatArray, getLengthAssets } from '@/features/asset/helper';

function Asset() {
  const [search, setSearch] = React.useState('');
  const [updateId, setUpdateId] = React.useState('');
  const [message, setMessage] = React.useState('');
  const { show, onClose } = useContext(AssetContext);

  const handleSearch = (value: string) => setSearch(value);
  const handleGetId = (value: string) => setUpdateId(value);

  const { data, fetchNextPage, hasNextPage, refetch } = useGetAllAsset(search);

  const handleScroll = {
    assets: flatArray(data as AssetsScrollResponse),
    length: getLengthAssets(data as AssetsScrollResponse),
    nextPage: () => fetchNextPage(),
    hasNext: hasNextPage,
  };

  const getAsset = useGetAsset(updateId);
  const asset = getAsset.isSuccess ? getAsset.data : undefined;

  const { mutate: mutateAdd, isSuccess: isPostSuccess } = useAddAsset();
  const { mutate: mutatePut, isSuccess: isPutSuccess } = useUpdateAsset();
  const { mutate: mutateDel, isSuccess: isDeleteSuccess } = useDeleteAsset();

  const handleSubmit = useCallback((payload: FieldValues) => {
    setMessage('Data has been submitted.');
    mutateAdd(payload as AssetPayload);
  }, []);

  const handleUpdate = useCallback(
    (payload: FieldValues) => {
      if (updateId) {
        setMessage('Data has been update.');
        mutatePut({ data: payload as AssetPayload, id: updateId });
      }
    },
    [updateId]
  );

  const handleDelete = useCallback(() => {
    if (updateId) {
      setMessage('Data has been deleted.');
      mutateDel(updateId);
    }
  }, [updateId]);

  React.useEffect(() => {
    if (isPutSuccess || isDeleteSuccess || isPostSuccess) {
      setUpdateId('');
      setSearch('');
      onClose();
      refetch();
    }
  }, [refetch, isPutSuccess, isDeleteSuccess, isPostSuccess]);

  if (updateId && getAsset.isSuccess) {
    return (
      <Box pb="350px">
        <Text fontSize="28px" mt="44px" mb="12px" fontWeight={600}>
          Edit this form below
        </Text>
        <AssetForm
          onSubmit={handleUpdate}
          onDelete={handleDelete}
          initialValues={asset}
        />
      </Box>
    );
  }

  if (show) {
    return (
      <Box pb="350px">
        <Text fontSize="22px" fontWeight={600}>
          Input Asset
        </Text>
        <Text fontSize="28px" mt="44px" mb="12px" fontWeight={600}>
          Fill this form below
        </Text>
        <AssetForm onSubmit={handleSubmit} />
      </Box>
    );
  }

  return (
    <>
      <Box pb="350px">
        <Text fontSize="28px" mb="12px" fontWeight={600}>
          List Asset
        </Text>
        <InputSearch onSearch={handleSearch} />
        <Lists onScroll={handleScroll} onUpdate={handleGetId} />
      </Box>
      <AlertDialogInfo
        open={isPostSuccess || isPutSuccess || isDeleteSuccess}
        title="Success!"
        message={message}
      />
    </>
  );
}

Asset.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Asset;
