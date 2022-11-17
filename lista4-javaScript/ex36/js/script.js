var mulher1 = parseInt(prompt("Digite a idade da primeira mulher: "));
var mulher2 = parseInt(prompt("Digite a idade da segunda mulher: "));
var homem1 = parseInt(prompt("Digite a idade do primeiro homem: "));
var homem2 = parseInt(prompt("Digite a idade do primeiro homem: "));


if (mulher1 > mulher2) {
    var Mvelha = mulher1;
    var Mnova = mulher2;
} else if (mulher2 > mulher1){
    var Mvelha = mulher2;
    var Mnova = mulher1;
}

if (homem1 > homem2) {
    var Hvelho = homem1;
    var Hnovo = homem2;
} else if (homem2 > homem1){
    var Hvelho = homem2;
    var Hnovo = homem1;
}

var soma1 = Hvelho + Mnova;
var soma2 = Hnovo * Mvelha;

document.write ("A soma das idades do home mais velho é a mulher mais nova é: ", + soma1 + "</br>");
document.write (" O produto da idade do mais velho coma a mais nova é "+ soma2);