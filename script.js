// JavaScript Code for Digital Keypad
const keys = document.querySelectorAll('.key');
const inputDisplay = document.getElementById('input-display');
const keypad = document.getElementById('keypad');
const message = document.getElementById('message');
const clearButton = document.getElementById('clear');
const submitButton = document.getElementById('submit');

let input = '';
const correctCode = '445937';

// Handle button clicks
keys.forEach(key => {
  key.addEventListener('click', () => {
    if (input.length < 6) {
      input += key.textContent;
      inputDisplay.textContent = input;
    }
  });
});

// Clear input
clearButton.addEventListener('click', () => {
  input = '';
  inputDisplay.textContent = 'Enter Code';
  keypad.style.backgroundColor = 'black'; // Keep background black
  message.textContent = '';
});

// Submit input
submitButton.addEventListener('click', () => {
  if (input === correctCode) {
    keypad.style.backgroundColor = '#28a745'; // Green
    message.textContent = 'Unlocked';
    message.style.color = '#00ff00';
  } else {
    keypad.style.backgroundColor = '#dc3545'; // Red
    message.textContent = 'Incorrect';
    message.style.color = '#00ff00';
  }
});
