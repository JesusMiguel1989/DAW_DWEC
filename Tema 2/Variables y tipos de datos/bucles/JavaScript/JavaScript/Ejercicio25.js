var numero;
var cad = '';
let k;

do {
    numero = parseInt(prompt("Dime cuantos escalones quieres bajar"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero) && numero > 0 )

for(let i=numero;i>0;i--){
    cad=cad+'_'+'<br>'+'&nbsp';
    for(let j=0;j<(numero-i);j++){
        cad=cad+'&nbsp'+'&nbsp';
    }
    cad=cad+'|';
}
while(k<=numero*2+1){
    cad=cad+'&nbsp';
    k++;
}
cad=cad+'_'+'<br>';

document.write(cad);