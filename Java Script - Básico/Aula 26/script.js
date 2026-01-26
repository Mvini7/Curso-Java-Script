let num1 = 0.7; //Number
let num2 = 0.1; //Number

num1 += num2;
num1 = Number(num1.toFixed(2));
console.log(num1 + num2);

// console.log(num1.toString() + num2); // (toString()) transforma qualquer valor em String, temporariamente.
// num1 = num1.toString(); // Assim transforma a variavel number em string.
// console.log(typeof num1);
// console.log(num1.toFixed(2)); // Deixe o numero com o numero de casas decimais que deseja.
// console.log(Number.isInteger(num1)); // Verifica se o o Number é intero ou não retornando True ou False.
