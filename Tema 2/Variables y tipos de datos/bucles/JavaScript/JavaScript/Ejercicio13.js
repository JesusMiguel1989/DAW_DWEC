var numero, aux;

aux=0;
do {
    numero = parseInt(prompt("Dame numeros negativos y te dire cuantos son, para salir dame uno positivo"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }else{
        if(numero<0){
            aux++;
        }
        else{
            document.write("Me has dado un numero positivo <br>");
            console.log("Me has dado un numero positivo")
        }
    }
} while (isNaN(numero) || numero<0)

document.write("Me has dado " + aux + " numeros negativos ");