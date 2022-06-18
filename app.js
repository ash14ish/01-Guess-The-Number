// 'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let chances = 8;
let highscore = 0;

// DOM Elements
let playAgain = document.querySelector(".again");

let rule = document.querySelector(".rule");
let guessedNumberBox = document.querySelector(".guess");
let breakLine = document.querySelector(".break");

let toggleChanceClass = document.querySelector(".chances-left");
let toggleNoChanceClass = document.querySelector(".no-chances-left");

let numberInput = document.querySelector(`.guessed-number`);
let checkButton = document.querySelector(".check");

let chancesLeft = document.querySelector(".chances");

let currentscoreContainer = document.querySelector(".current-score-div");
let currentscoreText = document.querySelector(".current-score");

let highscoreContainer = document.querySelector(".highscore-div");
let highscoreText = document.querySelector(".highscore");

let message = document.querySelector(".message");

// DOM - styling and setting

function domMessage(msg) {
  message.textContent = msg;
}

const init = () => {
  document.body.style.background = `url("./assets/init.jpg") 0 0 / cover`;
  number = Math.trunc(Math.random() * 20) + 1;

  playAgain.style.backgroundColor = "#e64b3c";

  rule.style.visibility = "visible";

  breakLine.style.borderColor = "white";
  breakLine.style.backgroundColor = "white";

  domMessage("Make Your Guess... 🤷‍♂️ ");

  currentscoreText.textContent = "0";
  currentscoreContainer.classList.add("hidden");
  currentscoreContainer.classList.remove("animate");

  highscoreText.style.color = "rgb(15, 215, 15)";
  highscoreContainer.classList.remove("animate");

  chances = 8;
  chancesLeft.textContent = "8";
  toggleChanceClass.classList.remove("hidden");
  toggleNoChanceClass.classList.add("hidden");
  chancesLeft.style.color = "rgb(15, 215, 15)";

  guessedNumberBox.textContent = "?";
  guessedNumberBox.style.backgroundColor = "white";

  numberInput.style.display = "block";
  numberInput.disabled = false;
  numberInput.value = "";

  checkButton.style.display = "block";
  checkButton.disabled = false;
  checkButton.disabled = false;

  message.style.backgroundColor = "rgb(33, 204, 196)";
};

const winStyling = () => {
  document.body.style.background = `linear-gradient(to bottom, #000000 25%, #27470c 40%, #000000 75%)`;

  setTimeout(() => {
    document.body.style.background = `url("./assets/win.jpg")`;
  }, 2000);

  playAgain.style.backgroundColor = "#d9df2d";

  rule.style.visibility = "hidden";

  breakLine.style.borderColor = "black";
  breakLine.style.backgroundColor = "black";

  guessedNumberBox.textContent = number;
  guessedNumberBox.style.backgroundColor = "#d9df2d";
  guessedNumberBox.fontSize = "100px";

  domMessage("🏆🥇💸 Wohooooo!!! You won 💸🥇🏆");

  currentscoreText.textContent = chances * 200;
  currentscoreText.style.color = "rgb(255 254 0)";
  currentscoreContainer.classList.remove("hidden");
  currentscoreContainer.classList.add("animate");

  if (chances * 200 > highscore) {
    highscore = chances * 200;
    highscoreText.textContent = highscore;
  }

  highscoreText.style.color = "rgb(255 254 0)";
  highscoreContainer.classList.add("animate");

  toggleChanceClass.classList.add("hidden");

  numberInput.style.display = "none";
  numberInput.disabled = true;
  numberInput.disabled = true;
  numberInput.value = "";

  checkButton.style.display = "none";
  checkButton.disabled = true;

  message.style.backgroundColor = "rgb(46 159 31)";
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

// winStyling();
