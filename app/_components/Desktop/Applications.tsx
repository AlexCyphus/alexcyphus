import { Stack, Text } from "@chakra-ui/react";
import ApplicationIcon, { ApplicationIconProps } from "./ApplicationIcon";

const applications: ApplicationIconProps[] = [
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
  {
    title: "Hobbies",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        🎨
      </Text>
    ),
    id: "hobbies",
  },
];

const Applications = () => {
  if (typeof window === "undefined") return null;

  return (
    <Stack p={4} gap={8} w="max-content" justify={"center"} align={"center"}>
      {applications.map((application) => (
        <ApplicationIcon key={application.id} {...application} />
      ))}
    </Stack>
  );
};

export default Applications;
