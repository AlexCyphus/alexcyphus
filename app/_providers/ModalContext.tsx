// react context that stores an array of content and an isOpen state

import React, { createContext, useContext, useState } from "react";

interface ModalProps {
  isOpen: boolean;
  id: string;
}

export interface ModalContextProps {
  modals: ModalProps[];
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
}

const ModalContext = createContext<ModalContextProps>({
  modals: [],
  openModal: () => {},
  closeModal: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalProps[]>([]);

  const openModal = (id: string) => {
    setModals((prev) => {
      return [...prev, { isOpen: true, id: id }];
    });
  };

  const closeModal = (id: string) => {
    setModals((prev) => {
      return prev.filter((modal) => modal.id !== id);
    });
  };

  return (
    <ModalContext.Provider value={{ openModal, closeModal, modals }}>
      {children}
    </ModalContext.Provider>
  );
};

export function useModals(): ModalContextProps {
  return useContext(ModalContext);
}
