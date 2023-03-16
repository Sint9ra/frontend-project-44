import readlineSync from "readline-sync";
import getRandomInteger from "../utils.js";
import getUserName from "../index.js";

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
  const answer = findGcd(num1, num2);
  return { question, answer };
};

const start = () => {
  const userName = getUserName("Find the greatest common divisor of given numbers.");
  for (let i = 0; i < 3; i += 1) {
    const { answer, question } = gameGcd();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer === answer.toString()) {
      console.log("Correct!");
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'. \nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default start;
