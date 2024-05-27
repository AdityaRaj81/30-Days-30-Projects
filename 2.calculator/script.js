var screen = document.querySelector('#screen');
var btns = document.querySelectorAll('.btn');

btns.forEach(item => {
    item.addEventListener('click', (e) => {
        let btntext = e.target.innerText;
        if (btntext == 'x') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
});

function sin() {
    screen.value = Math.sin(eval(screen.value));
}

function cos() {
    screen.value = Math.cos(eval(screen.value));
}

function tan() {
    screen.value = Math.tan(eval(screen.value));
}

function pow() {
    screen.value = Math.pow(eval(screen.value), 2);
}

function sqrt() {
    screen.value = Math.sqrt(eval(screen.value));
}

function log() {
    screen.value = Math.log(eval(screen.value));
}

function pi() {
    screen.value = 3.14159265359;
}

function e() {
    screen.value = 2.71828182846;
}

function fact() {
    let num = eval(screen.value);
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    screen.value = f;
}

function backspc() {
    screen.value = screen.value.slice(0, -1);
}

function clearScreen() {
    screen.value = '';
}

function evaluateExpression() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
    }
}
