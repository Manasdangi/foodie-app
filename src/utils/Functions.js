

export const totalAmount = dishArray => {
  return dishArray.reduce((total, item) => {
    return total + calculatePrice(item);
  }, 0);
};
