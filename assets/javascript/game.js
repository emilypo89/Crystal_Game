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
	console.log(generatedImageNumberArray);
	numberGenerated = true;
	alert (numberGenerated);
}

if (numberGenerated = true) {
	addNumbers();
	alert("add some numbers");
}





// generate random number on button click of crystal images
function numberGeneration () {
	if (numberGenerated == false){
		$("#crystal1").on("click", function() {
	    // $("#userGuess").html(crystalValue1);
	    console.log(crystalValue1);
		});	

			if (crystalValue1 == generatedNumber1){
				generatedImageNumberArray.push(generatedNumber1);
			}

		$("#crystal2").on("click", function() {
	    // $("#userGuess").html(crystalValue2);
	    console.log(crystalValue2);
		});	

			if (crystalValue2 == generatedNumber2){
				generatedImageNumberArray.push(generatedNumber2);
			}

		$("#crystal3").on("click", function() {
	    // $("#userGuess").html(crystalValue3);
	    console.log(crystalValue3);
		});	

			if (crystalValue3 == generatedNumber3){
				generatedImageNumberArray.push(generatedNumber3);
			}

		$("#crystal4").on("click", function() {
	    // $("#userGuess").html(crystalValue4);
	    console.log(crystalValue4);
		});	

			if (crystalValue4 == generatedNumber4){
				generatedImageNumberArray.push(generatedNumber4);
			}
	}
}	



function addNumbers (){
		if (numberGenerated == true) {
				// alert("I'm working!");
			$(".crystalImage").attr("onclick", function() {
				userTotal = userTotal + generatedImageNumberArray[i];
			});


		$("#userTotal").html(userTotal);

	}

}

// addNumbers();

// console.log(userTotal);
// }

// // for (var i = 0; i < generatedImageNumberArray.length; i++) {
// //    			// userOptions += generatedImageNumberArray[i] << 0;
// // 			// $("#userGuess").html(userOptions);
// //        	}

// for (var i = 0; i < userInputArray.length; i++) {
//    			userTotal += userInputArray[i] << 0;
// 			$("#userTotal").html(userTotal);
//        	}
		   // turn randomValue into an integer
    // push that value into the generatedImageNumberArray


// add the integers in the userGuessArray together
		

// }

	// numberGeneration();


   		
   		// console.log(userTotal);

// 
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

