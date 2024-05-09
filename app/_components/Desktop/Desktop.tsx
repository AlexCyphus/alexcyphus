import { Stack, Text } from "@chakra-ui/react";
import ApplicationIcon, { ApplicationIconProps } from "./ApplicationIcon";
import TravelModal from "../Modals/TravelModal";
import AboutModal from "../Modals/AboutModal";

const applications: ApplicationIconProps[] = [
  {
    title: "About",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        🥭
      </Text>
    ),
    id: "about",
  },
  {
    title: "Travel",
    icon: (
      <Text textAlign="center" fontSize={"x-large"}>
        ✈️
      </Text>
    ),
    id: "travel",
  },
];

const Desktop = () => {
  return (
    <Stack
      bgColor={"gray"}
      h="100%"
      w="100%"
      maxHeight={"calc(100vh - 33px)"}
      overflow={"clip"}
    >
      <AboutModal />
      <TravelModal />
      <Stack p={4}>
        {applications.map((application) => (
          <ApplicationIcon key={application.id} {...application} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Desktop;
