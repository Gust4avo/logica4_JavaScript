function valor(){

    var horarioInicial = parseInt(prompt("Digite o horario que a partida começou: "));
    var horarioFinal = parseInt(prompt("Digite o horario que a partida terminou"));

    var duracao = horarioFinal - horarioInicial;
    
    if (duracao<0){
        duracao = duracao+24;
        alert("A duração do jogo é: " + duracao);
    }
    else {
        alert("A duração do jogo é: " + duracao);
    }


}