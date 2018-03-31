import gameEngine from '../';

export default () => {
  const title = 'Is this number prime?';
  const getQuestion = () => {
    const question = Math.floor(Math.random() * Math.floor(100));

    const isPrime = (num) => {
      if (num < 2) return false;

      for (let i = 2; i <= num / 2; i += 1) {
        if (num % i === 0) return false;
      }
      return true;
    };

    return { question, answer: isPrime(question) ? 'yes' : 'no' };
  };
  gameEngine({ title, getQuestion });
};
