import gameEngine from '../';

export default () => {
  const title = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const a = Math.floor(Math.random() * Math.floor(100));
    const b = Math.floor(Math.random() * Math.floor(100));
    const question = `${a} ${b}`;

    const gcd = (numStr) => {
      let [x, y] = numStr.split(' ');
      x = Number(x);
      y = Number(y);
      if (x < y) [x, y] = [y, x];
      while (x % y !== 0) {
        [x, y] = [y, x % y];
      }
      return y;
    };

    return { question, answer: `${gcd(question)}` };
  };
  gameEngine({ title, getQuestion });
};
