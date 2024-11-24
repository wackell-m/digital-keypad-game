let input = "";

function pressKey(key) {
    if (input.length < 6) {
        input += key;
        updateDisplay(input);
    }
}

function clearDisplay() {
    input = "";
    updateDisplay("Enter Code");
}

function checkCode() {
    if (input === "445937") { // Updated correct password
        updateDisplay("Access Granted");

        // Show the Next button
        document.getElementById("next-button").style.display = "block";
    } else {
        updateDisplay("Access Denied");
        input = "";
    }
}

function showNumber() {
    // Hide the keypad and display the number
    document.querySelector(".keypad-container").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    document.getElementById("number-display").style.display = "block";
}

function updateDisplay(message) {
    document.getElementById("display").innerText = message;
}
