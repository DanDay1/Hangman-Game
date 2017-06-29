//<script type="text/javascript">

var options = ["DURHAM", "LEE", "MADBURY"];

var dashString = ["_", "_", "_", "_", "_", "_"];

var word = options[Math.floor(Math.random() * options.length)];

var guessed = []; 

var wrongGuess = [];

var guess;

document.onkeyup = function(event) {
		//var guess = String.fromCharCode(Event.keyCode).
		//toUpperCase();

		

    console.log(word);

			

		guess = event.key;

		guess = guess.toUpperCase();

    	console.log(event.key);

		guessed.push(guess);

		console.log(guessed);

		console.log(guess);
var x;

for(x = 0; x < word.length; x++) {
	if (guess === word[x]) {
	dashString[x] = guess;
}
	//if (x = word.length && guess != word[x]) {
	//wrongGuess.push(guess);
//}

	
}

		document.write(guessed); 

		document.write("    ");

		document.write(dashString);

		document.write(wrongGuess);



for (var i = 0; i < word.length; i++) {

        console.log("the next letter of the word is: " + word[i]);

// at this point, you need to check if the letter guessed is in the chosen word.

    }

	//for (var i = 1; i < 10; i++) { //if this for the remaining guesses?

    	

		
	}
	
	



//Why doesn't the document write appear in the loop until it ends?

//How to make the correct guess latters in order.

//for (var j = 0; j < favTVshows.length; j++) {



// 	if (word = "Durham") {
// 		document.write("_ _ _ _ _ _");
// 	}

//     //if (word = "Lee") {
//     //	document.write("_ _ _");
//     //}

//     else {document.write ("_ _ _ _ _ _ _");

// }




// </script>
