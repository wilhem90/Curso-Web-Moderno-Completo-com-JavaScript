const dataUsers = [
    {
        "nome": "Wilhem Wundt",
        "sobrenome" :"Maxime"
    },
    {
        "nome": "Rubens Wundt",
        "sobrenome" :"Maxime"
    }
]
 let max = '34'

 console.log(max.toString());



// Modificamos o nome por ai
dataUsers[1].nome = 'Jacob'

// vamos concatenar string
console.log(`\n\nNome: ${dataUsers[1].nome} \nSobrenome: ${dataUsers[1].sobrenome}`);