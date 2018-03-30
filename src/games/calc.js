import gameEngine from '../';

export default () => {
  const title = 'What is the result of the expression?';
  const getQuestion = () => {
    const calculate = (x, y, idx) => {
      switch (idx) {
        case 0: return ['*', x * y];
        case 1: return ['+', x + y];
        default: return ['-', x - y];
      }
    };
    const x = Math.floor(Math.random() * Math.floor(10));
    const y = Math.floor(Math.random() * Math.floor(10));
    const idx = Math.floor(Math.random() * Math.floor(3));
    const [operation, result] = calculate(x, y, idx);
    return { question: `${x} ${operation} ${y}`, answer: `${result}` };
  };

  gameEngine({ title, getQuestion });
};
