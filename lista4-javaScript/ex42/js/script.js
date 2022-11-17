var codigo = parseInt(prompt("Digite o seu codigo de acesso: "));
var nascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
var contrato = parseInt(prompt("Digite o ano do seu contrato: "));

var idade = 2022 - nascimento;
var trabalho = 2022 - contrato;

if (idade >= 65) {
    document.write ("Requerer aposentaria por idade");
} else if (trabalho >= 30){
    document.write ("Requerer aposentadoria por anos trbalhados");
} else{
    document.write("Não requerer aposentadoria");
}