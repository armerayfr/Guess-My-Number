'use strict';
const documents = {
  displayMessage: function (message) {
    return (document.querySelector('.message').textContent = message);
  },
  displayNumber: function (number) {
    return (document.querySelector('.number').textContent = number);
  },
  displayScore: function (score) {
    return (document.querySelector('.score').textContent = score);
  },
  styleBackgroundColor: function (style) {
    return (document.querySelector('body').style.backgroundColor = style);
  },
  styleWidth: function (style) {
    return (document.querySelector('.number').style.width = style);
  },
};

const valueStateVariabel = {
  randomNumber: function () {
    return Math.trunc(Math.random() * 20) + 1;
  },
  initScore: function () {
    return 20;
  },
};

let secretNumber = valueStateVariabel.randomNumber();
let score = valueStateVariabel.initScore();
let highscore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    // When number 0
    documents.displayMessage('⛔ No number!');
  }
  // When number matchs
  else if (guess === secretNumber) {
    documents.displayNumber(secretNumber);
    documents.displayMessage('🎉 Correct Number!');
    documents.styleBackgroundColor('#60b347');
    documents.styleWidth('30rem');

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When Number does not Match
  } else if (guess !== secretNumber) {
    if (score > 1) {
      documents.displayMessage(
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      documents.displayScore(score);
    } else {
      documents.styleBackgroundColor('#e30e02');
      documents.displayMessage('😭 You lost the game');
      documents.displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = valueStateVariabel.randomNumber();
  score = valueStateVariabel.initScore();
  documents.displayMessage('Start guessing...');
  documents.displayScore(score);
  documents.styleBackgroundColor('#222');
  documents.styleWidth('15rem');
  documents.displayNumber('?');
  document.querySelector('.guess').value = '';
});
