// have the computer generate a random number
// have that number display in the "computerGuess" div

$(document).ready(function(){

var userGuessArray = [];
var numberGenerated = false;
var userTotal = 0;
var wins = 0;
var losses = 0;

var updateWins = '<p>Wins: ' + wins +'</p>';
var updateLosses = '<p>Losses: ' + losses +'</p>';
$("#scoreStats").html(updateWins + updateLosses);

var crystalValue1 = Math.floor((Math.random() * 12) + 1);
var crystalValue2 = Math.floor((Math.random() * 12) + 1);
var crystalValue3 = Math.floor((Math.random() * 12) + 1);
var crystalValue4 = Math.floor((Math.random() * 12) + 1);

var generatedNumber1 = parseInt(crystalValue1);
		

	var guess2 = parseInt(crystalValue2);
		if (crystalValue2 == guess2){
			userGuessArray.push(guess2);
		}

	var guess3 = parseInt(crystalValue3);
		if (crystalValue3 == guess3){
			userGuessArray.push(guess2);
		}

	var guess4 = parseInt(crystalValue4);
		if (crystalValue4 == guess4){
			userGuessArray.push(guess4);
		}

// first click 



// computer generates a number
	var computerGuess = Math.floor((Math.random() * 120) + 1);
		$("#computerGuess").html(computerGuess);
		console.log(computerGuess);


	// 	function makeInteger () {
	// 		var guess1 = parseInt(randomValue);
	// 			if (randomValue == guess1){
	// 				userGuessArray.push(guess1);
	// 				numberEntered = true;
	// 			}
	// 		for (var i = 0; i < userGuessArray.length; i++) {
 //   			userTotal += userGuessArray[i] << 0;
	// 		$("#userGuess").html(userTotal);
	// 		}
	// 	}

// generate random number on button click of crystal images
function numberGeneration () {
	if (numberGenerated == false){
		$("#crystal1").on("click", function() {
	      
	    // var randomValue = Math.floor((Math.random() * 12) + 1);
	    $("#userGuess").html(crystalValue1);
	    console.log(crystalValue1);
	    // numberGenerated = true;
		});	

		if (crystalValue1 == generatedNumber1){
			userGuessArray.push(generatedNumber1);
		}

		$("#crystal2").on("click", function() {
	      
	    // var randomValue = Math.floor((Math.random() * 12) + 1);
	    $("#userGuess").html(crystalValue2);
	    console.log(crystalValue2);
	    // numberGenerated = true;
		});	

		$("#crystal3").on("click", function() {
	      
	    // var randomValue = Math.floor((Math.random() * 12) + 1);
	    $("#userGuess").html(crystalValue3);
	    console.log(crystalValue3);
	    // numberGenerated = true;
		});	

		$("#crystal4").on("click", function() {
	      
	    // var randomValue = Math.floor((Math.random() * 12) + 1);
	    $("#userGuess").html(crystalValue4);
	    console.log(crystalValue4);
		});	

		numberGenerated = true;
}

		   // turn randomValue into an integer
    // push that value into the userGuessArray
	var guess1 = parseInt(crystalValue1);
		if (crystalValue1 == guess1){
			userGuessArray.push(guess1);
		}

	var guess2 = parseInt(crystalValue2);
		if (crystalValue2 == guess2){
			userGuessArray.push(guess2);
		}

	var guess3 = parseInt(crystalValue3);
		if (crystalValue3 == guess3){
			userGuessArray.push(guess2);
		}

	var guess4 = parseInt(crystalValue4);
		if (crystalValue4 == guess4){
			userGuessArray.push(guess4);
		}

// add the integers in the userGuessArray together
		for (var i = 0; i < userGuessArray.length; i++) {
   			userTotal += userGuessArray[i] << 0;
			$("#userGuess").html(userTotal);
       	}

}

	numberGeneration();


   		console.log(userGuessArray);
   		console.log(userTotal);


 
 
	// 	function secondClicks() {
	// 		if (numberEntered == true) {
	// 			$(".crystalImages").on("click", function (){
	// 				randomValue = guess1;
	// 			})
	// 		}
	// 	}
	// secondClicks ();

	

   		if (userTotal === computerGuess){
   			wins++;
   			reset();
		}
   		
   		if (userTotal > computerGuess){
   			losses++;
   			reset();
   		}
		
// });

		




function reset () {
	userGuessArray = [];
	numberEntered = false;
	userTotal = 0;
}














 });

