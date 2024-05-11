import { Divider, Stack, Text } from "@chakra-ui/react";
import Modal from "../Modal/Modal";
import WorkRow, { WorkRowProps } from "./WorkRow";

import AmeyoLogo from "./images/ameyo-logo.png";
import LhotseLogo from "./images/lhotse-logo.png";
import TandemLogo from "./images/tandem-logo.png";
import ThroneLogo from "./images/throne-logo.png";
import VicoLogo from "./images/vico-logo.png";
import KaardsLogo from "./images/kaards-logo.png";
import StackinverseLogo from "./images/stackinverse-logo.png";

const MODAL_ID = "work";

const projects: WorkRowProps[] = [
  {
    title: "Throne // Fullstack Engineer",
    date: "2022-2024",
    image: ThroneLogo.src,
    description:
      "Ensuring fans can send giant Snorlax stuffies to their favorite creators. Frontend, backend, + mobile.",
  },
  {
    title: "stackinverse.ca // Creator",
    date: "2024-2024",
    image: StackinverseLogo.src,
    description:
      "Failed side-project #3: A platform for startups to reach out to senior engineers in Toronto. Engineers loved it - but we launched at the height of tech layoffs :(",
  },
  {
    title: "kaards.io // Creator",
    date: "2021-2023",
    image: KaardsLogo.src,
    description:
      "Failed side-project #2: A language app with a thesis that serious language learners would choose extreme effectiveness over fun. We made a few thousand dollars and had a few thousand users but turns out even serious learners love fun.",
  },
  {
    title: "Lhotse // Frontend Engineer",
    date: "2021-2022",
    description:
      "Making the world of procurement better one line of code at a time.",
    image: LhotseLogo.src,
  },
  {
    title: "Tandem // Product Manager",
    date: "2019-2021",
    description:
      "Product managing, writing code, learning weird language facts.",
    image: TandemLogo.src,
  },
  {
    title: "Ameyo // Creator",
    date: "2020",
    description:
      "Failed side-project #1: If your first side project isn't a to-do app are you even a developer?",
    image: AmeyoLogo.src,
  },
  {
    title: "VICO // Fullstack Engineer",
    description:
      "Building the Uniplaces of LATAM and butchering the Spanish language in the process.",
    date: "2019-2019",
    image: VicoLogo.src,
  },
];

const WorkModal = () => {
  return (
    <Modal id={MODAL_ID} title="Work">
      <Text>
        {`Some of the companies I've worked at and some of my side projects.`}
      </Text>
      <Divider />
      <Stack divider={<Divider />}>
        {projects.map((project) => (
          <WorkRow key={project.title} {...project} />
        ))}
      </Stack>
      {}
    </Modal>
  );
};

export default WorkModal;
