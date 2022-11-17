function valor(){
    var valor1 = parseFloat(prompt("Digite o primeiro valor: "));
    var valor2 = parseFloat(prompt("Digite o segundo valor: "));
    var valor3 = parseFloat(prompt("Digite o terceiro valor: "));

    if (valor1 > valor2) {
        document.write("O maior valor é: "+valor1);
    } else if (valor2 > valor3) {
        document.write("O maior valor é: "+valor2);
    }
    else {
        document.write("O maior valor é: "+ valor3);
    }
}