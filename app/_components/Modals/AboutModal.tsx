import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { useModals } from "../../_providers/ModalContext";
import Modal from "./Modal/Modal";

const MODAL_ID = "about";

const AboutModal = () => {
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
    <Modal id={MODAL_ID} title={"README"}>
      {sentences.map((sentence, i) => (
        <Text key={i}>
          {`>>`} {sentence}
        </Text>
      ))}
    </Modal>
  );
};

export default AboutModal;
