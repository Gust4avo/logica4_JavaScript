var nota1 = parseFloat(prompt("Digite sua primeira nota: "));
var nota2 = parseFloat(prompt("Digite sua segunda nota: "));
var nota3 = parseFloat(prompt("Digite sua terceira nota: "));

var media_ex = 3.5;

var media = (((nota1 + nota2 )*2) + (nota3 *3) + media_ex) /7;

if (media >= 9,0) {
    document.write("Meida de aproveitamento A " + media);
} else if (media >= 7.5 & media < 9) {
 document.write("Media de aproveitamento B " + media);
}
else if (media >= 6 & media < 7.5){
    document.write("Media de aproveitamento C " + media);
}
