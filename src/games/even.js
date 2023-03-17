import play from '../index.js';
import getRandomInteger from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const game = () => {
  const question = getRandomInteger(0, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const result = () => play(task, game);
export default result;
