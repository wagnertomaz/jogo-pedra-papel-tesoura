let humanScore = 0;
let computerScore = 0;
let round = 0;
const maxRound = 5;

const result = document.querySelector("#result");
const scoreboard = document.querySelector("#scoreboard");
const gameButton = document.querySelector(".gameButton");
const restartButton = document.querySelector("#restartButton")

function getComputerChoice() {
    let computerChoice = ['pedra', 'papel', 'tesoura'];
    return computerChoice[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
    result.innerHTML = `<span class="round-span">RODADA ${round}</span><br><span class="tie-span">Empate!</span><br> Você e o computador escolheram ${humanChoice}.`
    return;

  } else if (humanChoice === 'pedra' && computerChoice === 'tesoura' || humanChoice === 'papel' && computerChoice === 'pedra' || humanChoice === 'tesoura' && computerChoice === 'papel') {
    result.innerHTML = `<span class="round-span">RODADA ${round}</span><br><span class="win-span">Você ganhou!</span><br> ${humanChoice} venceu ${computerChoice}.`;
    return "humanPoint";

  } else {
    result.innerHTML = `<span class="round-span">RODADA ${round}</span><br><span class="lose-span">Você perdeu!</span><br> ${computerChoice} venceu ${humanChoice}.`;
    return "computerPoint";
  }
}

function playGame(humanSelection){
  if(round >= maxRound) {
    alert("O jogo acabou! Clique em 'Reiniciar Jogo' para jogar novamente! Ou, se quiser voltar ao menu principal, clique em 'Voltar ao Menu'.");
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

  scoreboard.innerHTML = `PLACAR: Você <span class="win-span">${humanScore}</span> x <span class="lose-span">${computerScore}</span> Computador`

  if (round === maxRound) {
    setTimeout(() => {
      if (humanScore > computerScore) {
        result.innerHTML = `<span class="win-span">Você venceu o jogo!</span><br> Placar final: ${humanScore}-${computerScore} a seu favor!`;
      } else if (computerScore > humanScore) {
        result.innerHTML = `<span class="lose-span">Você perdeu o jogo!</span><br> Placar final: ${computerScore}-${humanScore} a favor do computador.`;
      } else {
        result.innerHTML = `<span class="tie-span">O jogo terminou empatado!</span><br> Placar final: ${humanScore}-${computerScore}.`;
      }

      gameButton.forEach(button => button.disabled = true);
      restartButton.disabled = false;
      }, 1500);
  }
}

function restartGame() {
  if (round === 0) {
    alert("Você precisa começar o jogo antes de reiniciar!")
    return;

  } else if (round < maxRound) {
    alert("O jogo ainda não acabou, você não pode reiniciar!")
    return;
  }

  humanScore = 0;
  computerScore = 0;
  round = 0;

  result.innerHTML = `<span class="round-span"></span><br>O jogo tem 5 rodadas.<br>Para começar, faça sua primeira jogada.`;
  scoreboard.innerHTML = `PLACAR: Você <span class="win-span">0</span> x <span class="lose-span">0</span> Computador`;

  gameButton.forEach(button => button.disabled = false);
  restartButton.disabled = true;
}
