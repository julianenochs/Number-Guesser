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
var resetButton = document.querySelector('#reset_game')

clearButton.addEventListener('click', clearInput)

function clearInput() {
	for (var i=0; i < gameInputs.length; i++) {
		gameInputs[i].value = '';
	}
}

updateButton.addEventListener('click', function(event){
	var input = minRange.value;
	var input_two = maxRange.value;
	firstQ.innerText = input;
	secondQ.innerText = input_two;
	randomNumber = genRandomNumber(input, input_two)
	console.log(randomNumber);
	event.preventDefault();
});
	
submitButton.addEventListener('click', function(event){
	playerOneHead.innerText = playerOne.value 
	playerTwoHead.innerText = playerTwo.value;
	guessOne.innerText = playerOneGuess.value;
	guessTwo.innerText = playerTwoGuess.value;
	compareGuess(playerOneGuess.value, tooOne, boomOne);
	compareGuess(playerTwoGuess.value, tooTwo, boomTwo);
	// console.log(typeof(playerOneGuess.value));
	// ** returned as a string
})

function compareGuess(guess, element, boomElement) {
	if (guess < randomNumber) {
		element.innerText = 'low.'
	} else if (guess > randomNumber) {
		element.innerText = 'high.'
	} else {
		boomElement.innerHTML = 'BOOM!'
		element.innerText = ''
	}

}

resetButton.addEventListener('click', function() {
	clearInput();
	player_one_head.innerText = 'Challenger 1 Name';
	player_two_head.innerText = 'Challenger 2 Name';
	guessOne.innerText = '?';
	guessTwo.innerText = '?';
	firstQ.innerText = '?';
	secondQ.innerText = '?';
	genRandomNumber();
});

function genRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
  console.log
}
