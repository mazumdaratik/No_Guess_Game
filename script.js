let lower = 1;
let upper = 50;
let correct_ans = Math.floor(Math.random() * (upper - lower + 1)) + lower;
let chances = 3;
let output = document.getElementById('output');

function checkGuess() {
    let user_guess = parseInt(document.getElementById('userGuess').value);

    if (user_guess < correct_ans) {
        output.textContent = "Correct answer is greater!";
    } else if (user_guess > correct_ans) {
        output.textContent = "Correct answer is smaller!";
    } else {
        output.textContent = `Congratulations! You guessed the correct number (${correct_ans})`;
        document.getElementById('userGuess').disabled = true;
        document.querySelector('button').disabled = true;
    }

    chances--;

    if (chances === 0) {
        output.textContent = `You couldn't guess the correct number. The answer was ${correct_ans}`;
        document.getElementById('userGuess').disabled = true;
        document.querySelector('button').disabled = true;
    }
}
