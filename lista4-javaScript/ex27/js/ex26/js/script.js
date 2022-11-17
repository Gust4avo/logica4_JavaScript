function valor(){
    var quantidade_atual = parseInt(prompt("Digite a quantidade atual em estoque: "));
    var quantidade_minima = parseInt(prompt("Digite minima em estoque: "));
    var quantidade_media = (quantidade_atual + quantidade_minima) / 2;

    if (quantidade_media >= quantidade_atual) {
        document.write("Não efetuar compra");
    } else {
        document.write("Efetuar compra");
    }

}