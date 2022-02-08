const form  = document.getElementById('createAccountForm');

const passwordInput = document.getElementById('password');
const passwordError = document.getElementById('errorSpan');

passwordInput.addEventListener('input', function (event) {

    if (passwordInput.validity.valid) {
        passwordError.textContent = '';
        passwordError.className = 'errorMessage';
    }
    else {
        showError();
    }
});

form.addEventListener('submit', function (event) {
    if(!passwordInput.validity.valid) {
      showError();
      event.preventDefault();
    }
});

function showError() {
    if(passwordInput.validity.valueMissing) {
        passwordError.textContent = 'You need to enter a password.';
    } 
    else if(passwordInput.validity.typeMismatch) {
        passwordError.textContent = 'Entered value needs to be a password';
    } 
    passwordError.className = 'errorMessage active';

}
