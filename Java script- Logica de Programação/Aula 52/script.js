// FOR:
// Estrutura - for (inicialização; condição; incremento) {
// CODIGO DE EXECUTADO REPETIDAMENTE 
// }

/* for (let i = 1; i <= 10; i++) {
  let numeroPar = i % 2;
  if (numeroPar == 0) {
    console.log(i);
  }
}

console.log('Esses são os numeros pares entre 1 e 10.') */

/* const linguagem = ['JavaScrtipt', 'Python', 'Go', 'Java'];

for (let i = 0; i < linguagem.length; i++) {
  console.log(linguagem[i]);
} */

const usuarios = [
  { nome: "Marcos", idade: 17 },
  { nome: "Ana", idade: 22 },
  { nome: "Pedro", idade: 30 }
];

for (let i = 0; i < usuarios.length; i++) {
  console.log(`${usuarios[i].nome} tem ${usuarios[i].idade} anos.`);
}