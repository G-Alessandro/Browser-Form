import './style.css';
import countryOptions from './country-list';
import {
  inputEvent, addShowPasswordBtn, passwordError, confirmPassword,
} from './function';

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

const emailContainer = document.createElement('div');
emailContainer.classList.add('input-container');
container.appendChild(emailContainer);

const emailInput = document.createElement('input');
emailInput.setAttribute('type', 'email');
emailInput.setAttribute('id', 'email');
emailInput.setAttribute('name', 'email');
emailInput.setAttribute('autocomplete', 'email');
emailInput.setAttribute('required', '');
emailContainer.appendChild(emailInput);

const emailError = document.createElement('div');
emailError.setAttribute('id', 'email-error');
emailError.setAttribute('aria-live', 'polite');
emailContainer.appendChild(emailError);

['click', 'input', 'keydown'].forEach((event) => emailInput.addEventListener(event, () => {
  inputEvent(emailInput, emailError);
}));

// Country
const countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'country');
container.appendChild(countryLabel);
countryLabel.innerText = 'Country :';

const countryContainer = document.createElement('div');
countryContainer.classList.add('input-container');
container.appendChild(countryContainer);

const countrySelect = document.createElement('select');
countrySelect.setAttribute('id', 'country');
countrySelect.setAttribute('name', 'country');
countrySelect.setAttribute('autocomplete', 'country-name');
countrySelect.setAttribute('required', '');
countryContainer.appendChild(countrySelect);
countryOptions();

const countryError = document.createElement('div');
countryError.setAttribute('id', 'country-error');
countryError.setAttribute('aria-live', 'polite');
countryContainer.appendChild(countryError);

['click', 'change', 'keydown'].forEach((event) => countrySelect.addEventListener(event, () => {
  inputEvent(countrySelect, countryError);
}));

// Zip code
const zipCodeLabel = document.createElement('label');
zipCodeLabel.setAttribute('for', 'zip');
container.appendChild(zipCodeLabel);
zipCodeLabel.innerText = 'Zip code :';

const zipCodeContainer = document.createElement('div');
zipCodeContainer.classList.add('input-container');
container.appendChild(zipCodeContainer);

const zipCodeInput = document.createElement('input');
zipCodeInput.setAttribute('type', 'text');
zipCodeInput.setAttribute('id', 'zip');
zipCodeInput.setAttribute('name', 'zip');
zipCodeInput.setAttribute('autocomplete', 'postal-code');
zipCodeInput.setAttribute('minlength', '5');
zipCodeInput.setAttribute('maxlength', '9');
zipCodeInput.setAttribute('required', '');
zipCodeContainer.appendChild(zipCodeInput);

const zipCodeError = document.createElement('div');
zipCodeError.setAttribute('id', 'zip-error');
zipCodeError.setAttribute('aria-live', 'polite');
zipCodeContainer.appendChild(zipCodeError);

['click', 'input', 'keydown'].forEach((event) => zipCodeInput.addEventListener(event, () => {
  inputEvent(zipCodeInput, zipCodeError);
}));

// Password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
container.appendChild(passwordLabel);
passwordLabel.innerText = 'Password :';

const passwordShowBtnContainer = document.createElement('div');
passwordShowBtnContainer.classList.add('password-show-input-container');
container.appendChild(passwordShowBtnContainer);

const passwordContainer = document.createElement('div');
passwordContainer.classList.add('input-container');
passwordShowBtnContainer.appendChild(passwordContainer);

const regExPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Z0-9]+$';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('name', 'password');
passwordInput.setAttribute('autocomplete', 'new-password');
passwordInput.setAttribute('minlength', '8');
passwordInput.setAttribute('maxlength', '16');
passwordInput.setAttribute('pattern', regExPattern);
passwordInput.setAttribute('required', '');
passwordContainer.appendChild(passwordInput);

// Error container
const passwordErrorContainer = document.createElement('div');
passwordErrorContainer.classList.add('password-error-container');
passwordContainer.appendChild(passwordErrorContainer);
// All type of error
const enterPasswordError = document.createElement('div');
enterPasswordError.setAttribute('id', 'enter-password-error');
enterPasswordError.classList.add('input-error', 'password-input-error');
enterPasswordError.setAttribute('aria-live', 'polite');
enterPasswordError.style.display = 'none';
enterPasswordError.innerText = 'You need to enter a Password.';
passwordErrorContainer.appendChild(enterPasswordError);

