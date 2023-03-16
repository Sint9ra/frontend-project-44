import readlineSync from "readline-sync";

export const getUserName = (action) => {
  const userName = readlineSync.question("May I have your name? ");
  console.log(`Hello, ${userName}!`);
  if (action) {
    console.log(action);
  }
  return userName;
};
