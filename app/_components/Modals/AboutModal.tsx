import { Text } from "@chakra-ui/react";
import Modal from "./Modal/Modal";
import { ReactNode } from "react";
import Link from "../Atoms/Link";
import {
  AMEYO_URL,
  KAARDS_URL,
  LHOTSE_URL,
  STACKINVERSE_URL,
  TANDEM_URL,
  THRONE_URL,
  VICO_URL,
} from "../../_constants/urls";

const MODAL_ID = "about";

const AboutModal = () => {
  const sentences = [
    ">> 👋 Hey there I'm Alex.",
    ">> Welcome to my corner of the internet 🌐.",
    ">> I’m a 📍 Berlin-based Austrian-Canadian fullstack engineer into building amazing products with fullstack Typescript.",
    <Text key="working-at">
      {`>> Working at`} <Link to={THRONE_URL}>Throne</Link> as a fullstack
      engineer to help grow the creator economy.
    </Text>,
    <Text key="prev-built">
      {`>> Prev built:`} [<Link to={STACKINVERSE_URL}>StackInverse</Link>,{" "}
      <Link to={KAARDS_URL}>kaards</Link>, <Link to={AMEYO_URL}>Ameyo</Link>]
    </Text>,
    <Text key="swe">
      {`>> Prev software engineer:`} [<Link to={THRONE_URL}>Throne</Link>,{" "}
      <Link to={LHOTSE_URL}>Lhotse</Link>, <Link to={VICO_URL}>VICO</Link>]
    </Text>,
    <Text key="pm">
      {`>> Prev product manager:`} [<Link to={TANDEM_URL}>Tandem</Link>]
    </Text>,
    ">> Super interested in languages (🇨🇦/🇨🇴/🇩🇪/🇧🇷), tech-for-good, travel/remote-work, economics, and above all solving real world problems through code (frontend, backend, mobile).",
    ">> I'm always up for a chat, so feel free to reach out to me on LinkedIn or via email.",
    ">> Click around to learn more or to just move the wobblies around.",
  ];

  return (
    <Modal id={MODAL_ID} title={"README"}>
      {sentences.map((sentence, i) =>
        typeof sentence === "string" ? (
          <Text key={i}>{sentence}</Text>
        ) : (
          sentence
        )
      )}
    </Modal>
  );
};

export default AboutModal;
