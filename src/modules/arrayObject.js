const scoredisplay = document.querySelector('.scores');

export const displayScores = (allMembers) => {
  const allUsers = (allMembers.result);
  let items = '';
  allUsers.forEach((allUsers, index) => {
    items += `<p class="${index % 2 !== 0 ? 'item' : 'item1'}">${allUsers.user}:<span> ${allUsers.score}</span></p>`;
    scoredisplay.innerHTML = items;
  });
};

export default displayScores;