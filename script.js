	var z = 3
	if(z == 3){
	var z = 2;
	var y = Math.floor(Math.random() * 100 + 1);
	var guess = 1;
	document.getElementById("submitguess").onclick = function(){
	
var x = document.getElementById("guessField").value;

if(x == y)
{	
	alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
			+ guess + " GUESSES ");
	var z = 3;
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
	}
