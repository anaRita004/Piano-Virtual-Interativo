// Selecionando os elementos DOM necessários
const teclas = document.querySelectorAll('.teclas');
const checkbox = document.querySelector('.caixa_de_selecao');
const interruptores = document.querySelector('.interruptores');
const todasTeclas = document.querySelector('.teclas-desativadas');

const reproducao = (som) => {
    const audio = new Audio(`../sons/${som}.wav`);
    audio.play();
};

const clickMaodown = (tecla) => {
    reproducao(tecla.getAttribute('data-nota'));

    if (tecla.classList.contains('pretas')) {
        tecla.classList.add('preto-pressionando');
        return;
    }
    tecla.style.background = '#ddd';
};

const clickMaoup = (tecla) => {
    if (tecla.classList.contains('pretas')) {
        tecla.classList.remove('preto-pressionando');
        return;
    }
    tecla.style.background = 'white';
};

teclas.forEach((tecla) => {
    tecla.addEventListener('mousedown', () => clickMaodown(tecla));
    tecla.addEventListener('mouseup', () => clickMaoup(tecla));
});

checkbox.addEventListener('change', ({ target }) => {
    if (target.checked) {
        interruptores.classList.add('interruptores--ativos');
        todasTeclas.classList.remove('teclas-desativadas');
        return;
    }

    interruptores.classList.remove('interruptores--ativos');
    todasTeclas.classList.add('teclas-desativadas');
});
const keyDownMapper = {
    "Tab": () => clickMaodown(teclas[0]),
    "1": () => clickMaodown(teclas[1]),
    "q": () => clickMaodown(teclas[2]),
    "2": () => clickMaodown(teclas[3]),
    "w": () => clickMaodown(teclas[4]),
    "e": () => clickMaodown(teclas[5]),
    "4": () => clickMaodown(teclas[6]),
    "r": () => clickMaodown(teclas[7]),
    "5": () => clickMaodown(teclas[8]),
    "t": () => clickMaodown(teclas[9]),
    "6": () => clickMaodown(teclas[10]),
    "y": () => clickMaodown(teclas[11]),
    "u": () => clickMaodown(teclas[12]),
    "8": () => clickMaodown(teclas[13]),
    "i": () => clickMaodown(teclas[14]),
    "9": () => clickMaodown(teclas[15]),
    "o": () => clickMaodown(teclas[16]),
    "p": () => clickMaodown(teclas[17]),
    "-": () => clickMaodown(teclas[18]),
    "[": () => clickMaodown(teclas[19]),
    "=": () => clickMaodown(teclas[20]),
    "]": () => clickMaodown(teclas[21]),
    "Backspace": () => clickMaodown(teclas[22]),
    "\\": () => clickMaodown(teclas[23]),
};

const keyUpMapper = {
    "Tab": () => clickMaoup(teclas[0]),
    "1": () => clickMaoup(teclas[1]),
    "q": () => clickMaoup(teclas[2]),
    "2": () => clickMaoup(teclas[3]),
    "w": () => clickMaoup(teclas[4]),
    "e": () => clickMaoup(teclas[5]),
    "4": () => clickMaoup(teclas[6]),
    "r": () => clickMaoup(teclas[7]),
    "5": () => clickMaoup(teclas[8]),
    "t": () => clickMaoup(teclas[9]),
    "6": () => clickMaoup(teclas[10]),
    "y": () => clickMaoup(teclas[11]),
    "u": () => clickMaoup(teclas[12]),
    "8": () => clickMaoup(teclas[13]),
    "i": () => clickMaoup(teclas[14]),
    "9": () => clickMaoup(teclas[15]),
    "o": () => clickMaoup(teclas[16]),
    "p": () => clickMaoup(teclas[17]),
    "-": () => clickMaoup(teclas[18]),
    "[": () => clickMaoup(teclas[19]),
    "=": () => clickMaoup(teclas[20]),
    "]": () => clickMaoup(teclas[21]),
    "Backspace": () => clickMaoup(teclas[22]),
    "\\": () => clickMaoup(teclas[23]),
};

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (keyDownMapper[key]) {
        event.preventDefault();
        keyDownMapper[key]();
    }
});

document.addEventListener('keyup', (event) => {
    const key = event.key;
    if (keyUpMapper[key]) {
        event.preventDefault();
        keyUpMapper[key]();
    }
});

