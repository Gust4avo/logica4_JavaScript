var combustivel = String(prompt("Digite o tipo de combustivel: "));
var litros = parseFloat=(prompt("Quantos litros foram vendidos? "));


if (combustivel == "a" & litros <= 20){
var desconto = 3.30 - (3/100);
var preco = litros - desconto;
document.write ("O valor é de: ", preco);
}

else if (combustivel == "a" & litros > 20){
    var desconto = 3.30 - (5/100);
    var preco = litros - desconto;
    document.write("O valor é de: " + preco)
}

else if (combustivel == "g" & litros <= 20){
    var desconto = 2.90 - (4/100);
    var preco = litros - desconto;
    document.write("O valor é de: " + preco)
}

else if (combustivel == "g" & litros > 20){
    var desconto = 2.90 - (6/100);
    var preco = litros - desconto;
    document.write("O valor é de: " + preco)
}
