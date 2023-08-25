export const capitalize = (string) => {
  return string.toString().charAt(0).toUpperCase() + string.toString().slice(1);
};

export const formatPrice = (string) => {
  const number = +string;
  if (number % 1 === 0) {
    const length = string.toString().length + 3;
    return string.toString().padEnd(length, ".00");
  } else {
    if (string.toString().indexOf(".") === string.toString().length - 2) {
      const length = string.toString().length + 1;
      return string.toString().padEnd(length, "0");
    }
  }
  return string;
};

export const isNumeric = (value) => {
  return /^-?\d+$/.test(value);
};

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 100000);
};
