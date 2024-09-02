function clearDisplay() {
    document.getElementById('display').innerText = '';
}

function backspace() {
    let display = document.getElementById('display').innerText;
    document.getElementById('display').innerText = display.slice(0, -1);
}

function appendCharacter(character) {
    document.getElementById('display').innerText += character;
}

function calculate() {
    try {
        let display = document.getElementById('display').innerText;
        display = display.replace('%', '/100');
        let result = eval(display);
        document.getElementById('display').innerText = result;
    } catch (error) {
        document.getElementById('display').innerText = 'Error';
    }
}
