import { useEffect, useState } from "react";
import { CANVAS_HEIGHT, PADDLE_HEIGHT, PADDLE_MOVEMENT } from "./constants";

const useComputerPaddleMovement = ({ ballY }: { ballY: number }) => {
  const [paddleY, setPaddleY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const paddleCenter = paddleY + PADDLE_HEIGHT / 2;
      const shouldMoveDown = paddleY + paddleCenter - ballY < -PADDLE_MOVEMENT;
      const shouldMoveUp = paddleY - paddleCenter - ballY > PADDLE_MOVEMENT;

      setPaddleY((prev) => {
        const newPaddleY = shouldMoveDown
          ? Math.min(prev + PADDLE_MOVEMENT, CANVAS_HEIGHT - PADDLE_HEIGHT)
          : shouldMoveUp
          ? Math.max(prev - PADDLE_MOVEMENT, 0)
          : prev;
        return newPaddleY;
      });
    }, 50);

    // return () => clearInterval(interval);
  }, []);

  return { paddleY };
};

export default useComputerPaddleMovement;
