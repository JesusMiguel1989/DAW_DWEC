var numero;
var cadena="";

do {
    numero = parseInt(prompt("Dime cuantas lineas de - quieres ver"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero) && numero>0)

for(i=0;i<numero;i++){
    for(j=0;j<30;j++){
        cadena=cadena+'-';
    }
    document.write(cadena+'<br>');
    cadena='';
}