var valor1 = parseInt(prompt("Digite o primeiro valor: "));
var valor2 = parseInt(prompt("Digite outro numero: "));

if (valor1 == valor2) {
    document.write("Os numeros são iguais")
} else if (valor1 > valor2){
    document.write("O primeiro valor é o maior " + valor1);
}

else {
    document.write("O segundo valor é o maior " + valor2);
}