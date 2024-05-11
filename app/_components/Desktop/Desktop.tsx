import { Stack } from "@chakra-ui/react";
import Modals from "../Modals/Modals";
import Wobblies from "../Wobblies/Wobblies";
import Applications from "./Applications/Applications";
import DraggableElements from "./DraggableElements";

const Desktop = () => {
  return (
    <Stack
      bgColor={"white"}
      h="100%"
      w="100%"
      maxHeight={"calc(100vh - 33px)"}
      overflow={"clip"}
      position={"relative"}
      className="desktop"
    >
      {typeof window !== "undefined" && <DraggableElements />}
    </Stack>
  );
};

export default Desktop;
