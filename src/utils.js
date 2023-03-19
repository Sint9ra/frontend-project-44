const getRandomInteger = (min = 0, max = 100) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

export default getRandomInteger;
