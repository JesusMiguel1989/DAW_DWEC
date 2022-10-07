var numero;

do {
    numero = parseInt(prompt("Dime el numero y te dire si es positivo o negativo, para salir del programa pulsa 0"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }else{
        if(numero>0){
            document.write("El numero " + numero + " es Positivo <br>");
            console.log("El numero " + numero + " es Positivo <br>");
        }
        else{
            document.write("El numero " + numero + " es negativo <br>");
            console.log("El numero " + numero + " es negativo <br>")
        }
    }
} while (isNaN(numero) || numero!=0)