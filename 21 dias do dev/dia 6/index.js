let numero = parseInt(prompt("Digite um numero inteiro e positivo"))
 
for(let contador = 0; contador <= numero; contador++){
    console.log(contador)
}

    
    

for(let contador = 0; contador <= 50; contador+= 5){
        console.log(contador)
}


        

for(let contador = 50; contador >= 0; contador-= 5){
             console.log(contador)
}




let tabuada = parseInt(prompt("escolha a tabuada que deseja"))

for(let i = tabuada; i <= tabuada + 2; i++ ) {
    console.log("tabuada do numero: " + i)
    for(let j = 0; j <= 10; j++) {
        console.log(i + " x " + j + " = " + (i*j))
 }
}

