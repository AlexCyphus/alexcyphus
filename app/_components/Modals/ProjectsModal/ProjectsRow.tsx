import { Badge, HStack, Image, Stack, Text, TextProps } from "@chakra-ui/react";
import React from "react";
import Link from 'next/link';
import { generateRandomColor, getNewColor } from "../../../_utils/colorUtils";

export interface ProjectsRowProps {
  name: string;
  concept: string;
  url: string;
  status: "💀 dead" | "🔥 live" | "🧟 zombie mode"
  image?: (props: TextProps) => JSX.Element
}

const ProjectsRow: React.FC<ProjectsRowProps> = ({
  name,
  concept,
  url,
  status,
  image: CustomImage
}) => {
  const [color, setColor] = React.useState<string>(generateRandomColor());

  const statusColors: Record<ProjectsRowProps["status"], string> = {
    "💀 dead": "gray",
    "🔥 live": "red",
    "🧟 zombie mode": "green",
  };

  const imageProps = {
    w: "40px",
    h: "auto",
    objectFit: "contain",
    alt: "Project favicon",
    transition: "all 0.3s ease",
    _groupHover: {
      w: "60px",
      h: "auto",
      maxH: "40px",
    }
  } as const

  return (
    <Link href={'https://' + url} target="_blank">
      <Stack
        role="group"
        py={4}
        cursor="pointer"
        onMouseEnter={() => {
          setColor(getNewColor(color));
        }}
      >
        <Stack
          bgColor={color}
          w="60px"
          h="40px"
          fontSize="2xl"
          textAlign={"center"}
          minW="60px"
          rounded="md"
          align="center"
          justify="center"
          px={4}
          transition="all 0.3s ease"
          _groupHover={{
            w: "80px",
            minW: "80px",
            fontSize: "4xl",
            h: "60px",
          }}
        >
          {
            CustomImage
              ? <CustomImage  {...imageProps} />
              :
              <Image
                src={`https://www.google.com/s2/favicons?domain=${url}&sz=64`}
                {...imageProps}
              />}
        </Stack>
        <HStack gap={4} align="start">
          <Stack gap={1}>
            <HStack>
              <Text fontSize="medium">
                {name}
              </Text>
              <Badge
                colorScheme={statusColors[status]}
                maxWidth={"min-content"}
              >
                {status}
              </Badge>
            </HStack>
            <Text fontSize="xs" fontWeight="medium">
              {concept}
            </Text>
          </Stack>
        </HStack>
      </Stack>
    </Link>
  );
};

export default ProjectsRow;
