export const getColorsByIndex = (index, colors) => {
  return colors[index % colors.length];
};
