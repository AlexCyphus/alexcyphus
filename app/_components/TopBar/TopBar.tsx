"use client";

import { HStack } from "@chakra-ui/react";
import { useModals } from "../../_providers/ModalContext";
import { useSystemContext } from "../../_providers/SystemContext";
import { generateRandomColor } from "../../_utils/colorUtils";
import useWobblies from "../Wobblies/utils/useWobblies";
import TopBarDropdown, { TopBarDropdownProps } from "./TopBarDropdown";

const TopBar = () => {
  const { setState } = useSystemContext();
  const { closeAllModals } = useModals();
  const { addWobblie, removeAllWobblies } = useWobblies();

  const topBarData: TopBarDropdownProps[] = [
    {
      title: "🥭",
      options: [
        {
          title: "Built with 🥭 by Alex",
          action: () => {
            window.open("");
          },
        },
        {
          title: "Power off",
          action: () => {
            setState({
              isOn: false,
              highestZIndex: 0,
            });
          },
        },
      ],
    },
    {
      title: "Contact",
      options: [
        {
          title: "Send me an email",
          action: () => {
            window.open("mailto:alexjcyphus@gmail.com");
          },
        },
        {
          title: "View my LinkedIn",
          action: () => {
            window.open("https://www.linkedin.com/in/alexcyphus/");
          },
        },
      ],
    },
    {
      title: "View",
      options: [
        {
          title: "Close all windows",
          action: closeAllModals,
        },
      ],
    },
    {
      title: "Wobblies",
      options: [
        {
          title: "Add a wobblie",
          action: () => {
            addWobblie({
              id: Math.random().toString(36).substring(7),
              color: generateRandomColor(),
              height: Math.floor(Math.random() * 440) + 60,
            });
          },
        },
        {
          title: "Delete all wobblies",
          action: removeAllWobblies,
        },
      ],
    },
  ];

  return (
    <HStack
      px={4}
      align={"center"}
      gap={2}
      borderColor={"black"}
      borderBottom={"1px"}
    >
      {topBarData.map((item) => {
        return <TopBarDropdown key={item.title} {...item} />;
      })}
    </HStack>
  );
};

export default TopBar;
