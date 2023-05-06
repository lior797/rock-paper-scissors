const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let randomIndex = Math.floor(Math.random() * choices.length);
  let randomChoice = choices[randomIndex];
  return randomChoice;
}

