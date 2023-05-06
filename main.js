let playerScore = 0;
let computerScore = 0;

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
    playerScore++;
    return "You win! " + playerChoice + " beats " + computerChoice;
  } else if (playerChoice == computerChoice) {
    return "It's a tie, you both chose " + playerChoice;
  } else {
    computerScore++;
    return "You lose! " + computerChoice + " beats " + playerChoice;
  }
}

function winner() {
  if (playerScore > computerScore) {
    console.log("This is the final score.");
    console.log("You are the WINNNER!!! Congratulations!");
  } else if (playerScore < computerScore) {
    console.log("This is the final score.");
    console.log("You lost to the computer, maybe next time you will succeed!");
  } else {
    console.log("The final score is a tie. Well done");
  }
}

function fullGame() {
  playerScore = 0;
  computerScore = 0;
  for (i = 0; i < 5; i++) {
    console.log(gameRound());
    if (playerScore > computerScore) {
      console.log(
        "The updated score is " + playerScore + ":" + computerScore + " to you!"
      );
    } else if (playerScore < computerScore) {
      console.log(
        "The updated score is " +
          computerScore +
          ":" +
          playerScore +
          " to computer!"
      );
    } else {
      console.log(
        "The updated score is a tie " + playerScore + ":" + computerScore
      );
    }
  }
  winner();
}

fullGame();
