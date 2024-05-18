import { Rect } from "react-konva";
import { PADDLE_HEIGHT, PADDLE_WIDTH } from "./logic/constants";

interface ShapeProps {
  x: number;
  y: number;
}

export const Paddle: React.FC<ShapeProps> = ({ x, y }) => {
  return (
    <Rect
      x={x}
      y={y}
      width={PADDLE_WIDTH}
      height={PADDLE_HEIGHT}
      fill={"red"}
      cornerRadius={50}
    />
  );
};

export const Ball: React.FC<ShapeProps> = ({ x, y }) => {
  return (
    <Rect x={x} y={y} width={8} height={8} fill={"blue"} cornerRadius={50} />
  );
};
