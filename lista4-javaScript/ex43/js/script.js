var a = parseFloat(prompt("Digite o valor de A: "));
var b = parseFloat(prompt("Digite o valor de B: "));
var c = parseFloat(prompt("Digite o valor de C: "));


if (a < b+c && b <a+c && c <a+b) {

    if (a==b && b==c) {
        var mens= "Triângulo Equilátero";
    }
    else if (a==b || b==c || a==c) {
        var mens= "Triângulo Isósceles";
        document.write("Com o valor dos lados informados, é possível formar um " + mens);
    } 
    else {
        var mens= "Triângulo Escaleno";
        document.write("Com o valor dos lados informados, é possível formar um " + mens);
    }

} 
else{
    document.write("Não é possível formar um triângulo!")
}
