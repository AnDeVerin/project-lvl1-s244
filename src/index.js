import readlineSync from 'readline-sync';

export const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export default (data) => {
  console.log('Welcome to the Brain Games!\n');
  console.log(`${data.title}\n`);
  const userName = getUserName();

  let isResRight;
  for (let i = 0; i < 3; i += 1) {
    const { question, answer } = data.getQuestion();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    isResRight = userAnswer === answer;

    if (isResRight) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (isResRight) {
    console.log(`Congratulations, ${userName}!\n`);
  }
};
