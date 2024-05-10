import { useSystemContext } from '../../../_providers/SystemContext';
import { generateRandomColor } from '../../../_utils/colorUtils';
import { IWobblie } from '../Wobblie';

const useWobblies = () => {
  const { state, setState } = useSystemContext();

  const addWobblie = (newWobblie: IWobblie) => {
    setState({
      wobblies: [...state.wobblies, newWobblie],
    });
  };

  const removeWobblie = (id: string) => {
    setState({
      wobblies: state.wobblies.filter((wobblie) => wobblie.id !== id),
    });
  };

  const removeAllWobblies = () => {
    setState({
      wobblies: [],
    });
  }

  const changeWobblieColor = (id: string) => {
    setState({
      wobblies: state.wobblies.map((wobblie) => {
        if (wobblie.id === id) {
          return {
            ...wobblie,
            color: generateRandomColor(),
          };
        }
        return wobblie;
      }),
    });
  }

  return {
    wobblies: state.wobblies,
    addWobblie,
    removeWobblie,
    removeAllWobblies,
    changeWobblieColor,
  };


}

export default useWobblies;