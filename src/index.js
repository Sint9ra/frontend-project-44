import readlineSync from 'readline-sync';

const play = (task, game) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May i have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < 3; i += 1) {
    const { correctAnswer, question } = game();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === String(correctAnswer)) {
      console.log('Correct!');
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`,
      );
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default play;
