var A = parseFloat(prompt("Digite o valor de A: "));
var B = parseFloat(prompt("Digite o valor de B: "));
var C = parseFloat(prompt("Digite o valor de C: "));

if (A < B+C & B < A+C & C < A+B){
    if (A == B & B == C){
        mens = "Triângulo equilátero"
        document.write ("É possivel formar um" + mens)
    } else if (A == B & B == C & A == C){
        mens = "Triângulo isósceles"
        document.write("É possivel formar um "+ mens)
    } else{
        var mens = "Triangulo escaleno";
    }
}
else {
    var mens = "Triângulo Escaleno";
}

document.write (mens);
