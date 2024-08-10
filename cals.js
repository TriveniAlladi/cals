function appendValue(value) {
    document.getElementById("result").value += value;
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function deleteLast() {
    let current = document.getElementById("result").value;
    document.getElementById("result").value = current.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        alert("Invalid calculation");
    }
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
}
