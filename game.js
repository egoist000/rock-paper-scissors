console.log("Hello, World!");

const VALUES = ["rock", "paper", "scissors"];
let playerPoints;
let computerPoints;
let gameCanceled;

/* Init game variables */

function initGame() {
    gameCanceled = false;
    computerPoints = 0;
    playerPoints = 0;
}

/* Function that gets a valid player selection or undefined */

function getValidSelection() {
    let isValid = false;
    let playerSelection;
    while(!isValid) {
        playerSelection = prompt("rock, paper or scissors? Press cancel to stop game.");
        if(checkSelection(playerSelection)) {
            isValid = true;
        }
        else if(playerSelection === null) { // Player canceled
            gameCanceled = true;
            return;
        }
        else { // Invalid value
            alert("Invalid value!! input rock, paper or scissors to play. Press cancel to stop game.");
        }
    }
    return playerSelection;
}

/* Function that checks if user input a valid value to play the game in the prompt (rock, paper or scissors) */

function checkSelection(playerSelection) {
    if(VALUES.indexOf(playerSelection) == -1) { // Not found in VALUES
        return false;
    }
    else {
        return true; // Valid input
    }
}

/* Function that randomly returns rock, paper or scissors */

function computerPlay() {
    return VALUES[Math.floor(Math.random() * 3)];
}

/* Function that plays a single round of Rock, Paper, Scissors and declare the winner of the round */

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

/* Game function that plays n round of rock paper and scissors or 5 if not specified */

function game(numberOfRounds = 5) {
    initGame();
    let i = 0; // Round iterations
    while(i < Math.abs(numberOfRounds)) {
        playerSelection = getValidSelection();
        computerSelection = computerPlay();
        if(!gameCanceled) {
            console.log(`Player selection: ${playerSelection}. Computer selection: ${computerSelection}`)
            console.log(playSingleRound(playerSelection, computerSelection));
            console.log(`Player points: ${playerPoints} Computer points: ${computerPoints}`);
            i++;
        }
        else {
            console.log("Exit game..");
            return null; // User canceled
        }
    } // Game Ended
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