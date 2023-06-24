import './style.css';

const body = document.getElementsByTagName('body')[0];

const form = document.createElement('form');
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
emailLabel.setAttribute('id', 'email');
emailLabel.setAttribute('name', 'email');
container.appendChild(emailInput);

// Country
const countryLabel = document.createElement('label');
countryLabel.setAttribute('for', 'country');
container.appendChild(countryLabel);
countryLabel.innerText = 'Country :';

const countryInput = document.createElement('input');
countryInput.setAttribute('type', 'country');
countryInput.setAttribute('id', 'country');
countryInput.setAttribute('name', 'country');
container.appendChild(countryInput);

// Zip code
const zipCodeLabel = document.createElement('label');
zipCodeLabel.setAttribute('for', 'zip');
container.appendChild(zipCodeLabel);
zipCodeLabel.innerText = 'Zip code :';

const zipCodeInput = document.createElement('input');
zipCodeInput.setAttribute('type', 'text');
zipCodeInput.setAttribute('id', 'zip');
zipCodeInput.setAttribute('name', 'zip');
container.appendChild(zipCodeInput);

// Password
const passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for', 'password');
container.appendChild(passwordLabel);
passwordLabel.innerText = 'Password :';

const passwordInput = document.createElement('input');
passwordInput.setAttribute('type', 'password');
passwordInput.setAttribute('id', 'password');
passwordInput.setAttribute('name', 'password');
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
container.appendChild(confirmPasswordInput);

// Submit button
const submitBtn = document.createElement('button');
submitBtn.setAttribute('type', 'submit');
container.appendChild(submitBtn);
submitBtn.innerText = 'Confirm';

// Background credit
const backgroundCredit = document.createElement('a');
backgroundCredit.setAttribute('href', 'https://www.freepik.com/free-vector/living-room-interior-with-sofa-tv-apartment_9668869.htm#from_view=detail_author');
backgroundCredit.setAttribute('target', '_blank');
body.appendChild(backgroundCredit);
backgroundCredit.innerText = 'Background Image by upklyak on Freepik';

console.log('test');
