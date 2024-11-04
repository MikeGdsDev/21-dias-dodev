let nome 
let idade
let temCarta = false
let temCarro = false

nome = prompt("Insira seu nome:")
idade = parseInt(prompt("Insira sua idade"))

let opcaoCarta = prompt("Voce tem carta ? (sim/nao)")
if (opcaoCarta == "sim" ) {
    temCarta = true
}
let opcaoCarro = prompt("Voce tem carro ? (sim/nao)")
if (opcaoCarro == "sim") {
    temCarro = true
}

if (idade < 18 || !temCarta ) {
   console.log(nome + ", Voce nao pode dirigir!")
} else if (idade >= 18 && temCarta && !temCarro){
   console.log(nome + ", Voce pode dirigir mas nao tem carro")
} else {
    console.log(nome + ", Voce sera o motorista!")
}
