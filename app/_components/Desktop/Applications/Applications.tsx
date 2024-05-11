import { Stack } from "@chakra-ui/react";
import ApplicationIcon from "./ApplicationIcon";
import { applicationsData } from "./applicationsData";

const Applications = () => {
  return (
    <Stack
      p={4}
      gap={8}
      w="max-content"
      justify={"center"}
      align={"center"}
      zIndex={1}
    >
      {applicationsData.map((application) => (
        <ApplicationIcon key={application.id} {...application} />
      ))}
    </Stack>
  );
};

export default Applications;
