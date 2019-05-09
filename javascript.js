var clearButton = document.querySelector('#clear_game');
var gameInputs = document.querySelectorAll('.game_input');
	clearButton.addEventListener('click', clearInput)

	function clearInput() {
		for (var i=0; i < gameInputs.length; i++) {
			gameInputs[i].value = '';
		}

	}

var minRange = document.querySelector('#min_range');
var maxRange = document.querySelector('#max_range');
var firstQ = document.querySelector('#lower_range');
var secondQ = document.querySelector('#upper_range');
updateButton = document.querySelector('#set_range');
	

updateButton.addEventListener('click', function(event){
	var input = minRange.value;
	var input_two = maxRange.value;
	firstQ.innerText = input;
	secondQ.innerText = input_two;
	event.preventDefault();
});




// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

