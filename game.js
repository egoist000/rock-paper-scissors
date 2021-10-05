console.log("Hello, World!");

const GAME_VALUES = ["rock", "paper", "scissors"];
let playerPoints = 0;
let computerPoints = 0;
let logs = 0;
let gameCanceled;

function initGame() {
    gameCanceled = false;
    computerPoints = 0;
    playerPoints = 0;
}

function getValidPlayerSelection() {
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

function checkSelection(playerSelection) {
    if(GAME_VALUES.indexOf(playerSelection) == -1) { // Not found in GAME_VALUES
        return false;
    }
    else {
        return true; // Valid input
    }
}

/* Function that randomly returns rock, paper or scissors */

function computerPlay() {
    return GAME_VALUES[Math.floor(Math.random() * 3)];
}

function playSingleRound(playerSelection, computerSelection) {
    switch(playerSelection) {
        case "rock":
            if(computerSelection === "paper") {
                computerPoints++;
                return ">You Lose! Paper beats Rock";
            }
            else if(computerSelection === "rock") {
                return ">Tie!";
            }
            else if(computerSelection === "scissors") {
                playerPoints++;
                return ">You Win! Rock beats Scissors";
            }
            break;
        case "paper":
            if(computerSelection === "paper") {
                return ">Tie!";
            }
            else if(computerSelection === "rock") {
                playerPoints++;
                return ">You Win! Paper beats Rock";
            }
            else if(computerSelection === "scissors") {
                computerPoints++;
                return ">You Lose! Scissors beats Paper";
            }
            break;
        case "scissors":
            if(computerSelection === "paper") {
                playerPoints++;
                return ">You Win! Scissors beats Paper";
            }
            else if(computerSelection === "rock") {
                computerPoints++;
                return ">You Lose! Rock beats Scissors";
            }
            else if(computerSelection === "scissors") {
                return ">Tie!";
            }
            break;
        default :
            return ">Error";
    } 
}

function game(numberOfRounds = 5) {
    initGame();
    for(let i = 0; i < Math.abs(numberOfRounds); i++) {
        playerSelection = getValidPlayerSelection();
        computerSelection = computerPlay();
        if(!gameCanceled) {
            console.log(`Player selection: ${playerSelection}. Computer selection: ${computerSelection}`)
            console.log(playSingleRound(playerSelection, computerSelection));
            console.log(`Player points: ${playerPoints} Computer points: ${computerPoints}`);
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

const resDiv = document.querySelector("#results");
const btns = document.querySelectorAll(".choices-container .btn");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

function btnClicked(e) {
    let playerSelection = e.target.id;
    let computerSelection = computerPlay();
    const res = document.createElement("p");
    console.log(playerSelection, computerSelection);
    let result = playSingleRound(playerSelection, computerSelection);
    if(logs == 8) {
        resDiv.innerHTML = "";
        logs = -1;
    }
    res.textContent = result;
    computerScore.textContent = computerPoints;
    playerScore.textContent = playerPoints;
    resDiv.appendChild(res);
    logs++
}


btns.forEach(btn => {
    btn.addEventListener('click', btnClicked)
});