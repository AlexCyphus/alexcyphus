"use client";

import { Box } from "@chakra-ui/react";
import Draggable from "react-draggable";
import useWobblies from "./utils/useWobblies";
import { getWobblieHtml } from "./utils/wobblieUtils";

export interface IWobblie {
  color: string;
  id: string;
  height: number;
  animation: string;
}

const Wobblie: React.FC<IWobblie> = ({ color, id, height, animation }) => {
  const { changeWobblieColor } = useWobblies();

  const defaultPosition = {
    x: Math.floor(Math.random() * window.innerWidth - height),
    y: Math.floor(Math.random() * window.innerHeight - height),
  };

  console.log({ animation, color, id, height });

  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      onMouseDown={() => changeWobblieColor(id)}
      defaultPosition={defaultPosition}
    >
      <Box className="handle" position={"absolute"} zIndex={0}>
        <Box
          userSelect={"none"}
          draggable={false}
          zIndex={0}
          color={color}
          // animation={animation}
          transform={"rotate(0deg)"}
          dangerouslySetInnerHTML={{
            __html: getWobblieHtml(height),
          }}
        />
      </Box>
    </Draggable>
  );
};
export default Wobblie;
