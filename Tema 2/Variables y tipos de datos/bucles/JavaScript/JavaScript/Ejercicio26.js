var numero, aux=0;;
var cad = '';
let k;

do {
    numero = parseInt(prompt("Dime cuantos escalones quieres subir"));
    if (isNaN(numero)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
} while (isNaN(numero) && numero > 0 )
k=0

while(k<=numero*2+1){
    cad=cad+'&nbsp';
    k++;
}
cad=cad+'_'+'<br>';

for(let i=numero*2;i>0;i-=2){
    for(let j=i-1;j>=0;j--){
        cad=cad+'&nbsp';
    }
    if(aux==0){
        cad=cad+'_|'+'<br>';
        aux=1; 
    }else{
        cad=cad+'_|'+'<br>';
        aux=0; 
    }
       
}
document.write(cad);