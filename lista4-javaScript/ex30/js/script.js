var valor1 = parseInt(prompt("Digite o primeiro valor: "));
var valor2 = parseInt(prompt("Digite o segundo valor: "));
var valor3 = parseInt(prompt("Digite o terceiro valor: "));



if (valor1 < valor2 & valor1 < valor3){
    var menor = valor1
    if (valor2 > valor3) {
    var meio = valor3;
    var maior = valor2;
} else{
    var meio = valor2;
    var maior = valor3;
}
}

if (valor2 < valor1 & valor2 < valor3) {
    var menor = valor2
    if (valor1 > valor3 ){
    var meio = valor3;
    var maior = valor1;
} else{
    var meio = valor1;
    var maior = valor3;
}

}

if (valor3 < valor1 & valor1 < valor2){
    var menor = valor3
    if (valor1 > valor3){
        var meio = valor3;
        var maior = valor1;
    } else{
            var meio = valor1;
            var maior = valor3;
        }

}
document.write(menor + "," + meio + "," + maior);

