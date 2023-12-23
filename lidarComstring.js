const nome = 'Wilhem Wundt Maxime'

console.log(nome.length);
console.log(nome.charAt(4));
console.log(nome.charCodeAt(5));
console.log(nome.indexOf('e'));

console.log(nome.substring(0, 6));
console.log(nome.replace(3, 'e'));

let nomeArray = nome.split(' ')
console.log(nomeArray);


// vamos concatenar string
console.log(`\n\nNome: ${nomeArray[0]} ${nomeArray[1]}\nSobrenome: ${nomeArray[2]}`);