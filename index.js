let inputScreen = "0";
let result = 0;

let inputScreenDisplay = document.getElementById('input-screen');
let displayResult = document.getElementById('result');


// function to display inputs on screen
function inputKey(x) {
    if ( inputScreen == "0" || result != 0) {
        inputScreen = x
        result = 0;
        inputScreenDisplay.innerHTML = inputScreen;
        displayResult.innerHTML = "";
    } else {
        inputScreen += x
        inputScreenDisplay.innerHTML = inputScreen;;
    }
}


// function to add operators
function inputOperator(x) {
    if (inputScreen == "0" & (x == "+" || x == "-")) {
        inputScreen = x;
        inputScreenDisplay.innerHTML = inputScreen;
    } else if (result != 0) {
        inputScreen = result.toString() + x;
        inputScreenDisplay.innerHTML = inputScreen;
        result = 0;
        displayResult.innerHTML = "";
    } else {
        inputScreen += x;
        inputScreenDisplay.innerHTML = inputScreen;
    }
}


// function to clear and delete input display
function deleteAndClear(x) {
    if (x == "delete" & inputScreen.length == 1 & inputScreen != "0") {
        inputScreen = "0";
        inputScreenDisplay.innerHTML = inputScreen;
    } else if (x == "delete" & inputScreen.length != 1  & result == 0) {
        inputScreen = inputScreen.slice(0, -1);
        inputScreenDisplay.innerHTML = inputScreen;
    } else if ((x == "delete" & result != 0 & inputScreen != "0") || x == "clear") {
        inputScreen = "0";
        result = 0;
        displayResult.innerHTML = "";
        inputScreenDisplay.innerHTML = inputScreen;
    }
}


// function to compute the display expression
function equalTo() {
    if (inputScreen == "0") {
        inputScreenDisplay.innerHTML = inputScreen;
    } else {
        result = eval(inputScreen);
        displayResult.innerHTML = result;
    }
}