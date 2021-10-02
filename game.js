console.log("Hello, World!");

const VALUES = ["rock", "paper", "scissors"];

/* Function that randomly returns rock, paper or scissors */

function computerPlay() {
    return VALUES[Math.floor(Math.random() * 3)];
}

/* Function that plays a single round of Rock, Paper, Scissors  and declare the winner of the round */

function playSingleRound(playerSelection, computerSelection) {
    if(playerSelection === null) {
        return;
    }
    playerSelection = playerSelection.toLowerCase();
    switch(playerSelection) {
        case "rock":
            if(computerSelection === "paper") {
                return "You Lose! Paper beats Rock";
            }
            else if(computerSelection === "rock") {
                return "Tie!";
            }
            else if(computerSelection === "scissors") {
                return "You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if(computerSelection === "paper") {
                return "Tie!";
            }
            else if(computerSelection === "rock") {
                return "You Win! Paper beats Rock";
            }
            else if(computerSelection === "scissors") {
                return "You Lose! Scissors beats Paper";
            }
            break;
        case "scissors":
            if(computerSelection === "paper") {
                return "You Win! Scissors beats Paper";
            }
            else if(computerSelection === "rock") {
                return "You Lose! Rock beats Scissors";
            }
            else if(computerSelection === "scissors") {
                return "Tie!";
            }
            break;
        default :
            return "Error";
    }    
}

let choice = prompt("Rock, Paper or Scissors??");
computerSelection = computerPlay();
console.log(playSingleRound(choice, computerSelection));