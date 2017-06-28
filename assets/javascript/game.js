//<script type="text/javascript">

var options = ["DURHAM", "LEE", "MADBURY"];

var Durham = ["D", "U", "R", "H", "A", "M"];

console.log(Durham);
-

var word = options[Math.floor(Math.random() * options.length)];

var guessed = []; //incorrect guesses
//var correctGuess // correct guesses

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

		document.write(guessed); // or guess

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
