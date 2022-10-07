var numero, numero2;
var cadena="";

do {
    numero = parseInt(prompt("Dime cuantas lineas de - quieres ver"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
    numero2= parseInt(prompt("Dime cuantos - quieres por linea"));
    if (isNaN(numero2)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero) && numero>0 && isNaN(numero2) && numero2>0)

for(i=0;i<numero;i++){
    for(j=0;j<numero2;j++){
        cadena=cadena+'-';
    }
    document.write(cadena+'<br>');
    cadena='';
}