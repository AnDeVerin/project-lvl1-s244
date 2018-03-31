import gameEngine from '../';

export default () => {
  const title = 'Find the greatest common divisor of given numbers.';
  const getQuestion = () => {
    const a = Math.floor(Math.random() * Math.floor(100));
    const b = Math.floor(Math.random() * Math.floor(100));
    const question = `${a} ${b}`;

    const gcd = (x0, y0) => {
      let x = x0;
      let y = y0;
      if (x < y) [x, y] = [y, x];
      while (x % y !== 0) {
        [x, y] = [y, x % y];
      }
      return y;
    };

    return { question, answer: `${gcd(a, b)}` };
  };
  gameEngine({ title, getQuestion });
};
