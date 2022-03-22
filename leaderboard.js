const name = window.alert("name");
const score = guess

async function addScore() {
  await ADD(name.value, score.value);
  DISPLAY();
  name.value = '';
  score.value = '';
  name.focus();
}

name.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') score.focus();
});

score.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') addScore();
});

submit.addEventListener('click', async () => {
  addScore();
});

refresh.addEventListener('click', () => {
  DISPLAY();
});

window.addEventListener('DOMContentLoaded', () => {
  DISPLAY();
});
