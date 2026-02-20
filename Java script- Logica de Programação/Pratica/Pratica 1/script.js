const produtos = [
  {
    nome: 'Camisa',
    preco: 97,
    categoria: 'roupas',
    estoque: 5
  },

  {
    nome: 'Oculos',
    preco: 56,
    categoria: 'acessorios',
    estoque: 3
  },

  {
    nome: 'Relogio',
    preco: 97,
    categoria: 'acessorios',
    estoque: 12
  },

  {
    nome: 'Bola de futebol',
    preco: 97,
    categoria: 'esportes',
    estoque: 7
  }
];

function fazerPedido(produtoEscolhido, quantidade) {

  let escolhaProduto;
  let escolhaQuantidade;

  switch (quantidade) {
    case produtos[0].estoque:
      escolhaQuantidade = produtos[0].estoque;
      break;
    case produtos[1].estoque:
      escolhaQuantidade = produtos[1].estoque;
      break;
    case produtos[2].estoque:
      escolhaQuantidade = produtos[2].estoque;
      break;
    case produtos[3].estoque:
      escolhaQuantidade = produtos[3].estoque;
      break;
    default:
      escolhaQuantidade = 'Quantidade invalida';
  };

  switch (produtoEscolhido) {
    case produtos[0].nome:
      escolhaProduto = produtos[0].nome;
      break;
    case produtos[1].nome:
      escolhaProduto = produtos[1].nome;
      break;
    case produtos[2].nome:
      escolhaProduto = produtos[2].nome;
      break;
    case produtos[3].nome:
      escolhaProduto = produtos[3].nome;
      break;
    default:
      escolhaProduto = 'Produto não encontrado'
      escolhaQuantidade = 'Produto invalido';
  };


  const produtoEncontrado = produtos.find(p => p.nome === produtoEscolhido);
  const categoriaDoProduto = produtoEncontrado.categoria;
  const precoDoProduto = produtoEncontrado.preco;

  const precoTotal = escolhaQuantidade * precoDoProduto;
  let precoComDesconto;

  const descontoRoupas = 10 / 100;
  const descontoAcessorios = 10 / 100;
  const descontoEsportes = 10 / 100;

  if (categoriaDoProduto === 'roupas') {
    precoComDesconto = precoTotal - (precoTotal * descontoRoupas);
  } else if (categoriaDoProduto === 'acessorios') {
    precoComDesconto = precoTotal - (precoTotal * descontoAcessorios);
  } else if (categoriaDoProduto === 'esportes') {
    precoComDesconto = precoTotal - (precoTotal * descontoEsportes);
  } else {
    precoComDesconto = 'Produto invalido';
  };

  const pedido = {
    produto: escolhaProduto,
    quantidade: escolhaQuantidade,
    preco: precoComDesconto 
  };
  console.log(pedido);
}


let escolherProduto = 'Bola de futebo';
let quantidadeEscolhida = 5;
let pedido = fazerPedido(escolherProduto, quantidadeEscolhida);
