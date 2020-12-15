const userInput = document.getElementsByClassName('userInput')[0];
const guessResult = document.getElementsByClassName('guessResult')[0];

userInput.focus();
const secretWord = 'bruh';


userInput.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        if(userInput.value !== secretWord) {
            guessResult.innerText = 'Not quite there. Please Try again';
        }else {
            guessResult.innerText = 'You got the secret word right!';
        }

        userInput.value = '';
    }    
});



