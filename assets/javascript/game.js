//<script type="text/javascript">

var options = ["Durham", "Lee", "Madbury"];

var word = options[Math.floor(Math.random() * options.length)];

var guessed = [];

document.onkeyup = function(event) {

    console.log(word);

		var guess;	

		guess = event.key;

    	console.log(event.key);

    	guessed.push(guess);

		console.log(guessed);

		console.log(guess);

		document.write(guessed); // or guess


	for (var i = 1; i < 10; i++) { //if this for the remaining guesses?

    	

		}
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
