import play from '../index.js';
import getRandomInteger from '../utils.js';

const task = 'What is the result of the expression?';

const compute = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

const getData = () => {
  const firstNumber = getRandomInteger(0, 10);
  const secondNumber = getRandomInteger(0, 10);
  const signs = ['+', '-', '*'];
  const randomSign = signs[getRandomInteger(0, signs.length - 1)];
  const question = `Question: ${firstNumber} ${randomSign} ${secondNumber}`;
  const correctAnswer = compute(firstNumber, secondNumber, randomSign);
  return { correctAnswer, question };
};

export default () => play(task, getData);
