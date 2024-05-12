import { Text } from "@chakra-ui/react";
import { useState } from "react";

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  // update the time every second
  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  // format date to HH:MM:SS
  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <Text gap={2} px={2}>
      {formattedTime}
    </Text>
  );
};

export default Time;
