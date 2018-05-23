var hangmanGame = {
    newWord: ["homer", "classroom", "coffee", "phone"],
    // word: ["c", "o", "f", "f", "e", "e"],
    answerArray: [],
    remainingLetters: 0,
    guessesAvailable: 10,
    correctGuesses: function () {

        for (var j = 0; j < gameWord.length; j++) {
            if (gameWord[j] === guess) {
                this.answerArray[j] = guess;
                this.remainingLetters--;
            }
        }
        // console.log(this.answerArray)
        if (this.remainingLetters === 0) {
            alert("YOU WIN");
            // newWord2 = this.newWord[Math.floor(Math.random() * this.newWord.length)];
            // word = newWord2.toString().split("");

            resetGame();
            // console.log(newWord3.split(""))
        }
    },
    incorrectGuesses: function () {
        this.guessesAvailable -= 1;
        if (this.guessesAvailable === 0) {
            alert("YOU LOSE")
            resetGame();
        }
        // console.log(this.guessesAvailable);
    }

}

function resetGame() {

   
    
    word = hangmanGame.newWord[Math.floor(Math.random() * hangmanGame.newWord.length)];
    gameWord = word.toString().split("");

    
    for (var i = 0; i < gameWord.length; i++) {
        hangmanGame.answerArray[i] = "_";
    }
    
    console.log(gameWord);

    
    hangmanGame.remainingLetters = hangmanGame.answerArray.length;
    hangmanGame.guessesAvailable = 10;

   
}



resetGame();

    document.onkeyup = function (event) {
        var userGuess = event.key;
        guess = userGuess;


        if (gameWord.includes(guess)) {
            hangmanGame.correctGuesses();
            document.getElementById("letters").innerHTML = "THE WORD IS: " + hangmanGame.answerArray;
        } else {
            hangmanGame.incorrectGuesses();
            document.getElementById("lives").innerHTML = "LIVES REMAINING: " + hangmanGame.guessesAvailable;
        }


    };