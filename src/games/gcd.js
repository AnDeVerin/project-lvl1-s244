import gameEngine from '../';

export default () => {
  const title = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    let a = Math.floor(Math.random() * Math.floor(100));
    let b = Math.floor(Math.random() * Math.floor(100));
    const question = `${a} ${b}`;

    if (a < b) [a, b] = [b, a];
    while (a % b !== 0) {
      [a, b] = [b, a % b];
    }
    return { question, answer: `${b}` };
  };
  gameEngine({ title, getQuestion });
};
