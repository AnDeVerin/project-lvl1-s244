import gameEngine from '../';

export default () => {
  const title = 'Balance the given number.';
  const getQuestion = () => {
    const question = Math.floor(Math.random() * Math.floor(1000)) + 100;

    const balance = (num) => {
      const sortedChars = String(num).split('').sort();
      const first = Number(sortedChars[0]);
      const last = Number(sortedChars[sortedChars.length - 1]);

      if (last - first > 1) {
        sortedChars[0] = first + 1;
        sortedChars[sortedChars.length - 1] = last - 1;
        return balance(sortedChars.join(''));
      }
      return sortedChars.join('');
    };
    return { question, answer: `${balance(question)}` };
  };

  gameEngine({ title, getQuestion });
};
