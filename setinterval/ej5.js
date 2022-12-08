let total=0;
let numero=0;

do{
    numero = prompt("Dame un numero");
    numero=Math.round(numero);
}while(isNaN(numero) || numero<0);

numero=""+numero;

let array=numero.split("");

let intervalo=setInterval(()=>{
    let n1=parseInt(array.shift());
    total=total+n1;
    document.write("La suma es "+total+"<br>");
    if(array.length==0){
        clearInterval(intervalo);
    }
},500);