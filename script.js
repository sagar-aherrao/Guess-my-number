'use strict';

let score = 20; 
let highScore = 0;
//let highScore = document.querySelector('.highscore').textContent;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

document.querySelector('.check').addEventListener('click', function() {
    const guessValue = Number(document.querySelector('.guess').value);

    if(!guessValue){
        document.querySelector('.message').textContent = 'Please, Enter valid value';
    } else if (guessValue === secretNumber){

        score = document.querySelector('.score').textContent ;
        document.querySelector('.message').textContent = 'Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        if(score > highScore){
            document.querySelector('.highscore').textContent = score;
        }

    } else if (guessValue > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game'; 
        }   
    } else if (guessValue < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost The Game'; 
        }
    }
});
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score; 
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
   
})
