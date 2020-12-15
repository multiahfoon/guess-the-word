const userInput = document.getElementsByClassName('userInput')[0];
const guessResult = document.getElementsByClassName('guessResult')[0];

userInput.focus();
const secretWord = 'bruh';


userInput.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        if(userInput.value !== secretWord) {
            guessResult.innerText = `"${userInput.value}" was not the secret word`;
        }else {
            guessResult.innerText = `You got the secret word "${secretWord}" right!`;
        }
        userInput.value = '';
    }    
});



// make secret word into and array of words

// generate random number to select a random number in wordlist array