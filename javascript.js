var clearButton = document.querySelector('#clear_game');
var gameInputs = document.querySelectorAll('.game_input');
	clearButton.addEventListener('click', clearInput)

	function clearInput() {
		for (var i=0; i < gameInputs.length; i++) {
			gameInputs[i].value = '';
		}

	}

// function clearInput() {  
//    clearButton.getElementById('#clear_game').value = "";
//    }
// // ^^ this button actually just refreshes the page - prob needs a new (fun)ction
// // but hard to say since we haven't got a random number generator yet.

// submitGuesses = function(){
//     document.getElementById("#challenger_1_guess").submit();
//     document.getElementById("#challeneger_2_guess").submit();
// }

// var minInt = document.querySelector()

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }

// Totally unsure if these will work so I'm leaving
// comments in the HTML where JS 'links' are 


// 