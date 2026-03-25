const choices = ["rock", "paper", "scissors"];

const computerChoiceDisplay = document.getElementById("computerChoice");
const playerChoiceDisplay = document.getElementById("playerChoice");
const resultDisplay = document.getElementById("result");

const computerScore = document.getElementById("computerScore");
const playerScore = document.getElementById("playerScore");

let pScore = 0;
let cScore = 0;

function playAGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    if(computerChoice === playerChoice){
        result = "It's a tie!";
    }
    else{
        switch(playerChoice){
            case "rock": 
            result = (computerChoice === "scissors") ? "You win!" : "You lose!";
            break;

            case "paper":
            result = (computerChoice === "rock") ? "You win!" : "You lose!";
            break;

            case "scissors":
            result = (computerChoice === "paper") ? "You win!" : "You lose!";
            break;
        }
    }

    playerChoiceDisplay.textContent = `Player choice: ${playerChoice}`;
    computerChoiceDisplay.textContent = `Computer choice: ${computerChoice}`;
    resultDisplay.textContent = result;

    if(result === "You win!"){
        pScore++;
        playerScore.textContent = `Player score: ${pScore}`;
    }
    else if(result === "You lose!"){
        cScore++;
        computerScore.textContent = `Computer score: ${cScore}`;
    }

    restartBtn.addEventListener("click", () => {
        pScore = 0;
        cScore = 0;
        playerScore.textContent = `Player score: 0`;
        computerScore.textContent = `Computer score: 0`;
        resultDisplay.textContent = `It's a tie!`;
    });
}
