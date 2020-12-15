const userInput = document.getElementsByClassName('userInput')[0];

userInput.focus();
const secretWord = 'bruh';


userInput.addEventListener('keyup', function(event) {
    if(event.key == 'Enter') {
        if(userInput.value == secretWord) {
            console.log("You got the secret word right");
        }
        userInput.value = '';
    }    
});



