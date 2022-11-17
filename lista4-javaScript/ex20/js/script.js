function valor(){
    
    var valor1 = parseInt(prompt("Digite um numero: "));
    var valor2 = parseInt(prompt("Digite outro numero: "));

    if (valor1 < valor2) {

        alert("A ordem dos numeros é" + valor1 + ", " + valor2);
        
    } else if (valor1 > valor2) {
        alert("A ordem dos numeros é" + valor2 + ", " + valor1);

    } else if (valor1 = valor2){
        alert("Porfavor coloque dois numeros diferentes");
    }
    

}