"use client";

import { Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react";

export interface TopBarDropdownProps {
  title: string;
  options: {
    title: string;
    action: () => void;
  }[];
}

const TopBarDropdown: React.FC<TopBarDropdownProps> = ({ options, title }) => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            py={1}
            px={2}
            bg={isOpen ? "black" : "white"}
            color={isOpen ? "white" : "black"}
            h="100%"
          >
            <Text>{title}</Text>
          </MenuButton>
          <MenuList
            rounded="none"
            py={0}
            mt={"-8px"}
            borderColor={"black"}
            borderWidth={1}
            zIndex={1000}
          >
            {options.map((option) => (
              <MenuItem
                _hover={{ bg: "black", color: "white" }}
                key={option.title}
                onClick={() => {
                  option.action();
                }}
              >
                {option.title}
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default TopBarDropdown;
