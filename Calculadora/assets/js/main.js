import calculadora from './calculadora.js';

let formulario = document.querySelector('form');
let resultado = document.getElementById('resultado');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    let operacion = document.getElementById('operacion').value;
    let valor = parseInt(document.getElementById('valor').value);
    if (isNaN(valor)) {
        alert("Ingrese un número válido en la casilla valor");
    } else {
        resultado.innerHTML = calculadora[operacion](valor);
    }
});


console.log(calculadora["cuadrado"](5))