function valor(){

var ano = parseInt(prompt("Qual ano atual nos estamos? "));

var nascimento = parseInt(prompt("qual ano voçê nasceu"));

var result = ano - nascimento;

if (result < 16) {
    alert ("Voçê não tem idade para votar");
} 
else if (result == 16){
    alert ("Voçê pode escolher entre votar ou não");
}

else {
    alert ("Voçê já pode votar");
}

}
