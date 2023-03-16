import readlineSync from "readline-sync";
import { getUserName } from "../index.js";
import { getRandomInteger } from "../utils.js";

const compute = (firstNumber, secondNumber, sign) => {
  switch (sign) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    default:
      return null;
  }
};

export const createQuestion = () => {
  const firstNumber = getRandomInteger(0, 10);
  const secondNumber = getRandomInteger(0, 10);
  const signs = ["+", "-", "*"];
  const randomSign = signs[getRandomInteger(0, signs.length - 1)];
  const question = `Question: ${firstNumber} ${randomSign} ${secondNumber}`;
  const answer = compute(firstNumber, secondNumber, randomSign);
  return { answer, question };
};

export const start = () => {
  const userName = getUserName("What is the result of the expression?");
  for (let i = 0; i < 3; i += 1) {
    const { answer, question } = createQuestion();
    console.log(question);
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
