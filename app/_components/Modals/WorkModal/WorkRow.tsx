import { Divider, HStack, Image, Stack, Text } from "@chakra-ui/react";
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
      _hover={{
        scale: 1.5,
      }}
    >
      <HStack gap={4}>
        <Stack
          bgColor={color}
          w={"120px"}
          h={"60px"}
          rounded="md"
          align="center"
          justify="center"
          px={4}
          onMouseEnter={() => {
            setColor(getNewColor(color));
          }}
        >
          <Image src={image} h={"20px"} w="auto" alt="Work logo" />
        </Stack>
        <Stack gap={0}>
          <Text fontSize="medium">{title}</Text>
          <Text color="gray" fontSize={"xs"}>
            {date}
          </Text>
        </Stack>
      </HStack>
      <Divider />
      <Text fontSize={"sm"}>{description}</Text>
    </Stack>
  );
};

export default WorkRow;
