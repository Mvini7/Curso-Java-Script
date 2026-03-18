const sistema = {
  clientes: [
    {
      id: 1,
      nome: "Marcos",
      pedidos: [
        { id: 101, produto: "Notebook", preco: 3500, entregue: true },
        { id: 102, produto: "Mouse", preco: 150, entregue: false }
      ]
    },
    {
      id: 2,
      nome: "Ana",
      pedidos: [
        { id: 103, produto: "Teclado", preco: 300, entregue: true }
      ]
    }
  ]
};

// CLIENTES
for (const cliente of sistema.clientes) {
  console.log(`Cliente: ${cliente.nome}`);
}

// PEDIDOS POR CLIENTE
for (const pedido of sistema.clientes) {
  console.log(`Cliente: ${pedido.nome}`);
  for (let i = 0; i < pedido.pedidos.length; i++) {
    console.log(`- ${pedido.pedidos[i].produto} (R$${pedido.pedidos[i].preco})`);
  };
}

// PEDIDOS NÃO ENTREGUES
for (const pedidoNaoEntregue of sistema.clientes) {
  for (let i = 0; i < pedidoNaoEntregue.pedidos.length; i++) {
    if (pedidoNaoEntregue.pedidos[i].entregue === false) {
      console.log(`Pedido pendente: ${pedidoNaoEntregue.pedidos[i].produto} - Cliente: ${pedidoNaoEntregue.nome}`);
    };
  };
}

// TODAS AS PROPRIEDADES DO PEDIDO
for (const pedido of sistema.clientes) {
  for (const propPedido of pedido.pedidos) {
    for (const chave in propPedido) {
      console.log(`${chave}: ${propPedido[chave]}`);
    };
  };
}