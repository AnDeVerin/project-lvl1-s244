export default () => {
  const data = [];
  for (let i = 0; i < 3; i += 1) {
    const randomNum = Math.floor(Math.random() * Math.floor(100));
    const isEven = (randomNum % 2 === 0);

    data.push({
      question: `${randomNum}`,
      answer: `${isEven ? 'yes' : 'no'}`,
    });
  }
  return {
    title: 'Answer "yes" if number even otherwise answer "no".',
    data,
  };
};
