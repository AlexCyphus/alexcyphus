import { Text } from "@chakra-ui/react";
import {
  AMEYO_URL,
  CLOZEMASTER_URL,
  DEUTSCH_DICTIONARY_URL,
  EMAIL_URL,
  KAARDS_URL,
  LINKEDIN_URL,
  THRONE_URL,
  VOCAB_OF_THE_DAY_URL
} from "../../_constants/urls";
import Link from "../Atoms/Link";
import Modal from "./Modal/Modal";

const MODAL_ID = "about";

const AboutModal = () => {
  const sentences = [
    ">> 👋 Hey there I'm Alex.",
    ">> Welcome to my corner of the internet 🌐.",
    ">> I’m a 🇪🇸 Barcelona-based 🇨🇦 Canadian freelance fullstack engineer (and former product manager) helping build amazing products and building language apps on on the side 🤓.",
    <Text key="working-at">
      {`>> Currently working at`} <Link to={THRONE_URL}>Throne</Link> and <Link to={CLOZEMASTER_URL}>Clozemaster</Link> as a fullstack
      engineer (Typescript, Express, React, React Native, Rails, and Swift). 
    </Text>,
    <Text key="prev-built">
      {`>> Current side projects: [`}
      <Link to={VOCAB_OF_THE_DAY_URL}>VocabOfTheDay</Link>,
      <Link to={DEUTSCH_DICTIONARY_URL}>DeutschDictionary</Link>,{" "}
    </Text>,
    <Text key="prev-built">
    {`>> Former side projects 🪦: [`}
    <Link to={KAARDS_URL}>Kaards</Link>,
    ]
  </Text>,
    ">> Super interested in projects related to languages (I speak 🇨🇦/🇨🇴/🇩🇪), travel, and finance/economics.",
    <Text key="contact">
      {`>> Wanna chat? Hit me up on `}
      <Link to={LINKEDIN_URL}>🔗 LinkedIn</Link>
      {` or `}
      <Link to={EMAIL_URL}>📧 email</Link>.
    </Text>,
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
