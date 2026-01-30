function calcular() {
  let produto = document.getElementById("produto").value;
  let preco = Number((document.getElementById("preco")).value);
  let desconto = Number((document.getElementById("desconto")).value);

  let valorComDesconto = preco - (preco * (desconto / 100));
  let economia = preco - valorComDesconto;

  document.getElementById("resultado").textContent =
    "O produto " + produto +
    " agora custa R$" + valorComDesconto.toFixed(2) +
    ". Você economizou R$" + economia.toFixed(2);
}