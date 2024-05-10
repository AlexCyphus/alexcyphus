import { Box, HStack } from "@chakra-ui/react";
import { useModals } from "../../../_providers/ModalContext";
import { generateRandomColor, getNewColor } from "../../../_utils/colorUtils";
import { useRef, useState } from "react";

interface Props {
  modalId: string;
  title: string;
}

const ModalTopBar: React.FC<Props> = ({ modalId, title }) => {
  const { closeModal } = useModals();

  const [topBarColor, setTopBarColor] = useState<string>(generateRandomColor());

  return (
    <HStack
      justify={"space-between"}
      cursor="grabbing"
      px={4}
      fontFamily={"chicago"}
      bgColor={topBarColor}
      borderBottom={"1px solid black"}
      className="draggable-handle"
      onClick={() => setTopBarColor(getNewColor(topBarColor))}
    >
      <Box
        fontFamily={"toronto"}
        onClick={() => closeModal(modalId)}
        cursor={"pointer"}
        bgColor={"white"}
        w={"12px"}
        h={"12px"}
        border={"1px solid black"}
        pos={"relative"}
        role="group"
        rounded="3px"
      />
      <Box>{title}</Box>
      <Box />
    </HStack>
  );
};

export default ModalTopBar;
