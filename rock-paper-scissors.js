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

function getHumanChoice() {
  let choice;
  do {
    choice = prompt("Would you like to play rock, paper, or scissors? Please enter your choice: ");
    if (choice.toLowerCase() === "rock") {
      return "rock";
    }
    else if (choice.toLowerCase() === "paper") {
      return "paper";
    }
    else if (choice.toLowerCase() === "scissors") {
      return "scissors";
    }
    else {
      console.log("Invalid choice");
    }
  } while(choice !== "rock" || choice !== "paper" || choice !== "scissors")
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("You tie! You both picked " + humanChoice);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats scissors");
      humanScore++;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats rock");
      computerScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
      console.log("You win! Scissors beats paper");
      humanScore++;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats scissors");
      computerScore++;
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock");
      humanScore++;
    }
    else {
      console.log("You lose! Scissors beats paper");
      computerScore++;
    }
  }

  for (let i = 0; i < 5; i++) {
    const human = getHumanChoice();
    const computer = getComputerChoice();
    playRound(human, computer);
  }

  if (humanScore === computerScore) {
    return "You tied!";
  }
  else if (humanScore > computerScore) {
    return "You won!";
  }
  else {
    return "You lost!";
  }
}

console.log(playGame())
