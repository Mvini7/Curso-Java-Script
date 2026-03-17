// FOR IN:

const produto = {
  nome: "Notebook",
  preco: 3500,
  estoque: 10
};

for (const chave in produto) {
  console.log(`${chave}: ${produto[chave]}`);
}