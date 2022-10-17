export const scores = [
  {
    name: 'kaweesi',
    score: 75,
  },
  {
    name: 'henry',
    score: 60,
  },
  {
    name: 'stanley',
    score: 80,
  },
  {
    name: 'william',
    score: 65,
  },
  {
    name: 'kevin',
    score: 90,
  },
  {
    name: 'daniel',
    score: 33,
  },
];
export const displayScores = (scores) => {
  const marks = document.querySelector('.scores');
  scores.forEach((score, index) => {
    marks.innerHTML += `  <p class="${index % 2 !== 0 ? 'item' : 'item1'}">${score.name}:<span> ${score.score}</span></p>`;
  });
};