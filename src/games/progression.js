import play from '../index.js';
import getRandomInteger from '../utils.js';

const makeProgression = (startNum, length, step) => {
  const numArr = [];
  for (let i = 0; i <= length; i += 1) {
    numArr.push(startNum + i * step);
  }
  return numArr;
};

const task = 'What number is missing in the progression?';

const game = () => {
  const startNum = getRandomInteger(1, 50);
  const step = getRandomInteger(1, 5);
  const length = 10;

  const result = makeProgression(startNum, length, step);
  const correctAnswer = result[step];
  result[step] = '..';
  const question = result.join(' ');
  return { question, correctAnswer };
};

const res = () => play(task, game);
export default res;
