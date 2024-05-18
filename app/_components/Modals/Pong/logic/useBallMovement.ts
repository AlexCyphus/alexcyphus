import { useEffect, useState } from 'react';
import { CANVAS_HEIGHT } from './constants';

interface BallMovementProps {
  xDirection: "left" | "right"
  yDirection: "up" | "down" | undefined
  setYDirection: (direction: "up" | "down" | undefined) => void
}

const useBallMovement = ({
  xDirection,
  yDirection,
  setYDirection
}: BallMovementProps) => {
  const [ballX, setBallX] = useState(300);
  const [ballY, setBallY] = useState(20);
  const hasHitRoof = ballY <= 10;
  const hasHitFloor = ballY >= CANVAS_HEIGHT - 10;

  console.log({
    ballX,
    ballY,
    hasHitRoof,
    hasHitFloor
  })

  useEffect(() => {
    const interval = setInterval(() => {
      if (hasHitRoof) {
        setYDirection("down");
      } else if (hasHitFloor) {
        setYDirection("up");
      }

      if (xDirection === "left") {
        setBallX((prev) => prev - 10);
      } else {
        setBallX((prev) => prev + 10);
      }

      if (yDirection === "up") {
        setBallY((prev) => prev - 10);
      } else if (yDirection === "down") {
        setBallY((prev) => prev + 10);
      }
    }, 50);

    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return { ballX, ballY };
}

export default useBallMovement;