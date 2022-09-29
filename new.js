//global
const choices = ['rock', 'paper', 'scissors']
var playerScore = 0;
var compScore = 0;


function playRound(playerSelection, getComputerChoice) {
  var result = " ";
  if (playerSelection == "rock" && getComputerChoice == "rock") {
    result += "Rock vs Rock, Tie"
  }
  else if (playerSelection == "rock" && getComputerChoice == "scissors") {
    result += "Rock vs Scissors, Player winS!"; playerScore++
  }
  else if (playerSelection == "rock" && getComputerChoice == "paper") {
    result += "Rock vs Paper, Computer wins!"; compScore++
  }
  else if (playerSelection == "paper" && getComputerChoice == "paper") {
    result += "Paper vs Paper, Tie!"
  }
  else if (playerSelection == "paper" && getComputerChoice == "rock") {
    result += "Paper vs Rock , PLayer wins!"; playerScore++
  }
  else if (playerSelection == "paper" && getComputerChoice == "scissors") {
    result += "Paper vs Scissors, Computer wins!"; compScore++
  }
  else if (playerSelection == "scissors" && getComputerChoice == "paper") {
    result += "Scissors vs paper, Player wins!"; playerScore++
  }
  else if (playerSelection == "scissors" && getComputerChoice == "rock") {
    result += "Scissors vs rock, Computer wins!"; compScore++
  }
  else if (playerSelection == "scissors" && getComputerChoice == "scissors") {
    result += "Scissors vs scissors, TIE!"
  }
  else {
    console.log("invalid input")
  }

  return result
}

function game() {
  for (let i = 0; i < 5; i++) {
    const select = prompt("Rock, Paper, Scissors? : ")
    let playerSelection = select.toLowerCase();
    const getComputerChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(playRound(playerSelection, getComputerChoice))
  }
}
function result() {
  if (playerScore > compScore) {
    console.log("With a score of: " + playerScore + "- " + compScore + " Player wins")
  }
  else if (playerScore < compScore) {
    console.log("With a score of: " + playerScore + "- " + compScore + " Player loses")
  }
  else {
    console.log("With a score of: " + playerScore + "- " + compScore + " the game is tied")
  }
}

game()
result()
