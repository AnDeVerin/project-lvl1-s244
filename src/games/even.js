import gameEngine from '../';

export default () => {
  const title = 'Answer "yes" if number even otherwise answer "no".';
  const getQuestion = () => {
    const randomNum = Math.floor(Math.random() * Math.floor(100));
    const isEven = (randomNum % 2 === 0);
    return { question: `${randomNum}`, answer: `${isEven ? 'yes' : 'no'}` };
  };
  gameEngine({ title, getQuestion });
};
