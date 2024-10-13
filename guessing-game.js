function guessingGame() {
    const num =Math.floor(Math.random() * 100);
    let numOfGuesses = 0;
    let won =false;
    return function IsCorrectNum(guess) {
        if (isNaN(guess) || guess < 0 || guess > 99) {
            return "Please enter a valid number between 0 and 99.";
        }
        numOfGuesses++;
        if(won) return "The game is over, you already won!"
        if (guess === num){
            won=true;
            return `You win! You found ${num} in ${numOfGuesses} guesses.`
        } else if(guess < num){
            return `${guess} is too low!`
        } else{
            return `${guess} is too high!`
        }
    };
}

module.exports = { guessingGame };
