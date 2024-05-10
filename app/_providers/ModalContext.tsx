// react context that stores an array of content and an isOpen state

import React, { createContext, useContext, useState } from "react";

interface ModalProps {
  id: string;
  zIndex: number | undefined;
}

export interface ModalContextProps {
  modals: ModalProps[];
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  moveModalToFront: (id: string) => void;
  closeAllModals: () => void;
}

const ModalContext = createContext<ModalContextProps>({
  modals: [],
  openModal: () => {},
  closeModal: () => {},
  moveModalToFront: () => {},
  closeAllModals: () => {},
});

interface ModalProviderProps {
  children: React.ReactNode;
}

export const ModalProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [modals, setModals] = useState<ModalProps[]>([
    {
      id: "about",
      zIndex: 1,
    },
  ]);

  const openModal = (id: string) => {
    setModals((prev) => {
      return [...prev, { zIndex: undefined, id: id }];
    });
  };

  const closeModal = (id: string) => {
    setModals((prev) => {
      return prev.filter((modal) => modal.id !== id);
    });
  };

  const closeAllModals = () => {
    setModals([]);
  };

  const moveModalToFront = (id: string) => {
    const highestZIndex = modals.reduce((acc, modal) => {
      return modal.zIndex ? Math.max(acc, modal.zIndex) : acc;
    }, 0);

    setModals((prev) => {
      return prev.map((modal) => {
        if (modal.id === id) {
          return { ...modal, zIndex: highestZIndex + 1 };
        }
        return modal;
      });
    });
  };

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        modals,
        moveModalToFront,
        closeAllModals,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModals(): ModalContextProps {
  return useContext(ModalContext);
}
