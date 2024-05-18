import { generateRandomColor } from "../../../_utils/colorUtils";
import { IWobblie } from "../Wobblie";

export const getWobblieHtml = (height: number) => {
  return `<svg xmlns='http://www.w3.org/2000/svg' viewbox="0 0 1225 1153"  width='auto' height='${height}'><path fill='currentColor' d='M9.524 565.25C-29.401 364.7 64.404 138.657 275.142 66.526 361.56 36.945 514.239-4.561 631.048 1.062 736.737 6.15 816.124 6.467 949.22 84.286c162.827 95.202 198.711 205.37 266.723 445.04 52.336 184.428-150.555 396.347-228.314 449.142-75.537 51.286-207.01 161.093-312.368 171.708-141.947 14.302-258.188-39.734-373.554-112.034C169.54 955.314 75.233 903.805 9.524 565.251z'/></svg>`;
};

const generateRandomAnimation = () => {
  // duration between 4 and 10 seconds
  const duration = Math.floor(Math.random() * 6) + 4;

  const spinTypes = ["spin", "reverse-spin"];
  const spinType = spinTypes[Math.floor(Math.random() * 2)];

  return `${spinType} ${duration}s linear infinite`;
};

export const generateRandomWobblie = (): IWobblie => {
  return {
    id: Math.random().toString(),
    color: generateRandomColor(),
    height: Math.floor(Math.random() * 440) + 60,
    animation: generateRandomAnimation(),
  };
};
