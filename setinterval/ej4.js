let cadena=prompt("Dame una cadena");
let numero=cadena.length;
let cad="";

let intervalo=setInterval(()=>{
    cad=cad+cadena.charAt(numero);
    numero--;
    document.write(cad+"<br>");
    if(numero<0){
        clearInterval(intervalo);
    }
},1000);