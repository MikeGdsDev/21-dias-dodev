let tabuada = parseInt(prompt("escolha a tabuada que deseja"))

for(let i = tabuada; i <= tabuada + 2; i++ ) {
    console.log("tabuada do numero: " + i)
    for(let j = 0; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i*j))
 }
}