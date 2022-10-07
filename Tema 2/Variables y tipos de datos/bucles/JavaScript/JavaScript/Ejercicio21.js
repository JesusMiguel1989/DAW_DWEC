var numero, numero2;
var potencia;

do {
    numero = parseInt(prompt("Dime la base"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
    numero2= parseInt(prompt("Dime el exponente"));
    if (isNaN(numero2)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero) && numero>0 && isNaN(numero2) && numero2>0)

potencia=Math.pow(numero,numero2);

document.write("El resultado de la operacion es " + numero + "^" + numero2 + " es : " + potencia);