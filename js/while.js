
// ===== BASICS OF WHILE LOOPS         ========= //
let userInput = prompt("Please enter a number between 1 and 10");
//while the user input is not a number. or the number is less than one or larger than 10...
while (
    isNaN(parseInt(userInput)) || 
    userInput.trim() === "" || 
    parseInt(userInput) < 1 || 
    parseInt(userInput) > 10
)  {
    //use Number(userInput) instead of userInput to make sure we are checking numbers as prompts return as strings
  userInput = prompt("Invalid input. Please enter a number between 1 and 10.");
}

alert("You entered a valid number!");

// ==========  DO...WHILE LOOPS ======== //
// e.g., validate user input with do...while.
let userInput2; //no value assigned to this
do {
  userInput2 = prompt("Please enter a number between 1 and 10"); //give prompt in the do part
  // the do part will always run once before checking the condition.
} while (
    isNaN(parseInt(userInput4)) || 
    userInput4.trim() === "" || 
    parseInt(userInput4) < 1 || 
    parseInt(userInput4) > 10
); // the while loop checks if the user input is between 1 and 10, and if not, it makes the user try again.

alert("You entered a valid number!"); // runs as soon as the user puts in 2,3,4,5,6,7,8 or 9.
