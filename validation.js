const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

const enteredEmail = document.getElementById('email');
const errorMessage = document.getElementById('error-message');
const form = document.getElementById('form');
const illustration = document.getElementById('illustration');

form.addEventListener('submit', checkEmail);

function checkEmail(e) {
    if(enteredEmail.value && emailValidationRegex.test(enteredEmail.value)) {
        errorMessage.classList.remove('error-message');
        enteredEmail.classList.remove('error-border');
        illustration.classList.remove('ping__illustration--error');
        enteredEmail.value = null;
    } else {
        e.preventDefault();
        errorMessage.classList.add('error-message');
        enteredEmail.classList.add('error-border');
        illustration.classList.add('ping__illustration--error');
    }
}