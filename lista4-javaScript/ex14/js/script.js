function valor(){

    var valor = parseFloat(prompt("Digite sua valor: "));
    
    if ( valor < 10){
        alert ("Numero maior que 10");
    }

    else if (valor ==10) {
        alert("Numero igual a 10");
    }
    else{
        alert("Numero menor que 10");
    }

}