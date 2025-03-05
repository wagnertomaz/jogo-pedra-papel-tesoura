let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxRound = 5;

const result = document.querySelector("#result");
const scoreboard = document.querySelector("#scoreboard");
const gameButton = document.querySelector(".gameButton");
const restartButton = document.querySelector("#restartButton")

function getComputerChoice() {
    let computerChoice = ['rock', 'paper', 'scissors'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
    result.innerHTML = `<span class="round-span">ROUND ${round}</span><br><span class="tie-span">Tie!</span><br> You and the computer both chose ${humanChoice}.`
    return;

  } else if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
    result.innerHTML = `<span class="round-span">ROUND ${round}</span><br><span class="win-span">You win!</span><br> Your ${humanChoice} beats the computer's ${computerChoice}.`;
    return "humanPoint";

  } else {
    result.innerHTML = `<span class="round-span">ROUND ${round}</span><br><span class="lose-span">You lose!</span><br> The computer's ${computerChoice} beats your ${humanChoice}.
`;
    return "computerPoint";
  }
}

function playGame(humanSelection){
  if(round >= maxRound) {
    alert("The game is over! Click 'Restart Game' to play again! Or, if you want to return to the main menu, click 'Back to Menu'.");
    return;
  }

  round++;
  const computerSelection = getComputerChoice();

  const points = playRound(humanSelection, computerSelection);
      if (points === "humanPoint") {
          humanScore++;
      } else if (points === "computerPoint") {
          computerScore++;
      }

  scoreboard.innerHTML = `SCORE: You <span class="win-span">${humanScore}</span> x <span class="lose-span">${computerScore}</span> Computer`

  if (round === maxRound) {
    setTimeout(() => {
      if (humanScore > computerScore) {
        result.innerHTML = `<span class="win-span">You won the game!</span><br> The final score was ${humanScore}-${computerScore} in your favor!`;
      } else if (computerScore > humanScore) {
        result.innerHTML = `<span class="lose-span">You lost the game!</span><br> The final score was ${computerScore}-${humanScore} in the computer's favor!`;
      } else {
        result.innerHTML = `<span class="tie-span">The game ended in a tie!</span><br> The final score was ${humanScore}-${computerScore}!`;
      }

      gameButton.forEach(button => button.disabled = true);
      restartButton.disabled = false;
      }, 1500);
  }
}

function restartGame() {
  if (round === 0) {
    alert("You need to start the game before you can restart it!")
    return;

  } else if (round < maxRound) {
    alert("The game isn't over yet, so you can't restart it!")
    return;
  }

  humanScore = 0;
  computerScore = 0;
  round = 0;

  result.innerHTML = `<span class="round-span"></span><br>The game has 5 rounds.<br>To start the game, make your first move.`;
  scoreboard.innerHTML = `SCORE: You <span class="win-span">0</span> x <span class="lose-span">0</span> Computer</p>`;

  gameButton.forEach(button => button.disabled = false);
  restartButton.disabled = true;
}
