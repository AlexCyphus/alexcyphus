import { Stack } from "@chakra-ui/react";
import Modals from "../Modals/Modals";
import Wobblies from "../Wobblies/Wobblies";
import Applications from "./Applications";

// TO DO
// MOBILE FREUNDLICH
// WORK CONTENT
// REFACTOR
// DEPLOY

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
      {typeof window !== "undefined" && (
        <>
          <Applications />
          <Modals />
          <Wobblies />
        </>
      )}
    </Stack>
  );
};

export default Desktop;
