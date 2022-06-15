// 'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let chances = 12;
let highscore = 0;

// DOM Elements

let checkButton = document.querySelector(".check");
let numberInput = document.querySelector(`.guessed-number`);
let rule = document.querySelector(".rule");
let breakLine = document.querySelector(".break");
let chancesLeft = document.querySelector(".chances");
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

  rule.style.color = "orangered";

  breakLine.style.borderColor = "white";

  domMessage("🤷‍♀️ Make Your Guess... 🤷‍♂️ ");

  chances = 12;
  chancesLeft.textContent = "12";

  guessedNumberBox.textContent = "?";
  guessedNumberBox.style.backgroundColor = "white";

  numberInput.style.visibility = "visible";
  numberInput.disabled = false;
  numberInput.value = "";
  numberInput.style.backgroundColor = "black";
  numberInput.style.borderWidth = "2px";

  checkButton.style.visibility = "visible";
  checkButton.disabled = false;
  checkButton.disabled = false;
  checkButton.textContent = "Check!";
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

  if (chances * 100 > highscore) {
    highscore = chances * 100;
    highscoreText.textContent = highscore;
  }

  numberInput.style.visibility = "hidden";
  numberInput.disabled = true;
  numberInput.disabled = true;
  numberInput.value = "";

  checkButton.style.visibility = "hidden";
  checkButton.disabled = true;
};

// Events

// check button event

checkButton.addEventListener("click", function () {
  let guess = Number(numberInput.value);

  // Invalid inputs by user

  if (!guess) {
    domMessage("🙏 Please Enter a Number 🙏");
  } else if (guess < 0 || guess > 20) {
    domMessage("❌ Not a valid number ❌");
  }

  // When user wins
  else if (guess === number) {
    winStyling();
  }

  // If user entered a wrong guess
  else {
    if (chances > 1) {
      domMessage(`🙋‍♂️ Guess a ${guess > number ? "lower" : "higher"} number 🙋‍♀️`);
      chances--;
      chancesLeft.textContent = chances;
    } else {
      domMessage("😢 Oopsieeee!! You Lose 😢");
      chancesLeft.textContent = "❌ No Lives Left ❌";
    }
  }
});

// again button event

playAgain.addEventListener("click", init);
