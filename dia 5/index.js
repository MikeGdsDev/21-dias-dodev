let numero1 = parseint(prompt("insira um numero"))
let numero2 = parseint(prompt("insira um segundo numero"))
let opcaoMat = parseint(prompt("insira a operação desejada:" + "\n1 = +;\n2= -; \n3 = *; \n4 = /" ))


switch (opcaoMat) {
    case 1:
          console.log(numero1 + "+" numero2 + "=" (numero1 + numero2))
          break; 
    case 2:
          console.log(numero1 + "-" numero2 + "=" (numero1 - numero2))
          break;
    case 3:
          console.log(numero1 + "*" numero2 + "=" (numero1 * numero2))
          break;
    case 4:
          console.log(numero1 + "/" numero2 + "=" (numero1 / numero 2))
          break;

}