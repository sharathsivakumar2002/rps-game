let userScore = 0;
let aiScore = 0;

const choices = ["rock", "paper", "scissors"];

function play(userChoice) {
  const aiChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === aiChoice) {
    result = "It's a Draw!";
  } else if (
    (userChoice === "rock" && aiChoice === "scissors") ||
    (userChoice === "paper" && aiChoice === "rock") ||
    (userChoice === "scissors" && aiChoice === "paper")
  ) {
    result = "You Win!";
    userScore++;
  } else {
    result = "AI Wins!";
    aiScore++;
  }

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("aiScore").innerText = aiScore;

  document.getElementById("resultText").innerText = result;
  document.getElementById("moves").innerText =
    `You chose ${userChoice} | AI chose ${aiChoice}`;
}
