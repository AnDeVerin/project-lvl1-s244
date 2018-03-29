import readlineSync from 'readline-sync';

const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);
  return userName;
};

export default (getGameData) => {
  console.log('Welcome to the Brain Games!\n');
  const userName = getUserName();
  if (!getGameData) return;

  const game = getGameData();
  console.log(`${game.title}\n`);

  let isResRight;
  for (let i = 0, l = game.data.length; i < l; i += 1) {
    console.log(`Question: ${game.data[i].question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    isResRight = userAnswer === game.data[i].answer;

    if (isResRight) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${game.data[i].answer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (isResRight) {
    console.log(`Congratulations, ${userName}!\n`);
  }
};
