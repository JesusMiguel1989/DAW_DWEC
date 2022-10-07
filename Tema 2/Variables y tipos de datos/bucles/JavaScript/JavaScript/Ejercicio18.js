var numero;
var cadena="";

do {
    numero = parseInt(prompt("Dime cuantas a quieres ver"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero) && numero>0)

for(i=0;i<numero;i++){
    cadena = cadena+'a';
}

document.write("Has pedido " + numero + " y sale <br>" + cadena);