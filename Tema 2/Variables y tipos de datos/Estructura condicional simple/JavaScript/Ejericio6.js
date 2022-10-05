var cantidad;
const PRECIO1 = 0.85;
const PRECIO2 = 0.9;

do {
    cantidad = parseInt(prompt("dime cuantos lapices desea"));
    if (isNaN(cantidad)) {
        alert("no has metido numeros, vuelve a intentarlo")
    } else {
        alert("has metido numeros");
    }
} while (isNaN(cantidad))
//pedimos datos hasta que el usuario meta un numero

if (cantidad >= 1000) {
    let precio = cantidad * PRECIO1;
    document.write("el cliente tiene que pagar :" + precio);
    //al ser una cantidad mayor usamos la constante 1
} else {
    let precio = cantidad * PRECIO2;
    document.write("el cliente tiene que pagar :" + precio);
    //al ser una cantidad menos usamos la otra constante
}