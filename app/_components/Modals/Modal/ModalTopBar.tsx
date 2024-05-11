import { Text, Box, HStack, Stack } from "@chakra-ui/react";
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
      onClick={() => setTopBarColor(getNewColor(topBarColor))}
      pos={"relative"}
    >
      <Stack
        fontFamily={"toronto"}
        position="absolute"
        top={"3px"}
        left={3}
        onClick={() => closeModal(modalId)}
        cursor={"pointer"}
        bgColor={"white"}
        w={"18px"}
        h={"18px"}
        border={"1px solid black"}
        role="group"
        rounded="3px"
        zIndex={10000}
        justify={"center"}
        align={"center"}
      >
        <Text fontSize={"8px"} lineHeight="8px" mt="1px" fontWeight={"bold"}>
          X
        </Text>
      </Stack>
      <HStack
        className="draggable-handle"
        w="100%"
        h="100%"
        justifyContent={"center"}
      >
        <Box>{title}</Box>
      </HStack>
    </HStack>
  );
};

export default ModalTopBar;
