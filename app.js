const screen = document.getElementById("screen");
const buttons = document.querySelectorAll(".calculator button");

// Add click event listeners to the buttons
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.value;

        // Handle different button actions
        if (buttonValue === "clear") {
            screen.value = "";
        } else if (buttonValue === "backspace") {
            screen.value = screen.value.slice(0, -1);
        } else if (buttonValue === "=") {
            try {
                screen.value = eval(screen.value);
            } catch (error) {
                screen.value = "Error";
            }
        } else {
            screen.value += buttonValue;
        }
    });
});