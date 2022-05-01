const emailValidationRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //w3resource

const enteredEmail = document.getElementById('email');
const errorMessage1 = document.getElementById('error-message1');
const errorMessage2 = document.getElementById('error-message2');
const form = document.getElementById('form');
const illustration = document.getElementById('illustration');

form.addEventListener('submit', checkEmail);

function checkEmail(e) {
    removeErrorClasses(errorMessage1);
    removeErrorClasses(errorMessage2);
    if(enteredEmail.value && emailValidationRegex.test(enteredEmail.value)) {
        enteredEmail.value = null;
        return;
    }

    if(!enteredEmail.value) {
        e.preventDefault();
        addErrorClasses(errorMessage1);
        return;
    }

    if(!emailValidationRegex.test(enteredEmail.value)) {
        e.preventDefault();
        addErrorClasses(errorMessage2);
        return;
    }
}

function removeErrorClasses(message) {
    message.classList.remove('error-message');
    enteredEmail.classList.remove('error-border');
    illustration.classList.remove('ping__illustration--error');
}

function addErrorClasses(message) {
    message.classList.add('error-message');
    enteredEmail.classList.add('error-border');
    illustration.classList.add('ping__illustration--error');
}