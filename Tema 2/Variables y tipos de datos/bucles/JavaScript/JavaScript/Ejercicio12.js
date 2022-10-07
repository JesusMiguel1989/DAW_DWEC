var numero;

do {
    numero = parseInt(prompt("Dime el numero y te dire si es par o impar, para salir del programa pulse 0"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }else{
        if(numero%2==0){
            document.write("El numero " + numero + " es Par <br>");
            console.log("El numero " + numero + " es Par");
        }
        else{
            document.write("El numero " + numero + " es Impar <br>");
            console.log("El numero " + numero + " es Impar")
        }
    }
} while (isNaN(numero) || numero!=0)