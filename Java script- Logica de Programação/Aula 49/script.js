//Em vez disso...
/* const numbers = [10, 20, 30];
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];

console.log(numbers);
console.log(a, b, c); */

//Isso...
/* const [a, b, c] = [10, 20, 30];
console.log(a, b, c);
console.log(a);
console.log(b);
console.log(c); */

function ProgrammingLanguage() {
  return ['JavaScript', 'TypeScript', 'Java', 'Python'];
};

const [preferredLanguage1, preferredLanguage2, ,preferredLanguage3]  = ProgrammingLanguage();
console.log(preferredLanguage1, preferredLanguage2, preferredLanguage3);