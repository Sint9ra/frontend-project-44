import readlineSync from "readline-sync";
import getRandomInteger from "../utils.js";
import getUserName from "../index.js";

const checkPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const makeRound = () => {
  const number = getRandomInteger(2, 50);
  const question = `${number}`;
  const correctAnswer = checkPrime(number) ? "yes" : "no";

  return { question, correctAnswer };
};

const start = () => {
  const userName = getUserName('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const { correctAnswer, question } = makeRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer === String(correctAnswer)) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default start;
