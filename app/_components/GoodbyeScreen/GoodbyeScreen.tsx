"use client";

import { Fade, Stack, Text } from "@chakra-ui/react";
import { useSystemContext } from "../../_providers/SystemContext";
import { useState, useEffect } from "react";

const GoodbyeScreen = () => {
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

  if (isOn) return null;

  return (
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
  );
};

export default GoodbyeScreen;
