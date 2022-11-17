var valorA = parseInt(prompt("Digite o primeiro valor: "));
var valorB = parseInt(prompt("Digite o segundo valor: "));
var valorC = parseInt(prompt("Digite o terceiro valor: "));


if (valorA + valorB > valorC & valorB + valorC > valorA & valorA + valorC > valorB){
   document.write ("É um triangulo")
}
else {
  document.write ("Não é um triangulo")
}
