var horas, precio, total, totalf=0;
const MAX = 40;
var calculo, primeras;
var calculo1=0, calculo2=0;

do {
    horas = parseInt(prompt("Dime las horas que ha trabajado"));
    if (isNaN(horas)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
    precio = parseInt(prompt("Dime el precio de las horas"));
} while (isNaN(horas) && isNaN(precio) && horas > 0 && precio > 0)


primeras = horas - 35;


total = 35 * precio;
total += (primeras * (precio * 1.5));

//quitamos los primeros 1200€
if (total > 1200) {
    calculo = total - 1200;
    if (calculo >= 900) {
        //calculamos lo que paga en los siguientes 900 (techo)
        calculo1 = 900 * (1 - 0.25);
        //se le restan los 900
        calculo = calculo - 900;
        if (calculo > 0) {
            //se calcula con el ultimo tramo
            calculo2 = calculo * (1 - 0.45);
        }
    }else{
        calculo1=calculo * (1 - 0.25);
    }
    totalf = 1200 + calculo1 + calculo2;
}else{
    totalf=total;
}



document.write("El trabajador ha trabajado : " + horas + " a un precio de : " + precio + "<br> cobra de forma bruta : " + total);
document.write("<br> De los cuales se desglosaria asi:<br>");
document.write("Limpios : 1200 <br>con la retencion en los siguientes 900 : " + calculo1 + "<br>Y con la retencion final : " + calculo2);
document.write("<br>Y en total cobra : " + totalf);