let input = "";
const maxDigits = 6;
const unlockCodes = {
  "445937": "21",
  "961038": "Light Blue Star = 4"
};

function pressKey(key) {
  if (input.length < maxDigits) {
    input += key;
    updateDisplay(input);
  }
}

function clearDisplay() {
  input = "";
  resetDisplay();
}

function updateDisplay(message) {
  const display = document.getElementById("display");
  display.textContent = message;
}

function resetDisplay() {
  const display = document.getElementById("display");
  display.textContent = "Enter Code";
  display.className = "display";
}

function submitCode() {
  const display = document.getElementById("display");
  if (input in unlockCodes) {
    display.textContent = "Access Granted";
    display.className = "display flash-green";
    setTimeout(() => {
      display.textContent = unlockCodes[input];
      setTimeout(() => {
        display.classList.add("hidden");
      }, 5000); // Keeps the success message for 5 seconds
    }, 1000); // "Access Granted" shows for 1 second
  } else {
    display.textContent = "Access Denied";
    display.className = "display flash-red";
    setTimeout(() => {
      resetDisplay();
    }, 1000);
  }
}
