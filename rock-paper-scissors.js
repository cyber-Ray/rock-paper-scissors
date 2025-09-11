let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const num = Math.random();
  if (num < 1/3) {
    return "rock";
  }
  else if (num < 2/3) {
    return "paper";
  }
  else {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  const round = document.querySelector(".round");
  const content = document.createElement("div");
  content.classList.add("content");
  if (humanChoice === computerChoice) {
    content.textContent = "You tie! You both picked " + humanChoice;
    round.appendChild(content);
  }
  else if (humanChoice === "rock" && computerChoice === "scissors") {
    content.textContent = "You win! Rock beats scissors";
    round.appendChild(content);
    humanScore++;
  }
  else if (humanChoice === "rock" && computerChoice === "paper") {
    content.textContent = "You lose! Paper beats rock";
    round.appendChild(content);
    computerScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "paper") {
    content.textContent = "You win! Scissors beats paper";
    round.appendChild(content);
    humanScore++;
  }
  else if (humanChoice === "scissors" && computerChoice === "rock") {
    content.textContent = "You lose! Rock beats scissors";
    round.appendChild(content);
    computerScore++;
  }
  else if (humanChoice === "paper" && computerChoice === "rock") {
    content.textContent = "You win! Paper beats rock";
    round.appendChild(content);
    humanScore++;
  }
  else {
    content.textContent = "You lose! Scissors beats paper";
    round.appendChild(content);
    computerScore++;
  }

  displayScore(humanScore, computerScore)

  if (humanScore === 5 || computerScore === 5) {
    const result = document.querySelector("#result");
    if (humanScore > computerScore) {
      result.textContent = "You won!"
    }
    else {
      result.textContent = "You lost!"
    }
  }
}

function displayScore(humanScore, computerScore) {
  const display = document.querySelector("#score");
  display.textContent = "Player: " + humanScore + ". Computer: " + computerScore + "."
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice())
  })
})
