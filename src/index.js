import './style.css';
import inputEvent from './function';
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
emailInput.setAttribute('required', '');
container.appendChild(emailInput);

const emailError = document.createElement('div');
emailError.setAttribute('id', 'email-error');
emailError.setAttribute('aria-live', 'polite');
container.appendChild(emailError);

emailInput.addEventListener('input', () => {
  inputEvent(emailInput, emailError);
});

// Country
const countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'country');
container.appendChild(countryLabel);
countryLabel.innerText = 'Country :';

const countryInput = document.createElement('select');
countryInput.setAttribute('id', 'country');
countryInput.setAttribute('name', 'country');
countryInput.setAttribute('required', '');
container.appendChild(countryInput);
countryOptions();

const countryError = document.createElement('div');
countryError.setAttribute('id', 'country-error');
countryError.setAttribute('aria-live', 'polite');
container.appendChild(countryError);

const country = document.getElementById('email');
country.addEventListener('select', () => {
  inputEvent(countryInput, countryError);
});

// Zip code
const zipCodeLabel = document.createElement('label');
zipCodeLabel.setAttribute('for', 'zip');
container.appendChild(zipCodeLabel);
zipCodeLabel.innerText = 'Zip code :';

const zipCodeInput = document.createElement('input');
zipCodeInput.setAttribute('type', 'text');
zipCodeInput.setAttribute('id', 'zip');
zipCodeInput.setAttribute('name', 'zip');
zipCodeInput.setAttribute('required', '');
container.appendChild(zipCodeInput);

const zipCodeError = document.createElement('div');
zipCodeError.setAttribute('id', 'email-error');
zipCodeError.setAttribute('aria-live', 'polite');
container.appendChild(zipCodeError);

zipCodeInput.addEventListener('input', () => {
  inputEvent(zipCodeInput, zipCodeError);
});
// Password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
container.appendChild(passwordLabel);
passwordLabel.innerText = 'Password :';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('name', 'password');
passwordInput.setAttribute('minlength', '8');
passwordInput.setAttribute('maxlength', '16');
passwordInput.setAttribute('required', '');
container.appendChild(passwordInput);

// Confirm Password
const confirmPasswordLabel = document.createElement('label');
confirmPasswordLabel.setAttribute('for', 'confirm-password');
container.appendChild(confirmPasswordLabel);
confirmPasswordLabel.innerText = 'Confirm Password :';

const confirmPasswordInput = document.createElement('input');
confirmPasswordInput.setAttribute('type', 'password');
confirmPasswordInput.setAttribute('id', 'confirm-password');
confirmPasswordInput.setAttribute('name', 'confirm-password');
confirmPasswordInput.setAttribute('minlength', '8');
confirmPasswordInput.setAttribute('maxlength', '16');
confirmPasswordInput.setAttribute('required', '');
container.appendChild(confirmPasswordInput);

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
