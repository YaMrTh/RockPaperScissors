let choices = ['Rock', 'Paper', 'Scissors'];

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)]
};

function playRound(humanChoice, computerChoice) {
    const outcomes = {
        'Rock': { 'Rock': 'Tie', 'Paper': 'Lose', 'Scissors': 'Win' },
        'Paper': { 'Rock': 'Win', 'Paper': 'Tie', 'Scissors': 'Lose' },
        'Scissors': { 'Rock': 'Lose', 'Paper': 'Win', 'Scissors': 'Tie' }
    };

    let result = outcomes[humanChoice][computerChoice];
    if (result === 'Win') {
        humanScore++;
        announce.textContent = "You Win! " + humanChoice + " beats " + computerChoice + ".";
        playerScore.textContent = humanScore;
        pcScore.textContent = computerScore;
    } else if (result === 'Lose') {
        computerScore++;
        announce.textContent = "You Lose! " + computerChoice +" beats " + humanChoice + ".";
        playerScore.textContent = humanScore;
        pcScore.textContent = computerScore;
    } else {
        announce.textContent = "It's a Tie!";
        playerScore.textContent = humanScore;
        pcScore.textContent = computerScore;
    };

    if (humanScore === 5) {
        outcome.textContent = "Congratulation! You won the game.";
        humanScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        outcome.textContent = "Try again! The computer was better than you this time.";
        humanScore = 0;
        computerScore = 0;
    };    
};


const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const announce = document.querySelector(".announce");
const playerScore = document.querySelector(".playerScore");
const pcScore = document.querySelector(".computerScore");
const outcome = document.querySelector(".outcome");


rockButton.addEventListener("click", () => {
    outcome.textContent = "";
    let computerChoice = getComputerChoice();
    let humanChoice = "Rock";
    playRound(humanChoice, computerChoice);
});
paperButton.addEventListener("click", () => {
    outcome.textContent = "";
    let computerChoice = getComputerChoice();
    let humanChoice = "Paper";
    playRound(humanChoice, computerChoice);
});
scissorsButton.addEventListener("click", () => {
    outcome.textContent = "";
    let computerChoice = getComputerChoice();
    let humanChoice = "Scissors";
    playRound(humanChoice, computerChoice);
});