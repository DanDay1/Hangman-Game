var options = ["DURHAM", "LEE", "MADBURY"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;

var dashString = [];

var dash = "_";

var guessed = [];

var guess;

var word = options[Math.floor(Math.random() * options.length)];

for (var i = 0; i < word.length; i++) {
    dashString.push(dash);
}

document.onkeyup = function(event) {
	 guessesLeft--;

	
  

    console.log(word);

    guess = event.key;

    guess = guess.toUpperCase();
	guessed.push(guess);
     var divGuessesSoFar = document.getElementById("guessesSoFarDiv").innerHTML = guessed;
    

    console.log(event.key);

    

    console.log(guessed);

    console.log(guess);
    var x;

    for (x = 0; x < word.length; x++) {
       
        if (guess === word[x]) {
            dashString[x] = guess;
        }


        if (dashString === word) {
            win++;
        }

    }

    document.getElementById("dash").innerHTML = dashString;



    for (var i = 0; i < word.length; i++) {

        console.log("the next letter of the word is: " + word[i]);

    }

    var html = "<h2>Hit any key to begin!</h2>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>Guesses Left: " + guessesLeft + "</p>";

        
        document.getElementById("game").innerHTML=html;



}