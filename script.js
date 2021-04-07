'use strict';

// Define the secret number

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// sets this random number on .number class
// document.querySelector('.number').textContent = secretNumber;

let score = 20;
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


// Check the number button

document.querySelector('.check').addEventListener('click', function (){
    const guess = Number(document.querySelector('.guess').value);

    // when number is not entered, text changes.
    if(!guess) {
        // document.querySelector('.message').textContent = 'No number!';
        displayMessage('No Number!');
    
    
    // when player wins
    } else if ( guess === secretNumber) {
        // document.querySelector('.message').textContent = 'Correct Number!';
        displayMessage('Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        
        // when player wins, bg color changes to green
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    
    //when guess is wrong
    } else if(guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too Low!';
            displayMessage(guess > secretNumber ? 'Too high!' : 'Too Low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'You lost the game!';
            displayMessage('You lost the game!'); 
            document.querySelector('.score').textContent = 0;
        }
    }
});   
    
    
    
    // else if ( guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too high!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!'; 
    //         document.querySelector('.score').textContent = 0;
    //     }


    // // when number is too low
    // } else if ( guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'Too low!';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You lost the game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }



// Play again

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    // secret number restored
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //restored message, number, and guess input field
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.number').style.width = '15rem';


});