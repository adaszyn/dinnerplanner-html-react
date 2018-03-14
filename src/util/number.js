export const formatPrice = (price) => {
  const integralPart = Math.floor(price);
  let fractionalPart = String(Math.floor(100 * (price - integralPart)));
  fractionalPart =
    fractionalPart.length === 1 ? fractionalPart + "0" : fractionalPart;
  return integralPart + "," + fractionalPart;
};
