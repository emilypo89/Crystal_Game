// have the computer generate a random number
// have that number display in the "computerGuess" div

$(document).ready(function(){

var generatedImageNumberArray = [];
var	userInputArray = [];
var numberGenerated = false;
var userTotal = 0;
var userOptions = 0;
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
var generatedNumber2 = parseInt(crystalValue2);
var generatedNumber3 = parseInt(crystalValue3);
var generatedNumber4 = parseInt(crystalValue4);
		

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

if (numberGenerated == false) {
	numberGeneration();
	numberGenerated = true;
}

else {
	addNumbers();
}
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
				generatedImageNumberArray.push(generatedNumber1);
			}

		$("#crystal2").on("click", function() {
	      
	    // var randomValue = Math.floor((Math.random() * 12) + 1);
	    $("#userGuess").html(crystalValue2);
	    console.log(crystalValue2);
	    // numberGenerated = true;
		});	

			if (crystalValue2 == generatedNumber2){
				generatedImageNumberArray.push(generatedNumber2);
			}

		$("#crystal3").on("click", function() {
	      
	    // var randomValue = Math.floor((Math.random() * 12) + 1);
	    $("#userGuess").html(crystalValue3);
	    console.log(crystalValue3);
	    // numberGenerated = true;
		});	

			if (crystalValue3 == generatedNumber3){
				generatedImageNumberArray.push(generatedNumber3);
			}

		$("#crystal4").on("click", function() {
	      
	    // var randomValue = Math.floor((Math.random() * 12) + 1);
	    $("#userGuess").html(crystalValue4);
	    console.log(crystalValue4);
		});	

			if (crystalValue4 == generatedNumber4){
				generatedImageNumberArray.push(generatedNumber4);
			}

		// numberGenerated = true;

	}

	function addNumbers() {
		$("#crystal1").on("click", function() {
			// userTotal = userTotal + generatedImageNumberArray[0];
			userInputArray.push(generatedImageNumberArray[0]);
			// $("#userGuess").html(userTotal);
		});

		$("#crystal2").on("click", function() {
			// userTotal = userTotal + generatedImageNumberArray[1];
			userInputArray.push(generatedImageNumberArray[1]);
			// $("#userGuess").html(userTotal);
		});

		$("#crystal3").on("click", function() {
			// userTotal = userTotal + generatedImageNumberArray[2];
			userInputArray.push(generatedImageNumberArray[2]);
			// $("#userGuess").html(userTotal);
		});

		$("#crystal4").on("click", function() {
			// userTotal = userTotal + generatedImageNumberArray[3];
			userInputArray.push(generatedImageNumberArray[3]);
			// $("#userGuess").html(userTotal);
		});

		// $("#userGuess").html(userTotal);


}

// addNumbers();

console.log(userTotal);
}

for (var i = 0; i < generatedImageNumberArray.length; i++) {
   			// userOptions += generatedImageNumberArray[i] << 0;
			// $("#userGuess").html(userOptions);
       	}

for (var i = 0; i < userInputArray.length; i++) {
   			userTotal += userInputArray[i] << 0;
			$("#userGuess").html(userTotal);
       	}
		   // turn randomValue into an integer
    // push that value into the generatedImageNumberArray


// add the integers in the userGuessArray together
		

// }

	// numberGeneration();


   		console.log(generatedImageNumberArray);
   		// console.log(userTotal);

// function addNumbers() {
// 		$("#crystal1").on("click", function() {
// 			userTotal = userTotal + generatedImageNumberArray[0];
// 			// $("#userGuess").html(userTotal);
// 		});

// 		$("#crystal2").on("click", function() {
// 			userTotal = userTotal + generatedImageNumberArray[1];
// 			// $("#userGuess").html(userTotal);
// 		});

// 		$("#crystal3").on("click", function() {
// 			userTotal = userTotal + generatedImageNumberArray[2];
// 			// $("#userGuess").html(userTotal);
// 		});

// 		$("#crystal4").on("click", function() {
// 			userTotal = userTotal + generatedImageNumberArray[3];
// 			// $("#userGuess").html(userTotal);
// 		});

// 		$("#userGuess").html(userTotal);

// 		$("#userGuess").html("reached the total part");
// }

// // addNumbers();

// console.log(userTotal);
	

   		if (userTotal === computerGuess){
   			wins++;
   			reset();
		}
   		
   		if (userTotal > computerGuess){
   			losses++;
   			reset();
   		}


	
function reset () {
	userGuessArray = [];
	numberEntered = false;
	userTotal = 0;
}



 });

