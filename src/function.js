function emailError(input, inputError) {
  const error = inputError;
  if (input.validity.valueMissing) {
    error.innerText = 'You need to enter an Email';
  } else if (input.validity.typeMismatch) {
    error.innerText = 'Enter @ followed by the provider name';
  }
}

function countryError(input, inputError) {
  const error = inputError;
  if (input.validity.valueMissing) {
    error.innerText = 'Choose a country';
  }
}

// const email = document.getElementById('email');
function inputEvent(input, inputError) {
  const error = inputError;
  if (input.validity.valid) {
    console.log('valid');
    error.innerText = '';
    error.classList.remove('input-error');
  } else {
    error.classList.add('input-error');
    if (input.name === 'email') {
      emailError(input, inputError);
    }
    if (input.name === 'country') {
      countryError(input, inputError);
    }
  }
}

export default inputEvent;
