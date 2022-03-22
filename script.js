	var y = Math.floor(Math.random() * 100 + 1);
	var guess = 1;
	document.getElementById("submitguess").onclick = function(){
	
var x = document.getElementById("guessField").value;

if(x == y)
{	
	alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
			+ guess + " GUESSES ");
	const name = window.prompt("nickname");
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

}
else if(x > y)
{	
	guess++;
	alert("LOWER");
}
else
{
	guess++;
	alert("HIGHER")
}
}
	}
