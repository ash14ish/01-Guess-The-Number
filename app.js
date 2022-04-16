// 'use strict';

let number = Math.trunc(Math.random() * 20) + 1;
let chances = 12;
let highscore = 0;

function domMessage(message) {
  document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guessedNumber").value);

  // If user doesn't input a number

  if (!guess) {
    domMessage("🙏 Please Enter a Number 🙏");
  } else if (guess < 0 || guess > 20) {
    domMessage("❌ Not a valid number ❌");
  }

  // When user wins
  else if (guess === number) {
    domMessage("🏆🥇💸 Wohooooo!!! You won 💸🥇🏆");
    document.querySelector(".guess").textContent = number;
    if (chances * 100 > highscore) {
      highscore = chances * 100;
      document.querySelector(".highscore").textContent = highscore;
    }
    document.querySelector(".guessedNumber").disabled = true;
    document.querySelector(".guessedNumber").value = "";

    // styling

    document.querySelector("html").style.backgroundColor = "green";
    document.querySelector(".guess").style.backgroundColor = "pink";
    document.querySelector(".guess").fontSize = "100px";
    document.querySelector(".break").style.borderColor = "black";
    document.querySelector(".guessedNumber").style.display = "none";
    document.querySelector(".rule").style.color = "green";
    document.querySelector(".check").style.display = "none";
    document.querySelector(".check").disabled = true;
  }

  // If user entered a lower guess
  else if (guess < number) {
    if (chances > 1) {
      domMessage("🙋‍♂️ Guess a higher number 🙋‍♀️");
      chances--;
      document.querySelector(".chances").textContent = chances;
    } else {
      domMessage("😢 Oopsieeee!! You Lose 😢");
      document.querySelector(".chances").textContent = "❌ No Lives Left ❌";
    }
  }

  // If user entered a higher guess
  else if (guess > number) {
    if (chances > 1) {
      domMessage("🙋‍♂️ Guess a lower number 🙋‍♀️");
      chances--;
      document.querySelector(".chances").textContent = chances;
    } else {
      domMessage("😢 Oopsieeee!! You Lose 😢");
      document.querySelector(".chances").textContent = "❌ No Lives Left ❌";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  chances = 12;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".guess").textContent = "?";
  domMessage("🤷‍♀️ Make Your Guess... 🤷‍♂️ ");
  document.querySelector(".chances").textContent = "12";
  document.querySelector(".guessedNumber").value = "";
  document.querySelector(".guessedNumber").disabled = false;
  document.querySelector(".check").disabled = false;
  document.querySelector(".check").textContent = "Check!";

  // styling back

  document.querySelector("html").style.backgroundColor = "black";
  document.querySelector(".guess").style.backgroundColor = "white";
  document.querySelector(".guess").style.border = "0";
  document.querySelector(".break").style.borderColor = "white";
  // document.querySelector(".guessedNumber").style.display = "auto";
  document.querySelector(".guessedNumber").style.backgroundColor = "black";
  document.querySelector(".guessedNumber").style.borderWidth = "2px";
  document.querySelector(".rule").style.color = "orangered";
  // document.querySelector(".check").style.display = "auto";
  document.querySelector(".check").style.backgroundColor = "white";
  document.querySelector(".check").style.color = "black";
});
