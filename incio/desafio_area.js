// vamos calcular circonferencia de um cilindro

// desafio 01
const { match } = require("assert");

// const PI = 3.14
let raio = 10
let area = Math.PI * raio * raio
Math.sqrt(2)

console.log('O valor da area é: ' + area + 'm²');

//=============================================

// desafio 02

let a = 7;
let b = 94;

// a = b;
// b = a;

// depois da trocar do valor não deu certo
// console.log(a);
// console.log(b);


// Melhores formas estão por ai
//  forma 1
let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

// forma 2
[b, a] = [a, b]
console.log(a);
console.log(b);
