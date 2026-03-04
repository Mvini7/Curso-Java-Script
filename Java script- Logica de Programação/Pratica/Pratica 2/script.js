const respostaAPI = {
  status: 200,
  data: {
    cliente: {
      id: 501,
      nome: "Marcos Vinicius",
      endereco: {
        cidade: "Goiânia",
        estado: "GO"
      }
    },
    pedidos: [
      { id: 1, produto: "Notebook", preco: 3500, entregue: true },
      { id: 2, produto: "Mouse Gamer", preco: 250, entregue: false },
      { id: 3, produto: "Teclado Mecânico", preco: 450, entregue: true }
    ]
  }
};

const { data: { cliente: { nome, endereco: { cidade, estado } } } } = respostaAPI;
const [,segundoUsuario, ] = respostaAPI.data.pedidos;

console.log(`Cliente: ${nome} (${cidade} - ${estado})`);
console.log(`Segundo pedido: ${segundoUsuario.produto} - ${segundoUsuario.preco}`);