<<<<<<< HEAD
// Generate a random 4-digit code as a string
const secretCode = Math.floor(1000 + Math.random() * 9000).toString();

// Function to check user's guess
function checkGuess(guess) {
  // Convert to string if it's a number
  guess = guess.toString();

  // Check length
  if (guess.length > 4) {
    console.error("Error: Your guess is too long. Must be exactly 4 digits.");
  } else if (guess.length < 3) {
    console.error("Error: Your guess is too short. Must be at least 3 digits.");
  } else if (guess === secretCode) {
    console.log("Congratulations! You cracked the code!");
  } else {
    console.log("Incorrect. Try again.");
  }
}

// Example usage:
checkGuess("1234"); // Replace this with user input in your HTML/app integration

=======
const code = 2300; // NUMBER
let userGuess = prompt("Guess the 4 digit code");
userGuess = parseInt(userGuess); 


if (userGuess === code) {
    // if user guesses correctly
    console.log("Congrats!")
} else if (userGuess >= 10000) {
    // if user enters more than 4 digits
    console.log("Too many digits!");
} else if (userGuess <= 999) {
    // if user enters less than 4 digits
    console.log("Not enough digits");
} else if (isNaN(userGuess)){
    // isNaN is true if the value is not a number, if it's true, console.log "Not a number"
    console.log("Not a number!");
} else {
    // right number of digits but not correct
    console.log("Not correct, sorry!");
}
>>>>>>> 33b2b9cd17710b8470656fb8668c99edacd1f107
