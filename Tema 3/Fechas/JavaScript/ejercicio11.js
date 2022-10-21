/*
Realiza un script que pida una fecha (año, mes y día) y muestre tres fechas que sean la fecha introducida a 30, 60 y 90 días.
*/

let dia, mes, year;//donde voy a guardar los datos
do {
    dia = parseInt(prompt("Dime el dia"));
    mes = parseInt(prompt("Dime el mes"));
    year = parseInt(prompt("Dime el año"));
}while(isNaN(dia) || isNaN(mes) || isNaN(year));


//creamos una variable fecha con los datos dados.
let fecha = new Date(year, mes - 1, dia, 0, 0, 0);

document.write("Tu fecha es : " + fecha + "<br>");
//variable fecha
let fecha2;

let calculo;
calculo = 1000 * 60 * 60 * 24 * 30;
let auxiliar = fecha.getTime() + calculo;

fecha2 = new Date(auxiliar);
document.write("Tu fecha mas 30 dias es: " + fecha2 + "<br>");
//document.write("Con la fecha dada le sumamos 30 dias " + fecha2.getDate() + "/" + fecha2.getMonth() + "/" +fecha2.getFullYear());

calculo = 1000 * 60 * 60 * 24 * 60;
auxiliar = fecha.getTime() + calculo;
let fecha3 = new Date(auxiliar);
document.write("Tu fecha mas 60 dias es: " + fecha3 + "<br>");
//document.write("Con la fecha dada le sumamos 60 dias " + fecha3.getDate() + "/" + fecha3.getMonth() + "/" +fecha3.getFullYear());

calculo = 1000 * 60 * 60 * 24 * 90;
auxiliar = fecha.getTime() + calculo;
let fecha4 = new Date(auxiliar);
document.write("Tu fecha mas 90 dias es: " + fecha4 + "<br>");