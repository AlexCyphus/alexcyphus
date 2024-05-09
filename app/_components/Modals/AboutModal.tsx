import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useModals } from "../../_providers/ModalContext";

const MODAL_ID = "about";

const AboutModal = () => {
  const { modals, closeModal } = useModals();

  const isOpen = modals.some((modal) => modal.id === MODAL_ID);

  if (!isOpen) return null;

  const sentences = [
    "👋 Hey there I'm Alex.",
    "I’m a 📍 Berlin-based Austrian-Canadian fullstack engineer into building amazing products with fullstack Typescript.",
    "Working at Throne as a fullstack engineer to help grow the creator economy.",
    "Building kaards, a language learning platform with the thesis that language apps should optimize for effectiveness over fun.",
    "Prev built: [kaards, Ameyo]",
    "Prev software engineer: [Lhotse, VICO]",
    "Prev product manager: [Tandem]",
    "Super interested in languages (🇨🇦/🇨🇴/🇩🇪), travel, economics, remote-work, and above all coding (frontend, backend, mobile).",
  ];

  return (
    <Stack
      maxWidth={"600px"}
      w="60vw"
      position={"absolute"}
      // center
      top={Math.random() * 50 + "%"}
      left={Math.random() * 50 + "%"}
      border={"1px solid black"}
      bgColor={"white"}
      rounded="2px"
    >
      <HStack
        justify={"space-between"}
        px={4}
        fontFamily={"chicago"}
        bgColor={"darkgray"}
        borderBottom={"1px solid black"}
      >
        <Box fontFamily={"toronto"} onClick={() => closeModal(MODAL_ID)}>
          x
        </Box>
        <Box>About Me</Box>
        <Box />
      </HStack>
      <Stack
        fontFamily={"toronto"}
        fontSize={"sm"}
        p={4}
        maxHeight={"60vh"}
        overflow={"scroll"}
      >
        {sentences.map((sentence, i) => (
          <Text key={i}>
            {`>>`} {sentence}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default AboutModal;
