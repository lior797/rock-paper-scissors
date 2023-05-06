function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * choices.length);
  let randomChoice = choices[randomIndex];
  return randomChoice;
}

function playerSelection() {
  let choice;
  do {
    choice = prompt(
      "What is your choice? Rock, paper or scissors?"
    ).toLowerCase();
  } while (!(choice == "rock" || choice == "paper" || choice == "scissors"));
  return choice;
}

function gameRound() {
  let computerChoice = getComputerChoice();
  let playerChoice = playerSelection();
  if (
    (playerChoice == "rock" && computerChoice == "scissors") ||
    (playerChoice == "paper" && computerChoice == "rock") ||
    (playerChoice == "scissors" && computerChoice == "paper")
  ) {
    return "You win! " + playerChoice + " beats " + computerChoice;
  } else if (playerChoice == computerChoice) {
    return "It's a tie, you both chose " + playerChoice;
  } else {
    return "You lose! " + computerChoice + " beats " + playerChoice;
  }
}

console.log(gameRound());
