// Initialize the game
let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
    // Get user input
    let userGuess = document.getElementById("guessInput").value;
    attempts++;

    // Check the user's guess
    if (userGuess == randomNumber) {
        document.getElementById("result").innerText = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        resetGame();
    } else if (userGuess > randomNumber) {
        document.getElementById("result").innerText = "Too high! Try again.";
    } else {
        document.getElementById("result").innerText = "Too low! Try again.";
    }
}

function resetGame() {
    // Reset the game
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    document.getElementById("guessInput").value = '';
    document.getElementById("result").innerText = '';
}
