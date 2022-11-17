function valor(){
    var hora_trab = parseInt(prompt("Quantidades de horas trabalhada: "));
    var salario_hora = parseFloat(prompt("Salario por horas trabalhadas: "));

    var salario_total = salario_hora * hora_trab;

    if (hora_tra> 160){
        var salario_ex = salario_total + (salario_hora * 50 / 100);
        document.write("Salario com acrecimo das horas extras R$ " + salario_ex)
    }
    else{
        document.write("Salario mensal R$ " + salario_total);
    };
};