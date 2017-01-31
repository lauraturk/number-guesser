var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-button");
var lastGuess = document.querySelector(".your-guess-number");

guessButton.addEventListener('click', function (){
	var newNumber = guessInput.value;
	lastGuess.innerText = newNumber;
})
