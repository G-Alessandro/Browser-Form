function emailError(input, inputError) {
  const error = inputError;
  if (input.validity.valueMissing) {
    error.innerText = 'You need to enter an Email.';
  } else if (input.validity.typeMismatch) {
    error.innerText = 'Enter @ followed by the provider name.';
  }
}

function countryError(input, inputError) {
  const error = inputError;
  if (input.validity.valueMissing) {
    error.innerText = 'Choose a country.';
  }
}

function zipCodeError(input, inputError) {
  const error = inputError;
  if (input.validity.valueMissing) {
    error.innerText = 'You need to enter a Zip Code.';
  } else if (input.validity.tooShort) {
    error.innerText = 'Must contain at least 5 characters.';
  }
}

function passwordError(input) {
  const lowercase = /[a-z]/g;
  const uppercase = /[A-Z]/g;
  const numbers = /[0-9]/g;
  const alphanumeric = /[a-zA-Z0-9]+/;

  const enterPasswordError = document.getElementById('enter-password-error');
  if (input.validity.valueMissing) {
    enterPasswordError.style.display = 'block';
  } else {
    enterPasswordError.style.display = 'none';
  }

  const lowercaseError = document.getElementById('lowercase-error');
  if (!input.value.match(lowercase)) {
    lowercaseError.style.display = 'block';
  } else {
    lowercaseError.style.display = 'none';
  }

  const uppercaseError = document.getElementById('uppercase-error');
  if (!input.value.match(uppercase)) {
    uppercaseError.style.display = 'block';
  } else {
    uppercaseError.style.display = 'none';
  }

  const numberError = document.getElementById('numbers-error');
  if (!input.value.match(numbers)) {
    numberError.style.display = 'block';
  } else {
    numberError.style.display = 'none';
  }

  const specialCharacterError = document.getElementById('special-characters-error');
  if (!input.value.match(alphanumeric)) {
    specialCharacterError.style.display = 'block';
  } else {
    specialCharacterError.style.display = 'none';
  }

  const tooShortError = document.getElementById('too-short-error');
  if (input.validity.tooShort) {
    tooShortError.style.display = 'block';
  } else {
    tooShortError.style.display = 'none';
  }
}

function confirmPassword(inputPassword, inputConfirm) {
  const differentPasswordError = document.getElementById('different-password-error');
  const passwordPattern = inputPassword.value;
  inputConfirm.setAttribute('pattern', passwordPattern);
  if (inputConfirm.validity.patternMismatch || inputConfirm.value.length === 0) {
    differentPasswordError.style.display = 'block';
  } else {
    differentPasswordError.style.display = 'none';
  }
}

function addShowPasswordBtn(parent, input) {
  const button = document.createElement('button');
  button.setAttribute('type', 'button');
  button.setAttribute('alt', 'button to show the written password');
  button.classList.add('show-password');
  parent.appendChild(button);
  const inputTarget = input;
  button.addEventListener('click', () => {
    if (inputTarget.type === 'password') {
      inputTarget.type = 'text';
      button.style.backgroundImage = 'url(./eye-off-outline.svg)';
    } else {
      inputTarget.type = 'password';
      button.style.backgroundImage = 'url(./eye-outline.svg)';
    }
  });
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

export {
  inputEvent, addShowPasswordBtn, passwordError, confirmPassword,
};
