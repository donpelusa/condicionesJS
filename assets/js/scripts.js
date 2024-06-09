/* Ejercicio 1 */

const excercise1 = document.querySelector('#img');

excercise1.addEventListener('click', () => {
    if (excercise1.style.borderColor === 'red') {
        excercise1.style.borderColor = 'transparent';
    } else {
        excercise1.style.borderColor = 'red';
    }
});

//titulo.classList.contains("red")


/* Ejercicio 2 */

let sticker1 = document.querySelector('#sticker1');
let sticker2 = document.querySelector('#sticker2');
let sticker3 = document.querySelector('#sticker3');

const verify = document.querySelector('#verify');
const alertMessage = document.querySelector('#alert-message');

verify.addEventListener('click', () => {
    let sum = Number(sticker1.value) + Number(sticker2.value) + Number(sticker3.value);
    if (sum > 10) {
        alertMessage.innerHTML = "Llevas demasiados stickers (" + sum + ")";
        alertMessage.style.color = "red";
    } else {
        alertMessage.innerHTML = "Llevas un total de " + sum + " stickers";
        alertMessage.style.color = "black";
    }
});

/* No solicitado: Resetea mensaje al modificar valores */
// Agrega listeners para los eventos de input en cada input de stickers
[sticker1, sticker2, sticker3].forEach(input => {  // Crea un Array, sirve para recorrer cada input con forEach
    input.addEventListener('input', () => {
        alertMessage.innerHTML = "";  // Resetea el mensaje cuando se cambia cualquier input
    });
});


/* Ejercicio 3 */

const key1 = document.querySelector('select[name="key1"]');
const key2 = document.querySelector('select[name="key2"]');
const key3 = document.querySelector('select[name="key3"]');
const button = document.querySelector('.ex3 button');
const resultMessage = document.querySelector('#result-message');

button.addEventListener('click', function () {
    const password = `${key1.value}${key2.value}${key3.value}`;

    if (password === "911") {
        resultMessage.textContent = "Password 1 correcto"
        resultMessage.style.color = "green"
    } else if (password === "714") {
        resultMessage.textContent = "Password 2 correcto"
        resultMessage.style.color = "blue"
    } else {
        resultMessage.textContent = "Password incorrecto"
        resultMessage.style.color = "red"
    }
});

/* No solicitado: Resetea mensaje al modificar valores */
// Agrega listeners para los eventos "change" en cada select de stickers
[key1, key2, key3].forEach(select => {  // Crea un Array, sirve para recorrer cada select con forEach
    select.addEventListener('change', () => {
        resultMessage.textContent = "";  // Resetea el mensaje cuando se cambia cualquier select
    });
});