"use client";

import { ModalProvider } from "./ModalContext";
import { SystemContextProvider } from "./SystemContext";

interface Props {
  children: React.ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
  return (
    <ModalProvider>
      <SystemContextProvider>{children}</SystemContextProvider>
    </ModalProvider>
  );
};

export default Providers;
