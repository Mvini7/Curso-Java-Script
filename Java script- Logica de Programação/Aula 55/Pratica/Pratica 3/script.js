const carsModels = [
  {modelo: 'Civic', ano: 2021, preco: 123000},
  {modelo: 'City', ano: 2024, preco: 165000},
  {modelo: 'Hr-v', ano: 2018, preco: 86000}
];

for (infos of carsModels) {
  console.log(`${infos.modelo}:`);
  console.log(`-Ano: ${infos.ano}`);
  console.log(`-preço: R$${infos.preco}`);
}