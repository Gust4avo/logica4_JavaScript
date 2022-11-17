function valor(){

    var valor = parseInt(prompt("Digite o numero: "));

    if (valor == 0) {
        alert("O valor digitado é zero");
    } 
    else if (valor > 0){
        alert("O valor é positivo");
    }
    else{
        alert("O valor digitado é nagativo");
    }
}