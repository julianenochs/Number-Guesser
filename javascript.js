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
var submitGuessAlert = document.querySelector('#submit_alert');
var rightSideContent = document.querySelector('.right');

clearButton.addEventListener('click', clearInput);
updateButton.addEventListener('click', updateNumber);


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
	submitGuessAlert.innerText = 'Please fill out all fields';
	} else {
	submitGuessAlert.innerText = '';
	}

};

function clearInput() {
	for (var i=0; i < gameInputs.length; i++) {
		gameInputs[i].value = '';
	}
};

submitButton.addEventListener('click', function(event){
  console.log(event)
  debugger;
	playerOneHead.innerText = playerOne.value 
	playerTwoHead.innerText = playerTwo.value;
	guessOne.innerText = playerOneGuess.value;
	guessTwo.innerText = playerTwoGuess.value;
	compareGuess(playerOneGuess.value, playerOne.value, tooOne, boomOne);
	compareGuess(playerTwoGuess.value, playerTwo.value, tooTwo, boomTwo);
});

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
	disableRC();
};

function disableRC() {
	if (playerOne.value === '' && playerTwo.value === '' && playerOneGuess.value === '' && playerTwoGuess.value === '') {
	document.getElementById("reset_game").disabled = true;
	document.getElementById("clear_game").disabled = true;
	}
}

function compareGuess(guess, name, element, boomElement) {
	if (guess < randomNumber) {
		element.innerText = 'low.'
	} else if (guess > randomNumber) {
		element.innerText = 'high.'
	} else {
		boomElement.innerHTML = 'BOOM!';
		element.innerText = '';
		rightSideContent.insertAdjacentHTML('afterbegin', `<section class="card_1">
  <div class="top_of_card">
    <p class="challenger_card_name">
    <p class="challenger_card_name"><span class="bold">${playerOneHead.innerText}</span> <span class="vs">vs</span> <span class="bold">${playerTwoHead.innerText}</span>
  </div>
  <div class="middle_of_card">
    <p class="winner_name bold">
    ${name}
    </p>
    <p class="winner">
      WINNER
    </p>
  </div>
  <div class="bottom_of_card">
    <p class="bottom_card_guess">
      <span class="bold">
      </span>
      	GUESSES
    </p> 
    <p class="bottom_card_time">
      <span class="bold">
      </span>
        MINUTES
    </p>
    <div class="bottom_card_image"><img class="x_button" src="https://www.freeiconspng.com/uploads/white-close-button-png-16.png"><div>
  </div>
</section>`) };
	};

  rightSideContent.addEventListener('click', function() {
    console.log('Hello');
  })