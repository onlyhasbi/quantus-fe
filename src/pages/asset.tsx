import AssetForm from '@/features/asset/Form';
import Lists from '@/features/asset/Lists';
import InputSearch from '@/features/asset/Search';
import Layout from '@/layouts';
import React, { useContext } from 'react';
import { url } from '@/config/url';
import { AlertDialogInfo } from '@/features/asset/Alert';
import { useDel, useGet, usePost, usePut } from '@/hooks/useData';
import { Asset as AssetContext } from '@/store/context';
import { AssetPayload } from '@/types';
import { Box, Text } from '@chakra-ui/react';
import { FieldValues } from 'react-hook-form';

function Asset() {
  const [search, setSearch] = React.useState('');
  const [updateId, setUpdateId] = React.useState('');
  const [message, setMessage] = React.useState('');
  const { show, onClose } = useContext(AssetContext);

  const handleSearch = (value: string) => setSearch(value);
  const handleGetId = (value: string) => setUpdateId(value);

  const getAssets = useGet(url.asset.base, search);
  const assets = getAssets.isSuccess ? getAssets.data.results : [];

  const getAsset = useGet(`${url.asset.base}/${updateId}`);

  const { mutate: mutateAdd, isSuccess: isPostSuccess } = usePost<AssetPayload>(
    url.asset.base
  );

  const { mutate: mutatePut, isSuccess: isPutSuccess } = usePut<AssetPayload>(
    `${url.asset.base}/${updateId}`
  );

  const { mutate: mutateDel, isSuccess: isDeleteSuccess } = useDel(
    `${url.asset.base}/${updateId}`
  );

  const handleSubmit = (payload: FieldValues) => {
    setMessage('Data has been submitted.');
    mutateAdd(payload as AssetPayload);
  };

  const handleUpdate = (payload: FieldValues) => {
    setMessage('Data has been update.');
    mutatePut(payload as AssetPayload);
  };

  const handleDelete = () => {
    setMessage('Data has been deleted.');
    mutateDel();
  };

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
          initialValues={getAsset.data}
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
