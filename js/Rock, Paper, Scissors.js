let attempt = 3;

do {
    function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function getUserChoice() {
    const input = prompt("Enter rock, paper, or scissors:").toLowerCase();
    if (["rock", "paper", "scissors"].includes(input)) {
      return input;
    } else {
      alert("Invalid choice. Please enter rock, paper, or scissors.");
      return getUserChoice(); // retry input
    }
  }
  
  function getWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return "It's a tie!";
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      return "You win!";
    } else {
      return "Computer wins!";
    }
  }
  
  function playGame() {
    alert("Welcome to Rock, Paper, Scissors!");
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
  
    alert(`You chose: ${userChoice}`);
    alert(`Computer chose: ${computerChoice}`);
  
    const result = getWinner(userChoice, computerChoice);
    alert(result);
  }
 // Run the game
 playGame();
 
  attempt --;
}
while(
    attempt>0);

let lossAlert = alert(`Sorry, you've ran out of attempts.`);
  
 