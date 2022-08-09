console.log('Running...');

let computerChoices = ['Rock', 'Paper', 'Scissors'];
let computerChoice;
let playerChoice;
let playerScore = 0;
let computerScore = 0;

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  } //capitalizes first letter of input

function getComputerChoice() {
    let result = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    return result;
}

let roundCounter = 1;

function playRound(playerSelection, computerSelection) {
    let playerWinCombo = ['Paper-Rock', 'Rock-Scissors', 'Scissors-Paper'];
    let roundWinCombo = `${playerSelection}-${computerSelection}`;

    if (playerSelection === computerSelection) {
        alert("It's a tie!");
    } else if (playerWinCombo.includes(roundWinCombo)) {
        alert(`You win! ${playerSelection} beats ${computerSelection}`);
        playerScore += 1;
    } else {
        alert(`You lose! ${computerSelection} beats ${playerSelection}`);
        computerScore += 1;
    }
    console.log(`Round ${roundCounter} // Player's score: ${playerScore} // Computer's score: ${computerScore}`);
    roundCounter += 1;
}

function game() {
    for (let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice =  capitalizeFirstLetter(prompt(`Round ${i + 1} | Rock, Paper or Scissors?`));
        playRound(playerChoice,computerChoice);
    }
}

game();