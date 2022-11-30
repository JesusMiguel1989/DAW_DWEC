let form1 = document.getElementById("formulario1");//captura el 1 formulario
//let form2 = document.getElementById("formulario2");//captura el 2 formulario

let formularios = document.getElementsByTagName("form");//da la coleccion de form

let form2 = formularios[1];

let f2 = document.getElementsByTagName("form")[1];//cogeria el 2 formulario [1]

document.getElementById("boton").addEventListener("click",()=>{
    console.log("Haspulsado el boton");
})

form1.addEventListener("submit",()=>{
    console.log("Estas intentando enviar informacion al servidor");
    //se puede capurar para comprobar el contenido del formulario, para despues si esta correcto mandarselo manualmente
})

let miExpresionRegular =/^[AEIOU][13579][02468]\..{4}$/;
let miCodigo= document.getElementById("ciudad");

document.getElementById("formulario2").addEventListener("submit",(evento)=>{
    if(miExpresionRegular.text(miCodigo.textContent)){
        console.log("estas intentando enviar un informe");
    }else{
        alert("El codigo introducido no es correcto");
        evento.preventDefault();
    }
});