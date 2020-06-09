function calculateTriangle() {
    var height = document.getElementById("tutorial-1-input-1").value;
    var base = document.getElementById("tutorial-1-input-2").value;
    document.getElementById("tutorial-1-result").innerHTML = height * base / 2;
}

function calculate(method) {
    if (method == "multiply") {
        multiply();
    } else if (method == "divide") {
        divide();
    } else {
        alert("Method " + method + " is unknown method.")
    }
}

function multiply() {
    var x = parseInt(document.getElementById("tutorial-2-input-1").value);
    var y = parseInt(document.getElementById("tutorial-2-input-2").value);

    document.getElementById("tutorial-2-result").innerHTML = x * y;
}

function divide() {
    var x = parseInt(document.getElementById("tutorial-2-input-1").value);
    var y = parseInt(document.getElementById("tutorial-2-input-2").value);

    if (y == 0) {
        alert("2nd number cannot be zero");
        return;
    }

    document.getElementById("tutorial-2-result").innerHTML = x / y;
}