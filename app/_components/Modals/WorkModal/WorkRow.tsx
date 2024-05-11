import { HStack, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { generateRandomColor, getNewColor } from "../../../_utils/colorUtils";

export interface WorkRowProps {
  title: string;
  date: string;
  image: string;
  description: string;
}

const WorkRow: React.FC<WorkRowProps> = ({
  title,
  date,
  image,
  description,
}) => {
  const [color, setColor] = React.useState<string>(generateRandomColor());

  return (
    <Stack
      role="group"
      py={4}
      cursor={"pointer"}
      onMouseEnter={() => {
        setColor(getNewColor(color));
      }}
    >
      <HStack gap={4}>
        <Stack
          bgColor={color}
          w={"60px"}
          h={"40px"}
          rounded="md"
          align="center"
          justify="center"
          px={4}
          transition={"all 0.3s ease"}
          _groupHover={{
            w: "80px",
            h: "60px",
          }}
        >
          <Image
            src={image}
            w="40px"
            h="auto"
            maxH={"20px"}
            objectFit={"contain"}
            alt="Work logo"
            transition={"all 0.3s ease"}
            _groupHover={{
              w: "60px",
              h: "auto",
              maxH: "40px",
            }}
          />
        </Stack>
        <Stack gap={0}>
          <Text fontSize="medium">{title}</Text>
          <Text color="gray" fontSize={"xs"}>
            {date}
          </Text>
        </Stack>
      </HStack>
      <Text fontSize={"sm"}>{description}</Text>
    </Stack>
  );
};

export default WorkRow;
