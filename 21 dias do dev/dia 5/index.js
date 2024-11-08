let num1 = parseInt(prompt("insira um numero"))
let num2 = parseInt(prompt("insira um segundo numero"))
let opcao = parseInt(prompt("insira a operação desejada:" + "\n1 = + ; \n2= - ; \n3 = * ; \n4 = /"))

switch (opcao) {
    case 1: 
    console.log(num1 + " + " + num2 + " = " + (num1 + num2))
      break;

    case 2:
      console.log(num1 + " - " + num2 + " = " + (num1 - num2))
      break;

    case 3:
      console.log(num1 + " * " + num2 + " = " + (num1 * num2))
      break;

    default:
      console.log(num1 + " / " + num2 + " = " + (num1 / num2))
      break;
}
    
