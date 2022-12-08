let texto= document.getElementById("texto");
let btn1= document.getElementById("btn1");
let btn2= document.getElementById("btn2");
let intervalo;

btn1.addEventListener("click",()=>{
    intervalo=setInterval(()=>{
        let fecha = new Date();
        texto.textContent="";
        let hora=fecha.getHours();
        let min=fecha.getMinutes();
        let sec=fecha.getSeconds();
        let dec=Math.floor(fecha.getMilliseconds()/100);
        texto.value=hora+":"+min+":"+sec+":"+dec;
    },100);
});//on

btn2.addEventListener("click",()=>{
    clearInterval(intervalo);
})