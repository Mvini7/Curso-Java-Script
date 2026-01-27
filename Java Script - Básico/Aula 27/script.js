let num1 = 9.57345;
// let num2 = Math.round(num1); // Arredonda para o valor mais próximo.
// let num2 = Math.ceil(num1); // Arredonda o numero para um valor a cima.
// let num2 = Math.floor(num1); // Arredonda o numero para o valor a baixo.

let chute = window.prompt('tente acertar o numero: ');
const aleatorio = parseInt(Math.random() * (10 - 1) + 1);

document.body.innerHTML = aleatorio;