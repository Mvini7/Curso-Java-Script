// FOR OF:

/* const nomes = ['Marcos', 'Gustavo', 'Lucas'];

for (const nome of nomes) {
  console.log(`Esse é o ${nome}.`);
} */

const produtos = [
  { nome: "Notebook", preco: 3000 },
  { nome: "Mouse", preco: 150 }
];

for (const {nome, preco} of produtos) {
  console.log(`${nome} custa R$${preco}.`);
}