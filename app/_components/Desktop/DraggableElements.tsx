import Modals from "../Modals/Modals";
import Wobblies from "../Wobblies/Wobblies";
import Applications from "./Applications/Applications";

const DraggableElements = () => {
  if (typeof window === "undefined") return null;

  return (
    <>
      <Applications />
      <Modals />
      <Wobblies />
    </>
  );
};

export default DraggableElements;
