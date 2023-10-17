let buttons = document.getElementsByTagName('button');
let result = document.getElementById('result');
let clearButton = document.getElementById('clear');

clearButton.onclick = function () {
    result.innerText = "0";
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        let input = this.innerText;
        updateDisplay(input);
    }
}

function updateDisplay(input) {
    let currentDisplay = result.innerText;

    if (currentDisplay === "0" || currentDisplay === "Error") {
        if (input !== "AC" && input !== "=") {
            result.innerText = "";
        }
    }

    if (input === "=") {
        try {
            let display = result.innerText;
            result.innerText = eval(display);
        } catch {
            result.innerText = "Error";
        }
    } else if (input === "AC") {
        result.innerText = "0";
    } else {
        result.innerText += input;
    }
}
