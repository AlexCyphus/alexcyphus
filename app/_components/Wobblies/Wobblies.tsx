import Wobblie from "./Wobblie";
import useWobblies from "./utils/useWobblies";

const Wobblies = () => {
  const { wobblies } = useWobblies();

  if (typeof window === "undefined") return null;

  return (
    <>
      {wobblies.map((wobblie) => (
        <Wobblie
          key={wobblie.id}
          color={wobblie.color}
          id={wobblie.id}
          height={wobblie.height}
        />
      ))}
    </>
  );
};

export default Wobblies;