const lowercaseError = document.createElement('div');
lowercaseError.setAttribute('id', 'lowercase-error');
lowercaseError.classList.add('input-error', 'password-input-error');
lowercaseError.setAttribute('aria-live', 'polite');
lowercaseError.style.display = 'none';
lowercaseError.innerText = 'It must have at least one lowercase.';
passwordErrorContainer.appendChild(lowercaseError);

const uppercaseError = document.createElement('div');
uppercaseError.setAttribute('id', 'uppercase-error');
uppercaseError.classList.add('input-error', 'password-input-error');
uppercaseError.setAttribute('aria-live', 'polite');
uppercaseError.style.display = 'none';
uppercaseError.innerText = 'It must have at least one uppercase.';
passwordErrorContainer.appendChild(uppercaseError);

const numberError = document.createElement('div');
numberError.setAttribute('id', 'numbers-error');
numberError.classList.add('input-error', 'password-input-error');
numberError.setAttribute('aria-live', 'polite');
numberError.style.display = 'none';
numberError.innerText = 'It must have at least one numbers.';
passwordErrorContainer.appendChild(numberError);

const specialCharactersError = document.createElement('div');
specialCharactersError.setAttribute('id', 'special-characters-error');
specialCharactersError.classList.add('input-error', 'password-input-error');
specialCharactersError.setAttribute('aria-live', 'polite');
specialCharactersError.style.display = 'none';
specialCharactersError.innerText = 'Must contain only alphanumeric characters.';
passwordErrorContainer.appendChild(specialCharactersError);

const tooShortError = document.createElement('div');
tooShortError.setAttribute('id', 'too-short-error');
tooShortError.classList.add('input-error', 'password-input-error');
tooShortError.setAttribute('aria-live', 'polite');
tooShortError.style.display = 'none';
tooShortError.innerText = 'Must have at least 8 characters.';
passwordErrorContainer.appendChild(tooShortError);

addShowPasswordBtn(passwordShowBtnContainer, passwordInput);

['click', 'input', 'keydown'].forEach((event) => passwordInput.addEventListener(event, () => {
  passwordError(passwordInput);
}));

// Confirm Password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirm-password');
container.appendChild(confirmPasswordLabel);
confirmPasswordLabel.innerText = 'Confirm Password :';

const passConfShowBtnContainer = document.createElement('div');
passConfShowBtnContainer.classList.add('password-show-input-container');
container.appendChild(passConfShowBtnContainer);

const passConContainer = document.createElement('div');
passConContainer.classList.add('input-container');
passConfShowBtnContainer.appendChild(passConContainer);

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.setAttribute('type', 'password');
confirmPasswordInput.setAttribute('id', 'confirm-password');
confirmPasswordInput.setAttribute('name', 'confirm-password');
confirmPasswordInput.setAttribute('autocomplete', 'new-password');
confirmPasswordInput.setAttribute('minlength', '8');
confirmPasswordInput.setAttribute('maxlength', '16');
confirmPasswordInput.setAttribute('required', '');
passConContainer.appendChild(confirmPasswordInput);

const differentPasswordError = document.createElement('div');
differentPasswordError.setAttribute('id', 'different-password-error');
differentPasswordError.classList.add('input-error', 'password-input-error');
differentPasswordError.setAttribute('aria-live', 'polite');
differentPasswordError.style.display = 'none';
differentPasswordError.innerText = 'The password must be the same.';
passConContainer.appendChild(differentPasswordError);

addShowPasswordBtn(passConfShowBtnContainer, confirmPasswordInput);

['click', 'input', 'keydown'].forEach((event) => confirmPasswordInput.addEventListener(event, () => {
  confirmPassword(passwordInput, confirmPasswordInput);
}));

// Submit button
const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
container.appendChild(submitBtn);
submitBtn.innerText = 'Confirm';

form.addEventListener('submit', (e) => {
  inputEvent(emailInput, emailError);
  inputEvent(countrySelect, countryError);
  inputEvent(zipCodeInput, zipCodeError);
  passwordError(passwordInput);
  confirmPassword(passwordInput, confirmPasswordInput);
  e.preventDefault();
});

// Background credit
const backgroundCredit = document.createElement('a');
backgroundCredit.setAttribute('href', 'https://www.freepik.com/free-vector/living-room-interior-with-sofa-tv-apartment_9668869.htm#from_view=detail_author');
backgroundCredit.setAttribute('target', '_blank');
body.appendChild(backgroundCredit);
backgroundCredit.innerText = 'Background Image by upklyak on Freepik';

console.log('test');
