var precio;
var cantidad;

//pedimos la cantidad de alumnos que van a ir y comprobamos que no son letras
do {
    cantidad = parseInt(prompt("dime cuantos alumnos van a ir "));
    if (isNaN(cantidad)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(cantidad))

//calculamos el precio
if (cantidad > 100) {
    precio = cantidad * 65;
}else if (cantidad >= 50 && cantidad <= 99) {
    precio = cantidad * 70;
}else if (cantidad >= 30 && cantidad <= 49) {
    precio = cantidad * 95;
}else if (cantidad < 30) {
    precio = 4000;
}
// estructura de if suelto para que se mueva en funcion de los alumnos que van

document.write("El precio final del autobus es : " + precio)