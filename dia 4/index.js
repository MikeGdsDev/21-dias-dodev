const taComFome = prompt("Voce esta com fome ? (sim/não)")
const temDinheiro = prompt("voce tem dinheiro ? (sim/não)")
const restAberto = prompt("restaurante esta aberto ? (sim/não)")

if(taComFome === "nao" || temDinheiro == "nao" ) {
    console.log("hoje a janta sera em casa");
}else if(temDinheiro === "sim" && restAberto === "sim" ) {
    console.log("hoje o jantar sera no seu restaurante preferido!");
}else {
    console.log ("peça um delivery!");
} 
