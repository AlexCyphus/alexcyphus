"use client";

import { HStack, useModal } from "@chakra-ui/react";
import { useSystemContext } from "../../_providers/SystemContext";
import TopBarDropdown, { TopBarDropdownProps } from "./TopBarDropdown";
import { useModals } from "../../_providers/ModalContext";

const TopBar = () => {
  const { setState } = useSystemContext();
  const { closeAllModals } = useModals();

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
