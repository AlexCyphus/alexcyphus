// react context that stores an array of content and an isOpen state

import React, { createContext, useContext, useState } from "react";

export interface SystemContextProps {
  state: {
    isOn: boolean;
  };
  setState: (newState: SystemContextProps["state"]) => void;
}

const SystemContext = createContext<SystemContextProps>({
  state: {
    isOn: true,
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
  });

  const mutateState = (newState: SystemContextProps["state"]) => {
    console.log(newState);
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
