import { Stack } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { useModals } from "../../../_providers/ModalContext";
import { useSystemContext } from "../../../_providers/SystemContext";
import ModalTopBar from "./ModalTopBar";

export interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, title, children }) => {
  const { modals, moveModalToFront } = useModals();
  const { state, setState } = useSystemContext();

  const modalData = modals.find((modal) => modal.id === id);

  if (!modalData) return null;

  return (
    <Draggable
      handle=".draggable-handle"
      defaultPosition={{ x: Math.random() * 300, y: Math.random() * 300 }}
      bounds="parent"
      onMouseDown={() => moveModalToFront(id)}
    >
      <Stack
        maxWidth={"600px"}
        w="60vw"
        border={"1px solid black"}
        bgColor={"white"}
        rounded="2px"
        pos={"absolute"}
        zIndex={modalData.zIndex}
      >
        <ModalTopBar modalId={id} title={title} />
        <Stack
          fontFamily={"toronto"}
          fontSize={"sm"}
          p={4}
          maxHeight={"60vh"}
          overflow={"scroll"}
        >
          {children}
        </Stack>
      </Stack>
    </Draggable>
  );
};

export default Modal;
