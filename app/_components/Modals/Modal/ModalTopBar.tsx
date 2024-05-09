import { Box, HStack, Text } from "@chakra-ui/react";
import { useModals } from "../../../_providers/ModalContext";

interface Props {
  modalId: string;
  title: string;
}

const ModalTopBar: React.FC<Props> = ({ modalId, title }) => {
  const { closeModal } = useModals();

  return (
    <HStack
      justify={"space-between"}
      cursor="grabbing"
      px={4}
      fontFamily={"chicago"}
      bgColor={"green.100"}
      borderBottom={"1px solid black"}
      className="draggable-handle"
    >
      <Box
        fontFamily={"toronto"}
        onClick={() => closeModal(modalId)}
        cursor={"pointer"}
        bgColor={"lightgray"}
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
