import {
  Box,
  Divider,
  Grid,
  GridItem,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useModals } from "../../_providers/ModalContext";
import { useRef } from "react";
import Draggable from "react-draggable";

const MODAL_ID = "travel";

const TravelModal = () => {
  const { modals, closeModal } = useModals();

  const isOpen = modals.some((modal) => modal.id === MODAL_ID);

  const top = useRef(Math.random() * 50 + "%");
  const left = useRef(Math.random() * 50 + "%");

  if (!isOpen) return null;

  const livedIn = [
    "🇨🇦 Canada",
    "🇬🇧 United Kingdom",
    "🇪🇸 Spain",
    "🇩🇪 Germany",
    "🇨🇴 Colombia",
  ];

  const visited = [
    "🇺🇸 United States of America",
    "🇧🇿 Belize",
    "🇵🇪 Peru",
    "🇸🇪 Sweden",
    "🇩🇰 Denmark",
    "🇮🇹 Italy",
    "🇵🇹 Portugal",
    "🇭🇺 Hungary",
    "🇧🇪 Belgium",
    "🇹🇼 Taiwan",
    "🇫🇷 France",
    "🇦🇹 Austria",
    "🇵🇱 Poland",
    "🇭🇷 Croatia",
    "🇨🇿 Czechia",
    "🇲🇨 Monaco",
    "🇨🇺 Cuba",
    "🇳🇱 Netherlands",
    "🇷🇸 Serbia",
    "🇬🇷 Greece",
    "🇲🇪 Montenegro",
    "🇦🇱 Albania",
    "🇻🇦 The Vatican",
  ];

  const percentageOfCountriesVisited =
    Math.round(((visited.length + livedIn.length) / 196) * 10000) / 100;

  return (
    <Draggable
      handle=".draggable-handle"
      defaultPosition={{ x: 0, y: 0 }}
      bounds="parent"
    >
      <Stack
        maxWidth={"600px"}
        w="60vw"
        border={"1px solid black"}
        bgColor={"white"}
        rounded="2px"
        pos={"absolute"}
      >
        <HStack
          justify={"space-between"}
          cursor="grabbing"
          px={4}
          fontFamily={"chicago"}
          bgColor={"darkgray"}
          borderBottom={"1px solid black"}
          className="draggable-handle"
        >
          <Box fontFamily={"toronto"} onClick={() => closeModal(MODAL_ID)}>
            x
          </Box>
          <Box>Travel</Box>
          <Box />
        </HStack>
        <Stack
          fontFamily={"toronto"}
          fontSize={"sm"}
          p={4}
          maxHeight={"60vh"}
          overflow={"scroll"}
        >
          <Text>
            Been to {visited.length + livedIn.length} countries and counting!
            That's {percentageOfCountriesVisited}% of the world (approximately).
          </Text>
          <Divider />
          <Text fontSize={"medium"}>🏡 Lived in ({livedIn.length})</Text>
          <SimpleGrid columns={2}>
            {livedIn.map((country, i) => (
              <GridItem key={i}>
                <Text>{country}</Text>
              </GridItem>
            ))}
          </SimpleGrid>
          <Divider />
          <Text fontSize={"medium"}>🗺️ Visited ({visited.length})</Text>
          <SimpleGrid columns={2}>
            {visited.map((country, i) => (
              <GridItem key={i}>
                <Text>{country}</Text>
              </GridItem>
            ))}
          </SimpleGrid>
        </Stack>
      </Stack>
    </Draggable>
  );
};

export default TravelModal;
