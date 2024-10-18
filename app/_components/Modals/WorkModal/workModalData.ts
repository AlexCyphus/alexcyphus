import LhotseLogo from "./images/lhotse-logo.png";
import TandemLogo from "./images/tandem-logo.png";
import ThroneLogo from "./images/throne-logo.png";
import VicoLogo from "./images/vico-logo.png";
import UBCLogo from "./images/ubc-logo.png";
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
    title: "VICO // Fullstack Engineer",
    description:
      "Building the Uniplaces of LATAM and butchering the Spanish language in the process. My Colombian co-workers taught me every dirty word their beautiful dialect of Spanish had to offer. Reggaeton comprehension went way up after this.",
    date: "2019-2019",
    image: VicoLogo.src,
  },
  {
    title: "University of British Columbia // Student",
    description: "Coding side projects + learning data science while grinding through a Finance degree.",
    date: "2015-2019",
    image: UBCLogo.src,
  },
];
