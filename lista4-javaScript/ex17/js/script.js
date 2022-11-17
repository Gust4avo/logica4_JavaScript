function valor(){

    var nota1 = parseFloat(prompt("Digite a primeira nota: "));

    var nota2 = parseFloat(prompt("Digite a segunda nota: "));

    var media = (nota1 + nota2) / 2

    if (media >= 6) {
       alert ("Media: "+ media + " Aprovado. ");
    } 
    else {
      alert("Media: "+ media + "Reprovado. ");
    }
}