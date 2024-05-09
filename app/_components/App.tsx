"use client";

import { Fade, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useSystemContext } from "../_providers/SystemContext";
import Desktop from "./Desktop/Desktop";
import TopBar from "./TopBar/TopBar";

const App = () => {
  const { state } = useSystemContext();

  const isOn = state.isOn;

  const [showGoodbye, setShowGoodbye] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowGoodbye(true);
    }, 2000);
    setTimeout(() => {
      setShowGoodbye(false);
    }, 6000);
  }, [isOn]);

  return (
    <>
      {!isOn && (
        <Fade in={!isOn} transition={{ enter: { duration: 1 } }}>
          <Stack
            h="100vh"
            w="100vw"
            bg="black"
            justify={"center"}
            align="center"
            pos={"absolute"}
            top={0}
            left={0}
          >
            <Stack
              textAlign={"center"}
              opacity={showGoodbye ? 1 : 0}
              transition={"opacity 0.3s"}
            >
              <Text fontFamily={"chicago"} color="white" fontSize={"xxx-large"}>
                🥭
              </Text>
              <Text fontFamily={"chicago"} color="white" fontSize={"x-large"}>
                Goodbye
              </Text>
            </Stack>
          </Stack>
        </Fade>
      )}

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
    </>
  );
};

export default App;
