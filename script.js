// define global variables
var guessInput = document.getElementById("guess-input");
var guessButton = document.getElementById("guess-button");
var lastGuess = document.querySelector(".your-guess-number");
var ranNum;
var ranMin = 1;
var ranMax = 100;
var newNumber;




// guess input to h1 and check against random number change text to say too high or too low
function randomNumber (ranMin, ranMax) {
	ranNum = Math.floor(Math.random() * (ranMax - ranMin + 1) + ranMin);
	console.log('random number is ', ranNum);
	return ranNum;
	}

randomNumber(ranMin, ranMax);

guessButton.addEventListener('click', function (){
	newNumber = parseInt(guessInput.value, 10);
	lastGuess.innerText = newNumber;
	compareNumber(newNumber, ranNum);
});

function tooHigh(){
	document.getElementById('guess-level').innerText = "That is too high";
}

function tooLow() {
	document.getElementById('guess-level').innerText = "That is too low";
}

function justRight(){
	document.getElementById('guess-level').innerText = "BOOM!";
}

function compareNumber(newNum, ranNum) {
	if (newNum < ranNum) {
		console.log('too low');
 	 	tooLow()
 	} else if (newNum > ranNum) {
		console.log('too high');
	// } else {
	// 	alert("that's not a number");
	// }

		tooHigh()
 	} else if (newNum === ranNum){
		console.log('yep');

 		justRight()}
	}

	// else here
// clear the input field when clear button is clicked
var clearButton = document.getElementById('clear-button');

clearButton.addEventListener('click', function(){
	document.getElementById('guess-input').value = "";
})

// reset the form when reset button is clicked
var resetButton = document.getElementById('reset-button')

resetButton.addEventListener('click',function () {
	document.getElementById('guess-input').value = "";
	randomNumber(ranMin, ranMax);
	document.getElementById('guess-level').innerText = "";
	lastGuess.innerText= "";
});

// when onkeyup in input, enable guess button and verify it is a number
// !Nan
//typeof
