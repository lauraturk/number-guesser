// define global variables
var guessInput = document.querySelectorAll("#guess-input")[0];
var guessButton = document.querySelector("#guess-button");
var lastGuess = document.querySelector(".your-guess-number");
var resetButton = document.querySelector('#reset-button');
var clearButton = document.querySelector('#clear-button');
var guessLevel = document.querySelector('#guess-level');
var ranNum;
var ranMin;
var ranMax;
var newNumber;
var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');
var setButton = document.querySelector('#set-button');


//create a random number
function randomNumber (ranMin, ranMax) {
	ranNum = Math.floor(Math.random() * (ranMax - ranMin + 1) + ranMin);
	console.log('random number is ', ranNum);
	}

randomNumber(ranMin, ranMax);

//feedback functions
function tooHigh(){
	guessLevel.innerText = "That is too high";
}

function tooLow() {
	guessLevel.innerText = "That is too low";
}

function justRight(){
	guessLevel.innerText = "BOOM! Let's make this harder. New min is " + ranMin + " new max is " + ranMax + ". Click Reset to continue.";
}

function notANumber(){
	lastGuess.innerText = "NOPE";
	guessLevel.innerText = "Use a number between " + ranMin + " and " + ranMax;
}
//compare guess number to random number
function compareNumber(newNum, ranNum) {
	if (newNumber > ranMax){
		console.log('can you hear me?')
		notANumber();
	} else if (newNumber < ranMin){
		notANumber();
	} else if (newNum < ranNum) {
		console.log('too low');
 	 	tooLow()
 	} else if (newNum > ranNum) {
		console.log('too high');
		tooHigh()
 	} else if (newNum === ranNum){
		console.log('yep');
		ranMax += 10;
		ranMin -= 11;
		justRight()
	} else if (newNum.toString() === "NaN") {
		notANumber();
	}
}

//event listener for initializing min max and random number
setButton.addEventListener('click', function(){
	ranMin = parseInt(minInput.value, 10);
	ranMax = parseInt(maxInput.value,10);
	// thresholdSet();
	console.log(ranMin, ranMax);
	randomNumber(ranMin, ranMax);
})

//event listener for enabling buttons
guessInput.addEventListener('keyup',function (){
	guessButton.disabled=false;
});

//event listener for comparing numbers
guessButton.addEventListener('click', function (){
	newNumber = parseInt(guessInput.value, 10);
	lastGuess.innerText = newNumber;
	compareNumber(newNumber, ranNum);
	clearButton.disabled=false;
	resetButton.disabled=false;
	guessButton.disabled=true;
});

// clear the input field when clear button is clicked
clearButton.addEventListener('click', function(){
	guessInput.value = "";
	minInput.value = "";
	maxInput.value = "";
	clearButton.disabled=true;
})

// reset the form when reset button is clicked
resetButton.addEventListener('click',function () {
	guessInput.value = "";
	randomNumber(ranMin, ranMax);
	guessLevel.innerText = "";
	lastGuess.innerText= "";
});
