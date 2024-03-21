'use strict';

let random = parseInt(Math.random() * 20) + 1;
console.log(random);
let score = parseInt(document.querySelector(".score").textContent);
let highscore = document.querySelector(".highscore").textContent;

// Deduct from score 
function deduction(message) {
    if (score > 1) {
        score -= 1;
        document.querySelector(".score").textContent = `${score}`;
    } 
    else {      
        document.querySelector(".score").textContent = `0`;
        lose();
    }
    document.querySelector(".message").textContent = message;

    
}

// Win case 
function win() {
    document.body.style.backgroundColor = '#60b347';
    document.querySelector(".number").textContent = `${random}`;
    document.querySelector(".number").style.width = `25rem`
    document.querySelector(".message").textContent = "You win!";
    if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = `${score}`;
    }
}

// lose case 
function lose() {
    document.body.style.backgroundColor = '#F00';
    document.querySelector(".message").textContent = "You lost!";
}

// Check button 
document.querySelector(".check").addEventListener("click", function() {
    const guess = Number(document.querySelector(".guess").value);
    if (!guess) {
        document.querySelector(".message").textContent = "No Number";
    } else if (guess == random) {
        win();
    } else if (guess > random) {
        deduction("Too high");
    } else {
        deduction("Too low");
    }
});

// Again button 
document.querySelector(".again").addEventListener("click", function() {
    score = 20;
    document.querySelector(".score").textContent = `${score}`;
    random = parseInt(Math.random() * 20) + 1;
    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".number").textContent = "?";
    document.querySelector(".number").style.width = "15rem"
    document.querySelector(".guess").value = '';
    document.querySelector("body").style.backgroundColor = '#222';
});
