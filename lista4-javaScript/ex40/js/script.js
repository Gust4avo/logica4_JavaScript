var nome = String(prompt("Digite o nome do produto: "));
var quantidade = parseFloat(prompt("Digite a quantidade adquirida: "));
var preco = parseFloat(prompt("Digite o preço unitaria: "));

total = quantidade * preco;

if (quantidade <= 5) {
    preco_final = total - 0,02
    document.write("Total de: "+ preco_final + " R$");
} else if (quantidade > 5 & quantidade <= 10){
    preco_final = total - 0.03
    document.write("Total de: " + preco_final + " R$");
} else if  (quantidade > 10) {
    preco_final = total - 0.05
    document.write("Total de: " + preco_final + " R$");
}
