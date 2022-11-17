var equipe1 = String(prompt("Digite o nome da primeira equipe: "));
var equipe2 = String(prompt("Digite o nome da segunda equipe: "));

var gols_equipe1 = parseInt(prompt("Quantos gols a primeira equipe fez?"));
var gols_equipe2 = parseInt(prompt("Quantos gols a segunda equipe fez?" ));

if (gols_equipe1 > gols_equipe2) {
    document.write("A equipe vencedora é " + equipe1)
} else  if (gols_equipe2 > gols_equipe1){
    document.write("A equipe vencedora é " + equipe2)
} else {
    document.write("Empate")
}