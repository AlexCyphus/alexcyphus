import Wobblie from "./Wobblie";
import useWobblies from "./utils/useWobblies";

const Wobblies = () => {
  const { wobblies } = useWobblies();

  return (
    <>
      {wobblies.map((wobblie) => (
        <Wobblie
          key={wobblie.id}
          color={wobblie.color}
          id={wobblie.id}
          height={wobblie.height}
          animation={wobblie.animation}
        />
      ))}
    </>
  );
};

export default Wobblies;
