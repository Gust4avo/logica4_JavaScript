function valor(){

    var saldo = parseInt(prompt("Digite o valor de saldo: "));
    var debito = parseInt(prompt("Digite o valor que voçê possui em debito"));
    var credito = parseInt(parseInt("Digite o valor que possui de credito: "));

    var atual = saldo - debito + credito;

    if (atual > 0) {
        alert("Saldo Positivo");
    } else {
        alert("Saldo negativo: ");
    }
}