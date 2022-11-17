var x = parseInt(prompt("Digite a variavel X "));
var y = parseInt(prompt("Digite a variavel Y "));

z = (x * y) + 5

if (z <= 0) {
    var resposta = "A"
    // document.write (resposta)
} else if (z <= 100) {
    var resposta = "B"
    // document.write (resposta)
}
else {
    var resposta = "C"
    // document.write (resposta)
}

document.write ("Z é igual a: " + z + " e a resposta é " + resposta)