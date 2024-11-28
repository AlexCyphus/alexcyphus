import { HStack, Image, Text, TextProps } from "@chakra-ui/react";
import { ProjectsRowProps } from "./ProjectsRow";
import ameyoImage from "./images/ameyo-logo.png";

const unsortedProjectsModalData: ProjectsRowProps[] = [
  {
    name: "Stackinverse",
    concept:
      "A platform for startups to reach out to senior engineers in Toronto. Engineers loved it and a few hundred signed up - but we launched at the height of tech layoffs so no companies wanted to use it :(",
    url: "stackinverse.ca",
    status: "💀 dead",
  },
  {
    name: "Ameyo",
    concept:
      "Honestly, if your first side project isn't a to-do app are you even a developer? It still has a few hundred active users though somehow.",
    url: "alexcyphus.github.io/ameyo-landing",
    status: "🧟 zombie mode",
    image: (props: TextProps) => <Image src={ameyoImage.src} {...props} />,
  },
  {
    name: "DeutschDictionary",
    concept:
      "Procrastinating learning German by building a German dictionary app. Offers colloquial meanings, pronunciation, conjugations, and examples. Basically a gamble that learners don't want to use existing solutions built in 2002 and that Google will start ranking my pages.",
    url: "deutschdictionary.com",
    status: "🔥 live",
    image: (props: TextProps) => (
      <HStack justifyContent={"center"} {...props}>
        <Text>🇩🇪</Text>
      </HStack>
    ),
  },
  {
    name: "Vocab of the Day",
    url: "vocaboftheday.com",
    status: "🔥 live",
    concept:
      "An app where you can learn a new word every day in multiple languages. ChatGPT is terrible at foreign languages but I'm making it work.",
    image: (props: TextProps) => (
      <HStack justifyContent={"center"} {...props}>
        <Text>🦜</Text>
      </HStack>
    ),
  },
  {
    name: "Kaards",
    concept:
      "A language app with the thesis that serious language learners would choose extreme effectiveness over fun. We made a few thousand dollars and had a few thousand users but turns out even serious learners love fun and retention was really hard.",
    url: "kaards.io",
    status: "🧟 zombie mode",
  },
] as const;

export const projectsModalData = unsortedProjectsModalData.sort((a, b) => {
  const statusOrder: Record<ProjectsRowProps["status"], number> = {
    "🔥 live": 0,
    "🧟 zombie mode": 1,
    "💀 dead": 2,
  };
  return statusOrder[a.status] - statusOrder[b.status];
});
