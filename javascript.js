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
})


function compareGuess(guess, element, boomElement) {
	if (guess < randomNumber) {
		element.innerText = 'low.'
	} else if (guess > randomNumber) {
		element.innerText = 'high.'
	} else {
		boomElement.innerHTML = 'BOOM!'
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


// ---- these functions below don't work, we can generate a random number, but not between two variables.

// updateButton.addEventListener('click', updateRange);

function genRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min
  console.log
}

// function updateRange() {
// 	 = parseInt(minRange.value);
// 	 = parseInt(maxRange.value);
// 	firstQ.innerText = ;
// 	secondQ.innerText = ;
// 	var winNum = genRandomNumber(min = , max = );
// 	console.log(winNum);
// }


// function genRandomNumber(min, max) {
//   return Math.floor(Math.random() * (maxRange.value - minRange.value +1)) + min;
// }
// function genRandomNumber(num1, num2) {
//    return Math.floor(Math.random() * (maxRange.value - minRange.value +1)) + maxRange.value;
// }
 
// window.onLoad = genRandomNumber();

// parseInt for minRange, which is currently a string
// var to parseInt to declare minRange 

// function updateRange() {
// 	lowRange = parseInt(minValueInput.value);
// 	highRange = parseInt(maxValueInput.value);
// 	minValueOutput.innerText = lowRange;
// 	maxValueOutput.innerText = highRange;
// 	winNum = generateRandomNumber(lowRange, highRange);
// 		console.log(winNum);
// }
