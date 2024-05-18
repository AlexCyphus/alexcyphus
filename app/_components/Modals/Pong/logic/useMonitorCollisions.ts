import { useEffect, useState } from 'react';
import { CANVAS_WIDTH, PADDLE_HEIGHT, PADDLE_WIDTH } from './constants';

interface MonitorCollisionsProps {
  playerPaddleY: number;
  computerPaddleY: number;
  xDirection: "left" | "right";
  ballX: number;
  ballY: number;
  setXDirection: (direction: "left" | "right") => void;
  setYDirection: (direction: "up" | "down") => void;
}

const useMonitorCollisions = ({
  playerPaddleY,
  computerPaddleY,
  xDirection,
  ballX,
  ballY,
  setXDirection,
  setYDirection,
}: MonitorCollisionsProps) => {
  const [touchedPaddleAt, setTouchedPaddleAt] = useState<number | null>(null);
  const [missedBall, setMissedBall] = useState(false);

  useEffect(() => {
    const checkPaddleCollision = (paddleY: number): void => {
      if (missedBall) return

      const isAtPaddle = ballX <= PADDLE_WIDTH || ballX >= CANVAS_WIDTH - PADDLE_WIDTH;
      const isTouchingPaddle = ballY >= paddleY && ballY <= paddleY + PADDLE_HEIGHT;

      const recentlyTouched = touchedPaddleAt && new Date().getTime() - touchedPaddleAt < 1000;

      if (isAtPaddle) {
        if (recentlyTouched) return

        // if (!isTouchingPaddle) {
        //   alert('missed')
        //   setMissedBall(true);
        //   return
        // }

        setTouchedPaddleAt(new Date().getTime());

        if (xDirection === "left") {
          setXDirection("right");
        } else {
          setXDirection("left");
        }

        if (ballY < paddleY + PADDLE_HEIGHT / 2) {
          setYDirection("up");
        } else {
          setYDirection("down");
        }
      }
    };

    if (xDirection === "left") {
      checkPaddleCollision(playerPaddleY);
    } else {
      checkPaddleCollision(computerPaddleY);
    }

  }, [playerPaddleY, computerPaddleY, xDirection, missedBall, ballX, ballY, touchedPaddleAt, setXDirection, setYDirection]);
}

export default useMonitorCollisions;