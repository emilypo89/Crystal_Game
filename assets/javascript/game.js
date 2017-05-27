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


var computerGuess = Math.floor((Math.random() * 120) + 19);
	$("#computerGuess").html(computerGuess);
	console.log(computerGuess);

// generate random number on button click of crystal images

$(".crystalImages").on("click", function() {
      
    var randomValue = Math.floor((Math.random() * 12) + 1);
    $("#userGuess").html(randomValue);
    console.log(randomValue);

       	var guess1 = parseInt(randomValue);
       		if (randomValue === guess1){
       			userGuessArray.push(randomValue);
       			numberEntered = true;
       			for (var i = 0; i < userGuessArray.length; i++) {
   					userTotal += userGuessArray[i] << 0;
				$("#userGuess").html(userTotal);
				}
       		}

   		console.log(userGuessArray);
   		console.log(userTotal);

   		if (userTotal === computerGuess){
   			wins++;
   			reset();
		}
   		
   		if (userTotal > computerGuess){
   			losses++;
   			reset();
   		}
      });

	// if (numberEntered === true){
 //       			var randomValue2 = (Math.floor(Math.random()*13)+1);
 //       			addedValue();
 //       			numberEntered = false;
 //    			$("#userGuess").html(addedValue);
 //    			console.log(addedValue);
 //       		}

function reset () {
	userGuessArray = [];
	numberEntered = false;
	userTotal = 0;
}














 });

