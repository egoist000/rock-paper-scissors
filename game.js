const GAME_VALUES = ["rock", "paper", "scissors"];
let gameRunning = true;
let playerPoints = 0;
let computerPoints = 0;
let logs = 0;
let charIndex = 0;

function typeWriter(text, obj, speed=200) {
    if(charIndex < text.length) {
        obj.textContent += text.charAt(charIndex);
        charIndex++;
        setTimeout(typeWriter, speed, text, obj);
    }
    else {
        charIndex = 0;
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

const resDiv = document.querySelector("#results");
const logsDiv = document.querySelector(".logs");
const btns = document.querySelectorAll(".choices-container .btn");
const gameInfo = document.querySelector("#info");
const gameOver = document.querySelector("#game-over")
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");

function loadHeader() {
    const header = document.getElementById("main-header");
    const version = document.getElementById("version");
    typeWriter("Rock, Paper and Scissors", header);
    setTimeout(typeWriter, 5000, "ver 0.1", version);
}

window.addEventListener('load', loadHeader);

function clearResultDiv() {
    resDiv.innerHTML = "";
    logs = -1;
}

function startNewGame() {
    window.location.reload();
}

function appendResults(res) {
    computerScore.textContent = computerPoints;
    playerScore.textContent = playerPoints;
    if(playerPoints >= 5 || computerPoints >= 5) {
        endGame();
    }
    else {
        resDiv.appendChild(res);
        logs++
    }
}

function continueGame(e) {
    if(e.target.id === "yes") {
        startNewGame();
    }
    else {
        if(confirm("Are you sure?")) {
            window.close();
        }
    }
}

function endGame() {
    gameRunning = false;
    clearResultDiv();
    gameOver.style.display = "flex";
    logsDiv.removeChild(resDiv);
    const gameOverButtons = document.querySelectorAll("#continue button");
    if(playerPoints > computerPoints) {
        gameInfo.textContent = "Player wins! >:)"
    }
    else {
        gameInfo.textContent = "Computer wins! >:("
    }
    gameOverButtons.forEach(btn => {
        btn.addEventListener('click', continueGame);
    })
}

function btnClicked(e) {
    if(gameRunning) {
        const playerImg = document.querySelector("#player-img");
        const computerImg = document.querySelector("#computer-img");
        const res = document.createElement("p");
        let playerSelection = e.target.id;
        let computerSelection = computerPlay();
        playerImg.src = `icons/${playerSelection}.png`;
        computerImg.src = `icons/${computerSelection}.png`;
        let result = playSingleRound(playerSelection, computerSelection);
        if(logs == 8) {
            clearResultDiv();
        }
        res.textContent = result;
        appendResults(res);
    }
}

btns.forEach(btn => {
    btn.addEventListener('click', btnClicked)
});