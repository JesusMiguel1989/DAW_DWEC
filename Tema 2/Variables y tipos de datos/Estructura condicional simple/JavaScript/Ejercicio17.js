var numero;

//pedimos un numero y controlamos que es un numero y no una letra
do {
    numero = parseInt(prompt("Dime un numero "));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
}while(isNaN(numero))

//comprobamos si es par o impar
if(numero%2==0){
    document.write("Es un numero par");
}else{
    document.write("Es un numero impar");
}