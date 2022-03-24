'use strict';

let correctNumber = Math.floor(Math.random() * 20) + 1;
let score = document.querySelector('.score').textContent;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const setNumberWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);

  //Empty Input
  if (!guessedNumber) {
    displayMessage('Not Valid Input');
  }
  // Wrong guess
  else if (guessedNumber !== correctNumber) {
    if (score > 1) {
      displayMessage(guessedNumber > correctNumber ? 'Too High!' : 'Too Low');
      score = score - 1;
    } else {
      displayMessage('You Lose!');
      score = 0;
    }
    displayScore(score);
  }
  //Right Guess
  else {
    displayMessage('Congrats you won the game!');
    score = score + 1;
    displayScore(score);
    document.querySelector('.number').textContent = correctNumber;
    setBackgroundColor('#60b347');
    setNumberWidth('30rem');
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

//Reset Button Logic
document.querySelector('.again').addEventListener('click', function () {
  correctNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  setBackgroundColor('#222');
  setNumberWidth('15rem');
  document.querySelector('.number').textContent = '?';
  displayMessage('Start guessing...');
  score = 20;
  displayScore(score);
});
