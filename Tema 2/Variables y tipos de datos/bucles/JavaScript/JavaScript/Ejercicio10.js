var num, cubo;


do {


    do {
        numero = parseInt(prompt("Dime el numero"));
        if (isNaN(numero)) {
            alert("no has metido numeros, vuelve a intentarlo")
        }
    } while (isNaN(numero))

    cubo=Math.pow(numero,3);

    document.write("El cubo del " + numero + " es " + cubo + "<br>");

} while (numero >= 0)