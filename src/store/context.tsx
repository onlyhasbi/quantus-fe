import { createContext, useState } from 'react';

type ContextType = {
  show: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const Asset = createContext<ContextType>({} as ContextType);

export function useToggle() {
  const [show, setShow] = useState(false);

  const onOpen = () => setShow(true);

  const onClose = () => setShow(false);

  return { show, onOpen, onClose };
}
