export const generateRandomColor = () => {
  const colors = [
    "#FFC0CB",
    "#FFA07A",
    "#FFD700",
    "#98FB98",
    "#87CEEB",
    "#9370DB",
    "#FFB6C1",
    "#FFA07A",
    "#FFA500",
    "#FFD700",
    "#98FB98",
    "#87CEEB",
    "#DCDCDC",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

export const getNewColor = (currentColor: string): string => {
  const newColor = generateRandomColor();
  if (newColor === currentColor) {
    return getNewColor(currentColor);
  }
  return newColor;
}