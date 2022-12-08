let segundos=0;
let intervalo=setInterval(()=>{
    segundos=segundos+10;
    if(segundos<100){
        document.title=segundos;
    }else{
        document.title="Has llegado al limite";
        clearInterval(intervalo);
    }
    
},5000)

