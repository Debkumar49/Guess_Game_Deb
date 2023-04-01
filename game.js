
'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.score_label').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
    const input_number = Number(document.querySelector('.guess_number').value);
    if (score > 1) {
        if (!input_number) {
            document.querySelector('.message').textContent = '🛑No Number, please input a number !!'
        }
        else if (input_number === secretNumber) {
            document.querySelector('.message').textContent = '✔Correct Answer';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.background = '#32CD32';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.high_score_label').textContent = highscore;
            }
        }
        else if (input_number > secretNumber) {
            score--;
            document.querySelector('.score_label').textContent = score;
            document.querySelector('.message').textContent = '📈Too High';
        }
        else {
            score--;
            document.querySelector('.score_label').textContent = score;
            document.querySelector('.message').textContent = '📉Too Low';
        }
    }
    else {
        document.querySelector('.message').textContent = 'You have lost the game ! Try again';
    }
});

document.querySelector('.again_btn').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score_label').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess_number').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
});

