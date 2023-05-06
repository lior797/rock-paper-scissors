const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
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
