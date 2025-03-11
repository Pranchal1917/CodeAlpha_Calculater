let display = document.getElementById("display");

function appendValue(value) {
    if (value === "+/-") {
        display.value = display.value ? String(-1 * parseFloat(display.value)) : "";
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}