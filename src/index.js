import readlineSync from 'readline-sync';

export const greetUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

const askAndCheck = (userName) => {
  const randomNum = Math.floor(Math.random() * Math.floor(100));
  const isEven = (randomNum % 2 === 0);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');

  const isAnswerRight = (isEven && answer === 'yes') || (!isEven && answer === 'no');
  if (isAnswerRight) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
  return isAnswerRight;
};

export const brainEvenGame = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = greetUser();
  let result;
  for (let i = 0; i < 3; i += 1) {
    result = askAndCheck(userName);
    if (!result) break;
  }

  if (result) {
    console.log(`Congratulations, ${userName}!\n`);
  }
};
