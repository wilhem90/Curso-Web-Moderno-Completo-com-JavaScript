// // Aqui nos vamos ver como criar uma variavel com let, const, var em javascript

const { prependOnceListener } = require("process");

// var nome = "Livro"
// var quantidade = 10;
// var preco = 6.4;
// var imposto = 1.5;
// var precoFinal = preco + imposto

//     console.log(nome);
//     console.log(quantidade);
//     console.log(preco);
//     console.log(imposto);
//     console.log(precoFinal);

//     nome = 'Livro ingles'
//     console.log(nome);



let preco = 19.90;
const desconto = 0.4 * preco;
var item = 'Caderna'
let qtItem = 10
precoComDesconto = (preco - desconto)

// concaterna 1

console.log('Produto: ' + item + '\nQt: ' + qtItem + ' \npreco: R$ ' + preco + '\nDesconto: R$' + desconto + '\nPreco final: R$' + precoComDesconto);

console.log('\n========================================\n');
// concatena 2

console.log(`Produto: ${item}\nQt: ${qtItem}unt \npreco: R$ ${preco} \nDesconto: R$ ${desconto} \nPreco final: R$ ${precoComDesconto}`);
