let input = "";
const display = document.getElementById("display");

function appendToDisplay(value) {
    input += value;
    display.value = input;
}

function clearDisplay() {
    input = "";
    display.value = "";
}

function calculate() {
    try {
        input = eval(input);
        display.value = input;
    } catch (error) {
        display.value = "Error";
    }
}
