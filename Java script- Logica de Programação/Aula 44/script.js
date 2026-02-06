const form = document.getElementById('formulario');

form.addEventListener('submit', function resultadoImc(evento) {
  evento.preventDefault();

  const peso = Number(document.getElementById('peso').value);
  const altura = Number(document.getElementById('altura').value);
  const resultado = document.getElementById('resultado');

  const IMC = peso / (altura ** 2);

  if (IMC < 18.5) {
    resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e você está abaixo do peso.`;
    resultado.classList.add('resultado');
  } else if (IMC >= 18.5 && IMC <= 24.99) {
    resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e você está com peso normal.`;
    resultado.classList.add('resultado');
  } else if (IMC >= 25 && IMC <= 29.99) {
    resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e você está com sobrepeso.`;
    resultado.classList.add('resultado');
  } else if (IMC >= 30 && IMC <= 34.99) {
    resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e você está com obesidade grau 1.`;
    resultado.classList.add('resultado');
  } else if (IMC >= 35 && IMC <= 39.99) {
    resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e você está com obesidade grau 2.`;
    resultado.classList.add('resultado');
  } else {
    resultado.textContent = `Seu IMC é ${IMC.toFixed(2)} e você está com obesidade grau 3.`;
    resultado.classList.add('resultado');
  };
});
