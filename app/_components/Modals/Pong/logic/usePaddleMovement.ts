import { useState, useEffect } from 'react';

const usePaddleMovement = () => {
  const [playerPaddleY, setPlayerPaddleY] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "w") {
        setPlayerPaddleY((prev) => prev - 10);
      } else if (e.key === "s") {
        setPlayerPaddleY((prev) => prev + 10);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  return { playerPaddleY };
}

export default usePaddleMovement;