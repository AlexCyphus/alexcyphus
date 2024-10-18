import { ApplicationIconProps } from "./ApplicationIcon";
import { Text } from "@chakra-ui/react";

export const applicationsData: ApplicationIconProps[] = [
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
  {
    title: "Resume",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        📄
      </Text>
    ),
    id: "resume",
  },
  {
    title: "Projects",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        👨‍💻
      </Text>
    ),
    id: "projects",
  },

];
