import { Stack } from "@chakra-ui/react";
import { useModals } from "../../../_providers/ModalContext";
import ModalTopBar from "./ModalTopBar";
import Draggable from "react-draggable";

export interface ModalProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ id, title, children }) => {
  const { modals, moveModalToFront } = useModals();

  const modalData = modals.find((modal) => modal.id === id);

  const defaultPositionBasedOnScreenSize = () => {
    const isMobile = window.innerWidth < 768;
    return isMobile
      ? { x: Math.random() * 50, y: Math.random() * 50 }
      : { x: Math.random() * 300, y: Math.random() * 200 };
  };

  if (!modalData) return null;

  return (
    <Draggable
      handle=".draggable-handle"
      defaultPosition={defaultPositionBasedOnScreenSize()}
      bounds="parent"
      onMouseDown={() => moveModalToFront(id)}
    >
      <Stack
        maxWidth={"600px"}
        w="90vw"
        border={"1px solid black"}
        bgColor={"white"}
        rounded="2px"
        gap={0}
        pos={"absolute"}
        zIndex={modalData.zIndex}
      >
        <ModalTopBar modalId={id} title={title} />
        <Stack
          fontSize={"sm"}
          p={4}
          maxHeight={"60vh"}
          overflow={"scroll"}
          fontFamily={"ibm"}
        >
          {children}
        </Stack>
      </Stack>
    </Draggable>
  );
};

export default Modal;
