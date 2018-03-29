export default () => {
  const data = [];
  const calculate = (x, y, idx) => {
    switch (idx) {
      case 0: return ['*', x * y];
      case 1: return ['+', x + y];
      default: return ['-', x - y];
    }
  };

  for (let i = 0; i < 3; i += 1) {
    const x = Math.floor(Math.random() * Math.floor(10));
    const y = Math.floor(Math.random() * Math.floor(10));
    const idx = Math.floor(Math.random() * Math.floor(3));

    const [operation, result] = calculate(x, y, idx);
    data.push({
      question: `${x} ${operation} ${y}`,
      answer: `${result}`,
    });
  }

  return {
    title: 'What is the result of the expression?',
    data,
  };
};
