// 'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let chances = 8;
let highscore = 0;

// DOM Elements

let checkButton = document.querySelector(".check");
let numberInput = document.querySelector(`.guessed-number`);
let rule = document.querySelector(".rule");
let breakLine = document.querySelector(".break");

let chancesLeft = document.querySelector(".chances");
let toggleChanceClass = document.querySelector(".chances-left");
let toggleNoChanceClass = document.querySelector(".no-chances-left");

let guessedNumberBox = document.querySelector(".guess");
let highscoreText = document.querySelector(".highscore");
let playAgain = document.querySelector(".again");

// DOM - styling and setting

function domMessage(message) {
  document.querySelector(".message").textContent = message;
}

const init = () => {
  number = Math.trunc(Math.random() * 20) + 1;

  document.body.style.backgroundColor = "rgb(72, 15, 26)";

  rule.style.color = "rgb(234, 231, 62)";

  breakLine.style.borderColor = "white";
  breakLine.style.backgroundColor = "white";

  domMessage("Make Your Guess... 🤷‍♂️ ");

  highscoreText.style.color = "rgb(15, 215, 15)";

  chances = 8;
  chancesLeft.textContent = "8";
  chancesLeft.style.color = "rgb(15, 215, 15)";
  toggleChanceClass.classList.remove("hidden");
  toggleNoChanceClass.classList.add("hidden");

  guessedNumberBox.textContent = "?";
  guessedNumberBox.style.backgroundColor = "white";

  numberInput.style.display = "block";
  numberInput.disabled = false;
  numberInput.value = "";
  numberInput.style.backgroundColor = "rgb(181, 248, 236)";
  numberInput.style.borderWidth = "4px";

  checkButton.style.display = "block";
  checkButton.disabled = false;
  checkButton.disabled = false;
  checkButton.textContent = "Guess";
  checkButton.style.backgroundColor = "white";
  checkButton.style.color = "black";
};

const winStyling = () => {
  document.body.style.backgroundColor = "green";

  rule.style.color = "green";

  breakLine.style.borderColor = "black";
  breakLine.style.backgroundColor = "black";

  guessedNumberBox.textContent = number;
  guessedNumberBox.style.backgroundColor = "pink";
  guessedNumberBox.fontSize = "100px";

  domMessage("🏆🥇💸 Wohooooo!!! You won 💸🥇🏆");

  if (chances * 200 > highscore) {
    highscore = chances * 200;
    highscoreText.textContent = highscore;
  }
  highscoreText.style.color = "rgb(228 220 36)";

  chancesLeft.style.color = "rgb(228 220 36)";
  toggleChanceClass.classList.add("hidden");

  numberInput.style.display = "none";
  numberInput.disabled = true;
  numberInput.disabled = true;
  numberInput.value = "";

  checkButton.style.display = "none";
  checkButton.disabled = true;
};

const loseStyling = () => {
  domMessage("😢 Oops!! You Lose 😢");
  toggleChanceClass.classList.add("hidden");
  toggleNoChanceClass.classList.remove("hidden");

  numberInput.disabled = true;
  numberInput.disabled = true;
  numberInput.value = "";

  checkButton.style.display = "none";
  checkButton.disabled = true;
};

// Events

// check button event

checkButton.addEventListener("click", function () {
  let guess = Number(numberInput.value);

  // Invalid inputs by user

  if (!guess) {
    domMessage("❌ Not a number ❌");
  } else if (guess < 0 || guess > 20) {
    domMessage("Range is 1-20 🔢");
  }

  // When user wins
  else if (guess === number) {
    winStyling();
  }

  // If user entered a wrong guess
  else {
    if (chances > 1) {
      domMessage(
        `Guess a ${guess > number ? "lower  number 👇" : "higher  number 👆"}`
      );

      chances--;
      chancesLeft.textContent = chances;
    } else {
      loseStyling();
    }

    if (chances < 4) {
      chancesLeft.style.color = "red";
    }
  }
});

// again button event

playAgain.addEventListener("click", init);
