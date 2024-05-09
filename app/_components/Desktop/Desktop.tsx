import { HStack, Stack, Text } from "@chakra-ui/react";
import ApplicationIcon, { ApplicationIconProps } from "./ApplicationIcon";
import TravelModal from "../Modals/TravelModal";
import AboutModal from "../Modals/AboutModal";

import React from "react";
import { Box } from "@chakra-ui/react";

const WaveText = () => {
  return (
    <Box
      fontFamily="mono"
      display="inline-block"
      fontWeight={"bold"}
      fontSize={"xx-large"}
    >
      <HStack>
        {"welcome   to    alex    os".split("").map((letter, index) => (
          <Box
            as="span"
            key={index}
            display="inline-block"
            animation={`wave 15s infinite ${
              index * 0.2
            }s cubic-bezier(0.36, 0.45, 0.63, 0.53)`}
            transformOrigin="center"
            mt="-5px"
            mb="5px"
          >
            {letter}
          </Box>
        ))}
      </HStack>
      <style jsx global>{`
        @keyframes wave {
          0%,
          100% {
            transform: translateY(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateY(-10px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </Box>
  );
};

const applications: ApplicationIconProps[] = [
  {
    title: "README",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        📄
      </Text>
    ),
    id: "about",
  },
  {
    title: "Travel",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        🌍
      </Text>
    ),
    id: "travel",
  },
];

const Desktop = () => {
  return (
    <Stack
      bgColor={"white"}
      h="100%"
      w="100%"
      maxHeight={"calc(100vh - 33px)"}
      overflow={"clip"}
    >
      <AboutModal />
      <TravelModal />
      <WaveText />
      <Stack p={4}>
        {applications.map((application) => (
          <ApplicationIcon key={application.id} {...application} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Desktop;
