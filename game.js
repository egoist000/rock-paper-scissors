console.log("Hello, World!");

const VALUES = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;

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
                computerPoints++;
                return "You Lose! Paper beats Rock";
            }
            else if(computerSelection === "rock") {
                return "Tie!";
            }
            else if(computerSelection === "scissors") {
                playerPoints++;
                return "You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if(computerSelection === "paper") {
                return "Tie!";
            }
            else if(computerSelection === "rock") {
                playerPoints++;
                return "You Win! Paper beats Rock";
            }
            else if(computerSelection === "scissors") {
                computerPoints++;
                return "You Lose! Scissors beats Paper";
            }
            break;
        case "scissors":
            if(computerSelection === "paper") {
                playerPoints++;
                return "You Win! Scissors beats Paper";
            }
            else if(computerSelection === "rock") {
                computerPoints++;
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

function game() {
    let playerSelection = "";
    let computerSelection = "";
    for(let i = 0; i < 5; i++) {
        playerSelection = prompt("rock, paper or scissors?");
        computerSelection = computerPlay();
        console.log(playSingleRound(playerSelection, computerSelection));
        console.log(`Player points: ${playerPoints} Computer points: ${computerPoints}`);
    }
    if(playerPoints > computerPoints) {
        console.log("Player wins!! :)");
    }
    else if(playerPoints < computerPoints) {
        console.log("Computer wins!! :(");
    }
    else {
        console.log("Tie!! :/");
    }
}