import AssetForm from '@/features/asset/Form';
import Lists from '@/features/asset/Lists';
import InputSearch from '@/features/asset/Search';
import Layout from '@/layouts';
import React, { useContext, useCallback } from 'react';
import { url } from '@/config/url';
import { AlertDialogInfo } from '@/features/asset/Alert';
import { Asset as AssetContext } from '@/store/context';
import { AssetPayload } from '@/types';
import { Box, Text } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';
import { useGet } from '@/hooks/useGets';
import { useDel, usePost, usePut } from '@/hooks/useAsset';

function Asset() {
  const [search, setSearch] = React.useState('');
  const [updateId, setUpdateId] = React.useState('');
  const [message, setMessage] = React.useState('');
  const { show, onClose } = useContext(AssetContext);

  const handleSearch = (value: string) => setSearch(value);
  const handleGetId = (value: string) => setUpdateId(value);

  const getAssets = useGet(url.asset.base, search, true);
  const assets = getAssets.isSuccess ? getAssets.data.results : [];

  const getAsset = useGet(`${url.asset.base}/${updateId}`);
  const asset = getAsset.isSuccess ? getAsset.data : undefined;

  const { mutate: mutateAdd, isSuccess: isPostSuccess } = usePost();
  const { mutate: mutatePut, isSuccess: isPutSuccess } = usePut();
  const { mutate: mutateDel, isSuccess: isDeleteSuccess } = useDel();

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
      getAssets.refetch();
    }
  }, [getAssets.refetch, isPutSuccess, isDeleteSuccess, isPostSuccess]);

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
        <Lists assets={assets} onUpdate={handleGetId} />
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
