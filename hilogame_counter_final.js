function playGame() {
  var randomNumber = Math.floor(Math.random()*10) + 1;
  var userGuess;
  var timesGuessed = 6;
  do {
    userGuess = prompt("Input guess: ");
    if (userGuess > randomNumber) {
      alert("Too high! Try again " + timesGuessed + " tries left");
    } else if (userGuess < randomNumber) {
      alert("Too low! Try again " + timesGuessed + " tries left");
    }else{
         alert("congrats!");
    };
    if (timesGuessed === 0) {
    alert("Too many guesses! Sorry!");
  }
  timesGuessed = timesGuessed - 1;
} while(userGuess != randomNumber && timesGuessed >= 0);

}
