let texto=document.getElementById("texto");
let n1=0;
let n2=1;
let n3;
let intervalo=setInterval(()=>{
    
    n3=n1+n2;
    texto.value="";
    texto.value=n3;
    n1=n2;
    n2=n3;
},2000);