import gameEngine from '../';

export default () => {
  const title = 'What number is missing in this progression?';
  const getQuestion = () => {
    const start = Math.floor(Math.random() * Math.floor(10));
    const step = Math.floor(Math.random() * Math.floor(10)) + 1;
    const randomIdx = Math.floor(Math.random() * Math.floor(10));
    const numArray = [];

    for (let i = 1; i <= 10; i += 1) {
      numArray.push(start + (step * i));
    }

    const answer = numArray[randomIdx];
    numArray[randomIdx] = '..';
    const question = numArray.join(' ');

    return { question, answer: `${answer}` };
  };
  gameEngine({ title, getQuestion });
};
