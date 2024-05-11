import AmeyoLogo from "./images/ameyo-logo.png";
import LhotseLogo from "./images/lhotse-logo.png";
import TandemLogo from "./images/tandem-logo.png";
import ThroneLogo from "./images/throne-logo.png";
import VicoLogo from "./images/vico-logo.png";
import KaardsLogo from "./images/kaards-logo.png";
import StackinverseLogo from "./images/stackinverse-logo.png";
import { WorkRowProps } from './WorkRow';

export const workModalData: WorkRowProps[] = [
  {
    title: "Throne // Fullstack Engineer",
    date: "2022-2024",
    image: ThroneLogo.src,
    description:
      "Ensuring fans can send giant Snorlax stuffies to their favorite creators. Learnt that there are shockingly big communities for things that seem shockingly niche. Frontend, backend, + mobile.",
  },
  {
    title: "stackinverse.ca // Creator",
    date: "2024-2024",
    image: StackinverseLogo.src,
    description:
      "Failed side-project #3: A platform for startups to reach out to senior engineers in Toronto. Engineers loved it and a few hundred signed up - but we launched at the height of tech layoffs so no companies wanted to use it :(",
  },
  {
    title: "kaards.io // Creator",
    date: "2021-2023",
    image: KaardsLogo.src,
    description:
      "Failed side-project #2: A language app with the thesis that serious language learners would choose extreme effectiveness over fun. We made a few thousand dollars and had a few thousand users but turns out even serious learners love fun and retention was really hard.",
  },
  {
    title: "Lhotse // Frontend Engineer",
    date: "2021-2022",
    description:
      "Making the world of procurement better one line of code at a time. Preached the gospel of Typescript in week 1, converted the codebase, and massively reduced bugs 🙏.",
    image: LhotseLogo.src,
  },
  {
    title: "Tandem // Product Manager",
    date: "2019-2021",
    description:
      "Product managing, writing code, learning weird language facts. Led creation + growth of the Tandem Certificates. While doing competitor research, I scored B2 English (my native language) on a competing English exam.",
    image: TandemLogo.src,
  },
  {
    title: "Ameyo // Creator",
    date: "2020",
    description:
      "Failed side-project #1: Honestly, if your first side project isn't a to-do app are you even a developer? It still has a few hundred active users though somehow.",
    image: AmeyoLogo.src,
  },
  {
    title: "VICO // Fullstack Engineer",
    description:
      "Building the Uniplaces of LATAM and butchering the Spanish language in the process. My Colombian co-workers taught me every dirty word their beautiful dialect of Spanish had to offer. Reggaeton comprehension went way up after this.",
    date: "2019-2019",
    image: VicoLogo.src,
  },
];
