import readlineSync from "readline-sync";
import { getRandomInteger } from "../utils.js";
import { getUserName } from "../index.js";

export const createQuestion = () => {
  const number = getRandomInteger(0, 100);
  const question = `Question: ${number}`;

  return { answer: number, question };
};

export const checkCorrectAnswer = (answer, userAnswer) => {
  const correctAnswer = answer % 2 === 0 ? "yes" : "no";
  return {
    isCorrect: userAnswer.toLowerCase() === correctAnswer,
    correctAnswer,
  };
};

export const startEvenGame = () => {
  const userName = getUserName('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const { answer, question } = createQuestion(); // создать вопрос

    console.log(question);
    const userAnswer = readlineSync.question("Your answer: "); // получить ответ usera

    const { correctAnswer, isCorrect } = checkCorrectAnswer(answer, userAnswer); // проверить ответ usera
    if (isCorrect) {
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
