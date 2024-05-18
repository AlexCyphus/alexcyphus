import { useState } from "react";
import { Layer, Stage } from "react-konva";
import Modal from "../Modal/Modal";
import { Ball, Paddle } from "./Shapes";
import { CANVAS_HEIGHT, CANVAS_WIDTH, PADDLE_WIDTH } from "./logic/constants";
import useBallMovement from "./logic/useBallMovement";
import useComputerPaddleMovement from "./logic/useComputerPaddleMovement";
import useMonitorCollisions from "./logic/useMonitorCollisions";
import usePaddleMovement from "./logic/usePaddleMovement";

const MODAL_ID = "pong";

const PongModal = () => {
  const [xDirection, setXDirection] = useState<"left" | "right">("left");
  const [yDirection, setYDirection] = useState<"up" | "down" | undefined>();

  const { playerPaddleY } = usePaddleMovement();
  const { ballX, ballY } = useBallMovement({
    xDirection,
    yDirection,
    setYDirection,
  });

  const { paddleY: computerPaddleY } = useComputerPaddleMovement({ ballY });

  useMonitorCollisions({
    playerPaddleY,
    computerPaddleY,
    xDirection,
    ballX,
    ballY,
    setXDirection,
    setYDirection,
  });

  return (
    <Modal id={MODAL_ID} title="Pong">
      <Stage width={CANVAS_WIDTH} height={CANVAS_HEIGHT}>
        <Layer>
          <Paddle x={0} y={playerPaddleY} />
        </Layer>
        <Layer>
          <Ball x={ballX} y={ballY} />
        </Layer>
        <Layer>
          <Paddle x={CANVAS_WIDTH - PADDLE_WIDTH} y={computerPaddleY} />
        </Layer>
      </Stage>
    </Modal>
  );
};

export default PongModal;
