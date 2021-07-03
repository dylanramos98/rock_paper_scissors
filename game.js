// Rock, Paper, Scissors

const choices = [
    "ROCK",
    "PAPER",
    "SCISSORS"
]

let playerScore = 0;
let compScore = 0;

function computerPlay() {
    let randomCompChoice = choices[Math.floor(Math.random() * choices.length)];
    return(randomCompChoice.toUpperCase());
}

// Plays one round of game
// Adds point to either side
// Returns winner or loser

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === computerSelection) {
        return "Tie game!";
    }
    if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            compScore++;
            return "Sorry, paper wins.";
        }  else {
            if (computerSelection === "SCISSORS") {
                playerScore++;
                return "Congrats! Rock wins."
            }
        }
    }
    if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            compScore++;
            return "Sorry, scissors win.";
        }  else {
            if (computerSelection === "ROCK") {
                playerScore++;
                return "Congrats! Paper wins."
            }
        }
    }
    if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            compScore++;
            return "Sorry, rock wins.";
        }  else {
            if (computerSelection === "PAPER") {
                playerScore++;
                return "Congrats! Scissors win."
            }
        }
    }
}

const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
console.log(playerScore)
console.log(compScore)
