
let valor
let quantidade
let opcao = prompt(("Escolha a opção desejada:" + "\n1 abastecer c/ gasolina ; \n2 abastecer c/ alcool ; \n3 calibrar os pneus"))


switch(opcao){
    case "1":
        valor = parseInt(prompt("digite o valor desejado"))  
        quantidade = valor / 5
        console.log("foram abastecidos " + quantidade + "L de gasolina")
            break;
    case "2":
        valor = parseInt(prompt("digite o valor desejado"))  
        quantidade = valor / 3
        console.log("foram abastecidos " + quantidade + "L de Alcool")
            break;
        
    default:
        console.log("pneus calibrados com sucesso")
            break;
}