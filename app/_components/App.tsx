"use client";

import { Text, HStack, Stack } from "@chakra-ui/react";
import { useSystemContext } from "../_providers/SystemContext";
import Desktop from "./Desktop/Desktop";
import GoodbyeScreen from "./GoodbyeScreen/GoodbyeScreen";
import TopBar from "./TopBar/TopBar";

const App = () => {
  const { state } = useSystemContext();

  const isOn = state.isOn;

  return (
    <>
      <GoodbyeScreen />
      {isOn && (
        <Stack
          h="100vh"
          w="100vw"
          gap={0}
          fontFamily={"chicago"}
          overflow={"clip"}
        >
          <TopBar />
          <Desktop />
        </Stack>
      )}
    </>
  );
};

export default App;
