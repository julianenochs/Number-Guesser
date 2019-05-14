var clearButton = document.querySelector('#clear_game');
var gameInputs = document.querySelectorAll('.game_input');
var minRange = document.querySelector('#min_range');
var maxRange = document.querySelector('#max_range');
var firstQ = document.querySelector('#lower_range');
var secondQ = document.querySelector('#upper_range');
var updateButton = document.querySelector('#set_range');
var playerOne = document.querySelector('#challenger_1_name');
var playerTwo = document.querySelector('#challenger_2_name');
var playerOneGuess = document.querySelector('#player_one_guess');
var playerTwoGuess = document.querySelector('#player_two_guess');
var submitButton = document.querySelector('#submit_guess');
var playerOneHead = document.querySelector('#player_one_head');
var playerTwoHead = document.querySelector('#player_two_head');
var guessOne = document.querySelector('#number_one');
var guessTwo = document.querySelector('#number_two');
var tooOne = document.querySelector('#too_one');
var tooTwo = document.querySelector('#too_two');
var boomOne = document.querySelector('#boomOne');
var boomTwo = document.querySelector('#boomTwo');
var randomNumber = 0;
var resetButton = document.querySelector('#reset_game');
var errorMessageOne = document.querySelector('.error0');
var errorMessageTwo = document.querySelector('.error2');

console.log(errorMessageOne);
clearButton.addEventListener('click', clearInput);
updateButton.addEventListener('click', updateNumber);
submitButton.addEventListener('click', runGame);

function updateNumber() {
	validateUpdateButton();
	var input = minRange.value;
	var input_two = maxRange.value;
	firstQ.innerText = input;
	secondQ.innerText = input_two;
	randomNumber = genRandomNumber(input, input_two)
	console.log(randomNumber);
	event.preventDefault();
};

function validateUpdateButton() {
	if (minRange.value === '' || maxRange.value === '') {
	errorMessageOne.classList.add('block');
	} else {
		errorMessageOne.classList.remove('block');
	}
};

function clearInput() {
	for (var i=0; i < gameInputs.length; i++) {
		gameInputs[i].value = '';
	}
};

function runGame() {
	validateInputOne();
	// validateInputTwo();
	playerOneHead.innerText = playerOne.value 
	playerTwoHead.innerText = playerTwo.value;
	guessOne.innerText = playerOneGuess.value;
	guessTwo.innerText = playerTwoGuess.value;
	compareGuess(playerOneGuess.value, tooOne, boomOne);
	compareGuess(playerTwoGuess.value, tooTwo, boomTwo);
};

function validateInputOne() {
	if (playerOne.innerText === '') {
	errorMessageTwo.classList.add('block');
	} else {
		errorMessageTwo.classList.remove('block');
	}
};

// function validateInputTwo() {
// 	if (guessOne.innerText === '') {
// 	errorMessageOne.classList.add('block');
// 	}
// };

function compareGuess(guess, element, boomElement) {
	if (guess < randomNumber) {
		element.innerText = 'low.'
	} else if (guess > randomNumber) {
		element.innerText = 'high.'
	} else {
		boomElement.innerHTML = 'BOOM!'
		element.innerText = ''
	}

};

resetButton.addEventListener('click', function() {
	clearInput();
	player_one_head.innerText = 'Challenger 1 Name';
	player_two_head.innerText = 'Challenger 2 Name';
	guessOne.innerText = '?';
	guessTwo.innerText = '?';
	firstQ.innerText = '?';
	secondQ.innerText = '?';
	resetNumber ();
});

function genRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

function resetNumber() {
	var input = 1;
	var input_two = 100;
	firstQ.innerText = input;
	secondQ.innerText = input_two;
	randomNumber = genRandomNumber(input, input_two);
	console.log(randomNumber);
	event.preventDefault();
};

playerOne.addEventListener('keyup', enableSRC);
playerTwo.addEventListener('keyup', enableSRC);
playerOneGuess.addEventListener('keyup', enableSRC);
playerTwoGuess.addEventListener('keyup', enableSRC);

function enableSRC() {
	event.preventDefault();
	document.getElementById("submit_guess").disabled = false;
	document.getElementById("reset_game").disabled = false;
	document.getElementById("clear_game").disabled = false;
};



