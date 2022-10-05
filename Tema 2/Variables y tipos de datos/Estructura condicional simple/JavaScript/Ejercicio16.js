var importe;
var neto;

do {
    importe = parseInt(prompt("Dime el importe bruto "));
    if (isNaN(importe)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
}while(isNaN(importe) && importe>0)

if(importe>=15000){
    neto=importe*0.84;
}else{
    neto=importe*0.9;
}//calculo del importe neto

document.write("El importe neto es : " + neto);