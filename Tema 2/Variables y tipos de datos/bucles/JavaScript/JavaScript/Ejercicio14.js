var numero, factorial;

do {
    numero = parseInt(prompt("Dime el numero y te dire su factorial"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero))

factorial=0;
for(i=0;i<=numero;i++){
    factorial = factorial * i;
}

document.write("El factorial de " + numero + " es " + factorial);