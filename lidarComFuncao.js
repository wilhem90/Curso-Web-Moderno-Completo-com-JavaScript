// Vamos montar uma funcao 

const { findSourceMap } = require("module");

const calculo = function soma(val1, val2) {
    const soma = val1 + val2
    return soma
}

console.log(calculo(12, 5));

// vamos lidar com valor local e global
const numeroGlobal = 54

function numero() {
    let numeroLocal = 34 
    return numeroLocal 
}



console.log(numero());