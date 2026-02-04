const form = document.getElementById('form');

form.addEventListener('submit', function resultado(evento) {
  evento.preventDefault();
  const nome = document.getElementById('nome').value;
  const idade = Number.parseInt((document.getElementById('idade')).value);
  const peso = Number.parseFloat((document.getElementById('peso')).value);
  const altura = Number.parseFloat((document.getElementById('altura')).value);
  const resultado = document.querySelector('.resultado');

  const dados = {
    nome: nome,
    idade: idade,
    peso: peso,
    altura: altura
  };

  console.log(dados);
  resultado.textContent = `${dados.nome} tem ${dados.idade} anos de idade, pesa ${dados.peso}Kg e tem ${dados.altura} de altura.`;
});
