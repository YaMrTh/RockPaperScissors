let choices = ['Rock', 'Paper', 'Scissors']

let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
}

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        'Rock': { 'Rock': 'Tie', 'Paper': 'Lose', 'Scissors': 'Win' },
        'Paper': { 'Rock': 'Win', 'Paper': 'Tie', 'Scissors': 'Lose' },
        'Scissors': { 'Rock': 'Lose', 'Paper': 'Win', 'Scissors': 'Tie' }
    };

    let result = outcomes[humanChoice][computerChoice];
    if (result === 'Win') {
        humanScore++;
        console.log(`You Win! ${humanChoice} beats ${computerChoice}.`);
        announce.textContent = "You Win! " + humanChoice + " beats " + computerChoice + ".";
    } else if (result === 'Lose') {
        computerScore++;
        console.log(`You Lose! ${computerChoice} beats ${humanChoice}.`);
        announce.textContent = "You Lose! " + computerChoice +" beats " + humanChoice + ".";
    } else {
        console.log("It's a Tie!");
        announce.textContent = "It's a Tie!";
    }
}

/* Logic to play exactly five rounds
function playgame() {
    for (let i = 0 ; i < 5 ; i++) {
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        playRound(humanChoice, computerChoice)
    }
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game! Better luck next time.");
    } else {
        console.log("The game is a tie!");
    }
}

playgame()

*/

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const announce = document.querySelector(".announce");

rockButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = "Rock";
    playRound(humanChoice, computerChoice);
});
paperButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = "Paper";
    playRound(humanChoice, computerChoice);
});
scissorsButton.addEventListener("click", () => {
    let computerChoice = getComputerChoice();
    let humanChoice = "Scissors";
    playRound(humanChoice, computerChoice);
});