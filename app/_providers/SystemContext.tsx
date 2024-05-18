// react context that stores an array of content and an isOpen state

import React, { createContext, useContext, useState } from "react";
import { IWobblie } from "../_components/Wobblies/Wobblie";
import { generateRandomWobblie } from "../_components/Wobblies/utils/wobblieUtils";

export interface SystemContextProps {
  state: {
    isOn: boolean;
    highestZIndex: number;
    wobblies: IWobblie[];
  };
  setState: (newState: Partial<SystemContextProps["state"]>) => void;
}

const SystemContext = createContext<SystemContextProps>({
  state: {
    isOn: true,
    highestZIndex: 1,
    wobblies: [],
  },
  setState: () => {},
});

interface SystemContextProviderProps {
  children: React.ReactNode;
}

export const SystemContextProvider: React.FC<SystemContextProviderProps> = ({
  children,
}) => {
  const [state, setState] = useState<SystemContextProps["state"]>({
    isOn: true,
    highestZIndex: 1,
    wobblies: [
      generateRandomWobblie(),
      // generateRandomWobblie(),
      // generateRandomWobblie(),
      // generateRandomWobblie(),
      // generateRandomWobblie(),
      // generateRandomWobblie(),
      // generateRandomWobblie(),
    ],
  });

  const mutateState = (newState: Partial<SystemContextProps["state"]>) => {
    setState((prevState) => ({ ...prevState, ...newState }));
  };

  return (
    <SystemContext.Provider value={{ state, setState: mutateState }}>
      {children}
    </SystemContext.Provider>
  );
};

export function useSystemContext(): SystemContextProps {
  return useContext(SystemContext);
}
