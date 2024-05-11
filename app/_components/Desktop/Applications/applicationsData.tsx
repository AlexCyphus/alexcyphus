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
    title: "Work",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        🧑‍💻
      </Text>
    ),
    id: "work",
  },
];
