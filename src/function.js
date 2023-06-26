function emailError(input, inputError) {
  // const inputValue = input;
  const error = inputError;
  if (input.validity.valueMissing) {
    error.innerText = 'You need to enter an Email';
  } else if (input.validity.typeMismatch) {
    error.innerText = 'Entered value needs to be an Email';
  }
}

// const email = document.getElementById('email');
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
  }
}

export default inputEvent;
