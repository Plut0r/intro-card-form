const form = document.getElementsByTagName('form')[0];
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.querySelector('.error');

   email.addEventListener('input', function (event) {
    if (email.validity.valid) {
      emailError.textContent = '';  
    } else {
      showError();
    }
  });

  form.addEventListener('submit', function (event) {
    if(!email.validity.valid) {
      event.preventDefault();
    }
  });

  function showError() {
    if(email.validity.valueMissing) {
     emailError.textContent = 'You need to enter an e-mail address.';
    } else if(email.validity.typeMismatch) {
      emailError.textContent = 'Looks like this is not an email';
  }
}