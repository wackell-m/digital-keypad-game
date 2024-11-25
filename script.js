// Initialize the input string to capture the user's input
let input = "";

// Function to handle keypad button presses
function pressKey(key) {
    // Ensure input length does not exceed 6 characters
    if (input.length < 6) {
        input += key;
        updateDisplay(input);
    }
}

// Function to clear the display and reset the input
function clearDisplay() {
    input = ""; // Reset the input string
    updateDisplay("Enter Code"); // Reset display message
}

// Function to check the entered code
function checkCode() {
    if (input === "445937") {
        // Correct code to display "Next"
        updateDisplay("Access Granted");

        // Show the "Next" button
        document.getElementById("next-button").style.display = "block";
    } else if (input === "961038") {
        // Specific code to display the Light Blue Star message
        updateDisplay("Light Blue Star = 4");

        // Clear input after displaying the success message
        input = "";
    } else {
        // Incorrect code
        updateDisplay("Access Denied");

        // Reset the input
        input = "";
    }
}

// Function to handle the "Next" button action
function showNumber() {
    // Hide the keypad container
    document.querySelector(".keypad-container").style.display = "none";

    // Hide the "Next" button
    document.getElementById("next-button").style.display = "none";

    // Show the number display with "21"
    document.getElementById("number-display").style.display = "block";
}

// Utility function to update the display message
function updateDisplay(message) {
    document.getElementById("display").innerText = message;
}
