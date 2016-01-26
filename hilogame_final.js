
function playGame() {
  var randomNumber = Math.floor(Math.random()*5) + 1;
  var userGuess;
  do {
    userGuess = prompt("Input guess: ");
    if (userGuess > randomNumber) {
      alert("Too high! Try again");
    } else if (userGuess < randomNumber) {
      alert("Too low! Try again");
    } else {
       alert("congrats!");
    }

  }
   while (userGuess != randomNumber);

}
