import { getRandomInteger } from "./utils.js";

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
