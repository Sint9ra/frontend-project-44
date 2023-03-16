import readlineSync from "readline-sync";
import { getRandomInteger } from "../utils.js";
import { getUserName } from "../index.js";

const makeProgression = (startNum, length, step) => {
  const numArr = [];
  for (let i = 0; i <= length; i += 1) {
    numArr.push(startNum + i * step);
  }
  return numArr;
};

const game = () => {
  const startNum = getRandomInteger(1, 50);
  const step = getRandomInteger(1, 5);
  const length = 10;

  const result = makeProgression(startNum, length, step);
  const answer = result[step];
  result[step] = "..";
  const question = result.join(" ");
  return { question, answer };
};

const start = () => {
  const userName = getUserName("What number is missing in the progression?");
  for (let i = 0; i < 3; i += 1) {
    const { answer, question } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer === String(answer)) {
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
