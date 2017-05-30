// have the computer generate a random number
// have that number display in the "computerGuess" div

$(document).ready(function(){

var userGuessArray = [];
var numberEntered = false;
var userTotal = 0;
var wins = 0;
var losses = 0;

var updateWins = '<p>Wins: ' + wins +'</p>';
var updateLosses = '<p>Losses: ' + losses +'</p>';
$("#scoreStats").html(updateWins + updateLosses);

var randomValue = Math.floor((Math.random() * 12) + 1);

// first click 

// computer generates a number
	var computerGuess = Math.floor((Math.random() * 120) + 1);
		$("#computerGuess").html(computerGuess);
		console.log(computerGuess);

// generate random number on button click of crystal images
function numberGeneration () {
	if (numberEntered = false);
		$(".crystalImages").on("click", function() {
		    $("#userGuess").html(randomValue);
		    console.log(randomValue);


		    // turn randomValue into an integer
		    // push that value into the userGuessArray
			var guess1 = parseInt(randomValue);
				if (randomValue == guess1){
					userGuessArray.push(guess1);
				}
		});
		
		numberEntered = true;
		for (var i = 0; i < userGuessArray.length; i++) {
   			userTotal += userGuessArray[i] << 0;
			$("#userGuess").html(userTotal);
       	}
	}		
	else {
		if (userTotal === computerGuess){
   			wins++;
   			reset();
		}
   		
   		if (userTotal > computerGuess){
   			losses++;
   			reset();
   		}



	}
	// add the integers in the userGuessArray together
		// for (var i = 0; i < userGuessArray.length; i++) {
  //  			userTotal += userGuessArray[i] << 0;
		// 	$("#userGuess").html(userTotal);
  //      	}

   		console.log(userGuessArray);
   		console.log(userTotal);

   		}	
})

		




function reset () {
	userGuessArray = [];
	numberEntered = false;
	userTotal = 0;
}














 });

Contact GitHub API Training Shop Blog About
© 2017 GitHub, Inc. Terms Privacy Security Status Help