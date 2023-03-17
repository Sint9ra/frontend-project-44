import play from '../index.js';
import getRandomInteger from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  if (num2 === 0) {
    return num1;
  }
  return findGcd(num2, num1 % num2);
};

const gameGcd = () => {
  const num1 = getRandomInteger(1, 15);
  const num2 = getRandomInteger(1, 15);
  const question = `${num1} ${num2}`;
  const correctAnswer = findGcd(num1, num2);
  return { question, correctAnswer };
};

const result = () => play(task, gameGcd);
export default result;
