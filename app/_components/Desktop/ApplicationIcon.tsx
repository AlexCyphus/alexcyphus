import { Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import OutsideClickHandler from "./OutsideClickHandler";
import { useModals } from "../../_providers/ModalContext";

export interface ApplicationIconProps {
  title: string;
  icon: React.ReactNode;
  id: string;
}

const ApplicationIcon: React.FC<ApplicationIconProps> = ({
  title,
  icon,
  id,
}) => {
  const [numOfClicks, setNumOfClicks] = useState(0);

  const { openModal, moveModalToFront } = useModals();

  const handleClick = () => {
    if (numOfClicks === 1) {
      // open modal
      setNumOfClicks(0);
      openModal(id);
      moveModalToFront(id);
    } else {
      setNumOfClicks(numOfClicks + 1);
    }
  };

  const handleOutsideClick = () => {
    setNumOfClicks(0); // Reset numOfClicks to 0 on outside click
  };

  return (
    <OutsideClickHandler onClickOutside={handleOutsideClick}>
      <Stack
        w="max-content"
        justify={"center"}
        onClick={handleClick}
        userSelect={"none"}
        cursor={"pointer"}
      >
        {icon}
        <Text
          bgColor={numOfClicks === 0 ? "white" : "black"}
          px={1}
          color={numOfClicks === 0 ? "black" : "white"}
          userSelect={"none"}
        >
          {title}
        </Text>
      </Stack>
    </OutsideClickHandler>
  );
};

export default ApplicationIcon;
