import readlineSync from "readline-sync";
import { createQuestion, checkCorrectAnswer } from "./game.js";

export const startBrainGame = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
};

export const startEvenGame = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const { answer, question } = createQuestion(); // создать вопрос

    console.log(question);
    const userAnswer = readlineSync.question("Your answer: "); // получить ответ usera

    const { correctAnswer, isCorrect } = checkCorrectAnswer(answer, userAnswer); // проверить ответ usera
    if (isCorrect) {
      console.log("Correct!");
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export const startCalcGame = () => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
};
