import Circunferencia from './circunferencia.js';

let radioForm = document.getElementById('radioForm');
let resultado1 = document.getElementById('resultado1');
let resultado2 = document.getElementById('resultado2');
let error = document.getElementById('error');

radioForm.addEventListener('submit', function (event) {
    event.preventDefault();
    calcularArea();
});

function calcularArea() {
    let radio = parseInt(document.getElementById('radio').value);
    error.style.display = "none";

    if (radio && radio > 0) {
        let areaCirculo = new Circunferencia(radio);
        resultado1.innerHTML = areaCirculo.area();
        resultado2.innerHTML = areaCirculo.perimetro();
    } else {
        resultado1.innerHTML = "";
        resultado2.innerHTML = "";
        error.style.display = "block";
    };
};