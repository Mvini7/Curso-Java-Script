const produtos = [
  { nome: 'Camisa', preco: 97, categoria: 'roupas', estoque: 5 },
  { nome: 'Oculos', preco: 56, categoria: 'acessorios', estoque: 3 },
  { nome: 'Relogio', preco: 97, categoria: 'acessorios', estoque: 12 },
  { nome: 'Bola de futebol', preco: 97, categoria: 'esportes', estoque: 7 }
];

function fazerPedido(produtoEscolhido, quantidade) {
  const produtoEncontrado = produtos.find(p => p.nome === produtoEscolhido);

  if (!produtoEncontrado) {
    console.log('Produto não encontrado');
    return;
  }

  let escolhaProduto = produtoEncontrado.nome;
  let escolhaQuantidade;

  if (quantidade > produtoEncontrado.estoque) {
    escolhaQuantidade = 'Quantidade inválida (estoque insuficiente)';
  } else {
    escolhaQuantidade = quantidade;
  }

  const categoriaDoProduto = produtoEncontrado.categoria;
  const precoTotal = produtoEncontrado.preco * quantidade;

  let precoComDesconto;
  switch (categoriaDoProduto) {
    case 'roupas':
      precoComDesconto = precoTotal * 0.9; // 10% desconto
      break;
    case 'acessorios':
      precoComDesconto = precoTotal * 0.9;
      break;
    case 'esportes':
      precoComDesconto = precoTotal * 0.9;
      break;
    default:
      precoComDesconto = precoTotal;
  }

  const pedido = {
    produto: escolhaProduto,
    quantidade: escolhaQuantidade,
    precoFinal: precoComDesconto
  };

  console.log(pedido);
}

let escolherProduto = 'Bola de futebol';
let quantidadeEscolhida = 5;
fazerPedido(escolherProduto, quantidadeEscolhida);