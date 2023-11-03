import { url } from '@/config/url';
import { useGets } from '@/hooks/useData';
import { AssetFormProps, AssetPayload, Options } from '@/types';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  HStack,
  Input,
  Select,
  Text,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const defaultValues = {
  name: '',
  status_id: '',
  location_id: '',
};

function AssetForm({ onSubmit, onDelete, initialValues }: AssetFormProps) {
  const form = useForm<AssetPayload>({ defaultValues });
  const {
    register,
    handleSubmit,
    setFocus,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = form;

  const cancelRef = React.useRef<HTMLButtonElement>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [resStatus, resLocation] = useGets([url.status, url.location]);
  const status = resStatus.isSuccess ? resStatus?.data?.results : [];
  const location = resLocation.isSuccess ? resLocation?.data?.results : [];

  React.useEffect(() => {
    if (initialValues) {
      form.setValue('name', initialValues.name);
      form.setValue('status_id', initialValues.status.id);
      form.setValue('location_id', initialValues.location.id);
    }
  }, [initialValues, resStatus.isSuccess, resLocation.isSuccess]);

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setFocus('name');
    }
  }, [isSubmitSuccessful]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing="18px">
          <FormControl isInvalid={Boolean(errors?.name)}>
            <Input
              w="full"
              id="name"
              bg="brand.50"
              borderColor="brand.100"
              placeholder="Name"
              fontSize="14px"
              {...register('name', {
                required: 'This form is required',
              })}
            />
            <FormErrorMessage>
              {errors.name && errors.name.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors?.status_id)}>
            <Select
              placeholder="Select status"
              w="full"
              id="status_id"
              bg="brand.50"
              borderColor="brand.100"
              fontSize="14px"
              {...register('status_id', {
                required: 'This form is required',
              })}
            >
              {status?.map((item: Options) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {errors.status_id && errors.status_id.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={Boolean(errors?.location_id)}>
            <Select
              placeholder="Select location"
              w="full"
              id="location"
              bg="brand.50"
              borderColor="brand.100"
              fontSize="14px"
              {...register('location_id', {
                required: 'This form is required',
              })}
            >
              {location?.map((item: Options) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </Select>
            <FormErrorMessage>
              {errors.location_id && errors.location_id.message}
            </FormErrorMessage>
          </FormControl>
          <Flex justifyContent="end" mt="52px" gap="19px" w="full">
            {initialValues && (
              <Button
                variant="outline"
                w={initialValues ? '144px' : '115px'}
                colorScheme="red"
                onClick={onOpen}
              >
                Delete
              </Button>
            )}
            <Button
              w={initialValues ? '144px' : '115px'}
              type="submit"
              bgGradient="linear(to-t, brand.201, brand.200)"
              colorScheme="undefined"
            >
              {initialValues ? 'Save Update' : 'Submit'}
            </Button>
          </Flex>
        </VStack>
      </form>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        size="xs"
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent p="15px">
            <Text fontSize="16px" fontWeight={600} textAlign="center">
              Confirmation
            </Text>

            <Text textAlign="center" fontSize="14px" mt="11px" mb="15px">
              Your action will cause this data
              <br />
              permanently deleted.
            </Text>
            <HStack justifyContent="center">
              <Button
                colorScheme="red"
                variant="outline"
                ref={cancelRef}
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                onClick={onDelete}
                ml={3}
                bgGradient="linear(to-t, brand.201, brand.200)"
                colorScheme="undefined"
              >
                Delete
              </Button>
            </HStack>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default AssetForm;
