// const familia = {
//     nome: 'Wilhem Wundt',
//     falar() {
//         return this.nome
//     }
// }

// const unid = familia.falar()

// console.log(unid);


class Carro {
    constructor(maxVel = 200, cres = 40) {
        this.veloceActual = 0;
        this.maxVel = maxVel;
        this.cres = cres;
    }
    accele() {
        if (this.veloceActual + this.cres <= this.maxVel) {
            this.veloceActual += this.cres;
        } else {
            this.veloceActual = this.maxVel;
        }
    }
    getVeloce() {
        return this.veloceActual;
    }
}



const uno = new Carro();

for (let i = 0; i < 10; i++) {
    uno.accele();
    console.log(`Velocity after acceleration ${i + 1}: ${uno.getVeloce()}`);
}