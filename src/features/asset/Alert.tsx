import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  useDisclosure,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';

type Props = {
  open: boolean;
  title: string;
  message: string;
};

export function AlertDialogInfo({ open, title, message }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (open) onOpen();
  }, [open]);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay onClick={onOpen}>
        <AlertDialogContent>
          <AlertDialogBody textAlign="center" padding="30px">
            <Image src="/assets/success.svg" alt="success-image" w="185px" mx="auto" />
            <Text fontSize="20px" fontWeight={600} mt="15px" mb="10px">
              {title}
            </Text>
            <Text fontSize="14px">{message}</Text>
          </AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}
