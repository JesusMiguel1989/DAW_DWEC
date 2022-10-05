var anios;
const SALARIO=30000;
var nuevo;

//pedimos un numero y controlamos que es un numero y no una letra
do {
    anios = parseInt(prompt("Dime la antiguedad del usuario "));
    if (isNaN(anios)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
}while(isNaN(anios))

//calculamos el salario segun su antiguedad
if(anios>=10){
    nuevo=SALARIO*1.1;
}else if(anios>=5 && anios<10){
    nuevo=SALARIO*1.07;
}else if(anios<5 && anios>=3){
    nuevo=SALARIO*1.05;
}

document.write("El salario definitivo es " + nuevo);