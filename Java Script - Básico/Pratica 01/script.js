let nomeInput = document.getElementById('nome');
let alturaInput = document.getElementById('altura');
let pesoInput = document.getElementById('peso');
let resultado = document.getElementById('resultado');

function calcularIMC() {
  let nome = nomeInput.value;
  let altura = alturaInput.value;
  let peso = pesoInput.value;
  
  let IMC = peso / (altura ** 2);

  resultado.textContent = `${nome}, seu IMC é ${Math.round(IMC)}.`;
};
