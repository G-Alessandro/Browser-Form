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

function zipCodeError(input, inputError) {
  const error = inputError;
  if (input.validity.valueMissing) {
    error.innerText = 'You need to enter a Zip Code';
  } else if (input.validity.tooShort) {
    error.innerText = 'Must contain at least 5 characters';
  }
}

function inputEvent(input, inputError) {
  const error = inputError;
  if (input.validity.valid) {
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
    if (input.name === 'zip') {
      zipCodeError(input, inputError);
    }
  }
}

export default inputEvent;
