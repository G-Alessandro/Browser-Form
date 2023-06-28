import './style.css';
import { inputEvent, addShowPasswordBtn, passwordError } from './function';
import countryOptions from './country-list';

const body = document.getElementsByTagName('body')[0];

const form = document.createElement('form');
form.setAttribute('novalidate', '');
body.appendChild(form);

const container = document.createElement('div');
container.classList.add('container');
form.appendChild(container);

// Email
const emailLabel = document.createElement('label');
emailLabel.setAttribute('for', 'email');
container.appendChild(emailLabel);
emailLabel.innerText = 'Email :';

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('autocomplete', 'email');
emailInput.setAttribute('required', '');
container.appendChild(emailInput);

const emailError = document.createElement('div');
emailError.setAttribute('id', 'email-error');
emailError.setAttribute('aria-live', 'polite');
container.appendChild(emailError);

['click', 'input', 'keydown'].forEach((event) => emailInput.addEventListener(event, () => {
  inputEvent(emailInput, emailError);
}));

// Country
const countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'country');
container.appendChild(countryLabel);
countryLabel.innerText = 'Country :';

const countrySelect = document.createElement('select');
countrySelect.setAttribute('id', 'country');
countrySelect.setAttribute('name', 'country');
countrySelect.setAttribute('autocomplete', 'country-name');
countrySelect.setAttribute('required', '');
container.appendChild(countrySelect);
countryOptions();

const countryError = document.createElement('div');
countryError.setAttribute('id', 'country-error');
countryError.setAttribute('aria-live', 'polite');
container.appendChild(countryError);

['click', 'change', 'keydown'].forEach((event) => countrySelect.addEventListener(event, () => {
  inputEvent(countrySelect, countryError);
}));

// Zip code
const zipCodeLabel = document.createElement('label');
zipCodeLabel.setAttribute('for', 'zip');
container.appendChild(zipCodeLabel);
zipCodeLabel.innerText = 'Zip code :';

const zipCodeInput = document.createElement('input');
zipCodeInput.setAttribute('type', 'text');
zipCodeInput.setAttribute('id', 'zip');
zipCodeInput.setAttribute('name', 'zip');
zipCodeInput.setAttribute('autocomplete', 'postal-code');
zipCodeInput.setAttribute('minlength', '5');
zipCodeInput.setAttribute('maxlength', '9');
zipCodeInput.setAttribute('required', '');
container.appendChild(zipCodeInput);

const zipCodeError = document.createElement('div');
zipCodeError.setAttribute('id', 'zip-error');
zipCodeError.setAttribute('aria-live', 'polite');
container.appendChild(zipCodeError);

['click', 'input', 'keydown'].forEach((event) => zipCodeInput.addEventListener(event, () => {
  inputEvent(zipCodeInput, zipCodeError);
}));

// Password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
container.appendChild(passwordLabel);
passwordLabel.innerText = 'Password :';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('name', 'password');
passwordInput.setAttribute('autocomplete', 'new-password');
passwordInput.setAttribute('minlength', '8');
passwordInput.setAttribute('maxlength', '16');
passwordInput.setAttribute('pattern', '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Z0-9]+$/');
passwordInput.setAttribute('required', '');
container.appendChild(passwordInput);

addShowPasswordBtn(passwordLabel, passwordInput);

// Error container
const errorContainer = document.createElement('div');
errorContainer.classList.add('error-container');
container.appendChild(errorContainer);
// All type of error
const enterPasswordError = document.createElement('div');
enterPasswordError.setAttribute('id', 'enter-password-error');
enterPasswordError.classList.add('input-error');
enterPasswordError.setAttribute('aria-live', 'polite');
enterPasswordError.style.display = 'none';
enterPasswordError.innerText = 'You need to enter a Password';
errorContainer.appendChild(enterPasswordError);

const lowercaseError = document.createElement('div');
lowercaseError.setAttribute('id', 'lowercase-error');
lowercaseError.classList.add('input-error');
lowercaseError.setAttribute('aria-live', 'polite');
lowercaseError.style.display = 'none';
lowercaseError.innerText = 'It must have at least one lowercase';
errorContainer.appendChild(lowercaseError);

const uppercaseError = document.createElement('div');
uppercaseError.setAttribute('id', 'uppercase-error');
uppercaseError.classList.add('input-error');
uppercaseError.setAttribute('aria-live', 'polite');
uppercaseError.style.display = 'none';
uppercaseError.innerText = 'It must have at least one uppercase';
errorContainer.appendChild(uppercaseError);

const numberError = document.createElement('div');
numberError.setAttribute('id', 'numbers-error');
numberError.classList.add('input-error');
numberError.setAttribute('aria-live', 'polite');
numberError.style.display = 'none';
numberError.innerText = 'It must have at least one numbers';
errorContainer.appendChild(numberError);

const tooShortError = document.createElement('div');
tooShortError.setAttribute('id', 'too-short-error');
tooShortError.classList.add('input-error');
tooShortError.setAttribute('aria-live', 'polite');
tooShortError.style.display = 'none';
tooShortError.innerText = 'Must have at least 8 characters';
errorContainer.appendChild(tooShortError);

['click', 'input', 'keydown'].forEach((event) => passwordInput.addEventListener(event, () => {
  passwordError(passwordInput);
}));

// Confirm Password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirm-password');
container.appendChild(confirmPasswordLabel);
confirmPasswordLabel.innerText = 'Confirm Password :';

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.setAttribute('type', 'password');
confirmPasswordInput.setAttribute('id', 'confirm-password');
confirmPasswordInput.setAttribute('name', 'confirm-password');
confirmPasswordInput.setAttribute('autocomplete', 'new-password');
confirmPasswordInput.setAttribute('minlength', '8');
confirmPasswordInput.setAttribute('maxlength', '16');
confirmPasswordInput.setAttribute('required', '');
container.appendChild(confirmPasswordInput);

addShowPasswordBtn(confirmPasswordLabel, confirmPasswordInput);

const confirmPasswordError = document.createElement('div');
confirmPasswordError.setAttribute('id', 'zip-error');
confirmPasswordError.setAttribute('aria-live', 'polite');
container.appendChild(confirmPasswordError);

['click', 'input', 'keydown'].forEach((event) => confirmPasswordInput.addEventListener(event, () => {
  inputEvent(confirmPasswordInput, confirmPasswordError);
}));

// Submit button
const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
container.appendChild(submitBtn);
submitBtn.innerText = 'Confirm';

// form.addEventListener('submit', (e) => {
// if (!email.validity.valid) {
//   showError(email, emailError);
// }
// e.preventDefault();
// });

// Background credit
const backgroundCredit = document.createElement('a');
backgroundCredit.setAttribute('href', 'https://www.freepik.com/free-vector/living-room-interior-with-sofa-tv-apartment_9668869.htm#from_view=detail_author');
backgroundCredit.setAttribute('target', '_blank');
body.appendChild(backgroundCredit);
backgroundCredit.innerText = 'Background Image by upklyak on Freepik';

console.log('test');
