var numero;
var cad = '';

do {
    numero = parseInt(prompt("Dime la base de la piradime"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero) && numero > 0 && numero % 2 != 0)

for (let i = numero; i > 0; i -= 2) {
    for (let k = 0; k < (numero - i) / 2; k++) {
        cad = cad + '&nbsp';
    }
    for (let j = 0; j < i; j++) {
        cad = cad + '*';
    }
    document.write(cad + '<br>');
    cad = '';
}


/*
for(i=numero;i>=0;i-=2){
    for(j=0;j<i;j++){
        cad=cad+'*';
    }
    document.writeln(cad+'<br>');
    cad='';
}

*/