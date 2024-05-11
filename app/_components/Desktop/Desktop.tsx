import { Stack } from "@chakra-ui/react";
import DraggableElements from "./DraggableElements";

const Desktop = () => {
  return (
    <Stack
      bgColor={"white"}
      h="100%"
      w="100%"
      maxHeight={"calc(100vh - 30px)"}
      overflow={"clip"}
      position={"relative"}
      className="desktop"
    >
      {typeof window !== "undefined" && <DraggableElements />}
    </Stack>
  );
};

export default Desktop;
