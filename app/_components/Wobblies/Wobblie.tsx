"use client";

import { Box } from "@chakra-ui/react";
import Draggable from "react-draggable";
import { getWobblieHtml } from "./utils/wobblieUtils";
import useWobblies from "./utils/useWobblies";

export interface IWobblie {
  color: string;
  id: string;
  height: number;
}

const Wobblie: React.FC<IWobblie> = ({ color, id, height }) => {
  const { changeWobblieColor } = useWobblies();

  const defaultPosition = { x: 0, y: 0 };
  // typeof window === "undefined"
  // ?
  // : {
  //     x: Math.floor(Math.random() * window.innerWidth),
  //     y: Math.floor(Math.random() * window.innerHeight),
  //   };

  return (
    <Draggable
      handle=".handle"
      bounds="parent"
      onMouseDown={() => changeWobblieColor(id)}
      defaultPosition={defaultPosition}
    >
      <Box className="handle" position={"absolute"}>
        <Box
          userSelect={"none"}
          draggable={false}
          zIndex={0}
          color={color}
          animation={`spin 6s linear infinite`}
          dangerouslySetInnerHTML={{
            __html: getWobblieHtml(height),
          }}
        />
      </Box>
    </Draggable>
  );
};
export default Wobblie;
