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
    const displayElement = document.getElementById("display");
    const numberDisplay = document.getElementById("number-display");

    if (input === "445937") {
        // Correct code: Display "Access Granted"
        updateDisplay("Access Granted");

        // Fade out "Access Granted" and fade in "21"
        setTimeout(() => {
            displayElement.style.opacity = "0"; // Fade out the display text
            setTimeout(() => {
                displayElement.style.display = "none"; // Hide the display element
                numberDisplay.style.display = "block"; // Show the "21" element
                numberDisplay.style.opacity = "1"; // Fade in the "21"
            }, 1000); // Delay for fade-out animation
        }, 2000); // Delay after showing "Access Granted"
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

// Utility function to update the display message
function updateDisplay(message) {
    const displayElement = document.getElementById("display");
    displayElement.style.opacity = "1"; // Ensure it's visible
    displayElement.style.display = "block"; // Ensure it's shown
    displayElement.innerText = message;
}
