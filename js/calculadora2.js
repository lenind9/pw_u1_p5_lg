let numero1 = '';
let numero2 = '';
let operacionActual = '';

function asignarNumero(valor) {
    if (operacionActual === '') {
        numero1 += valor;
        document.getElementById('resultado').innerText = numero1;
    } else {
        numero2 += valor;
        document.getElementById('resultado').innerText = numero2;
    }
}

function agregarOperacion(operacion) {
    operacionActual = operacion;
}

function calcular() {
    let resultado = '';
    numero1 = parseFloat(numero1)
    numero2 = parseFloat(numero2)
    switch (operacionActual) {
        case '+':
            resultado = numero1 + numero2;
            break;
        case '-':
            resultado = numero1 - numero2;
            break;
        case '*':
            resultado = numero1 * numero2;
            break;
        case '/':
            if (numero2 !== 0) {
                resultado = numero1 / numero2;
            } else {
                resultado = 'Error';
            }
            break;
        case '%':
            resultado = numero1 % numero2;
            break;
    }
    actualizarLabel(resultado);
}

function resetear() {
    numero1 = '';
    numero2 = '';
    operacionActual = '';
    document.getElementById('resultado').innerText = '';
}

function actualizarLabel(valor) {
    document.getElementById('resultado').innerText = valor;
}