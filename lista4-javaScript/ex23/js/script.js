function valor(){

var nome = String(prompt("Digite o nome: "));
var altura = parseFloat(prompt("Digite sua altura: "));
var sexo = String(prompt("Digite seu sexo: "));

if (sexo == "m") {
    var peso_ideal = (72.7 * altura) - 58;
    document.write(nome + " Seu peso ideal é: "+ peso_ideal);
} else {
    var peso_ideal = (62.1 * altura) - 44.7;
    document.write(nome + " Seu peso ideal é: "+ peso_ideal);
}

}