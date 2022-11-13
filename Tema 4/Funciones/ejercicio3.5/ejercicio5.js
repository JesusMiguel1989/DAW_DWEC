/*
Un amigo funcionario nos pide que le hagamos un archivador para sus informes.
• Debemos gestionar informes que están formados de un código numérico y una tarea que pueden ser ADMINISTRATIVO, EMPRESARIAL y PERSONAL. 
Debe comprobarse que la tarea es alguna de estas, si no, no se agregarán.
o Para la construcción de los informes se usará una función constructora a la que se le pasará código y tarea.
o Un método llamado getCodigo que devolverá el código
o Un método llamado getTarea que devolverá la tarea
• Nuestro amigo quiere que seamos capaz de agregar y eliminar informes en forma de pila (el último en entrar, es el primero en salir).
Para ello dispondremos de una página web con dos textbox, dos botones y un textarea
o El primer textbox corresponderá con el código
o El segundo textbox corresponderá con la tarea
o Cuando se le dé al primer botón creará un nuevo objeto informe (siempre que la tarea sea adecuada) y lo apilará en un array
o Cuando se pulse el segundo botón desopilará del array el último informe introducido, borrará el contenido del textarea 
y mostrará después en el textarea el código y la tarea del informe desapilado
• Compruébalo realizando la siguiente secuencia
o Agrega 5 informes.
o Obtén 3 informes.
o Agrega de nuevo 2 informes.
o Saca todos los informes.
*/
function Tareas(cod,tarea){
    this.codigo=cod;
    this.tarea=tarea;

    this.getCodigo=()=>this.codigo;
    this.getTarea=()=>this.tarea;
}

//variables del DOM
let codigo=document.getElementById("codigo");
let tarea=document.getElementById("tarea");
let btnAñadir=document.getElementById("btnAñadir");
let btnRealizar=document.getElementById("btnRealizar");
let txtArea=document.getElementById("txtArea");

//variables del programa
let tareas = [];//array de las tareas
let aux;//variable que recoge el objeto antes de meterlo en el array
let cod, tar;//variables que recogen los input
let cadena="";//String para el texarea
let i;//variable del programa

//funcion que muestra en el txtarea
function ver(tareas){
    let i=0,aux=tareas;
    cadena="Tarea*****Codigo*****Tipo\n";
    for(i=0;i<tareas.length;i++){
        cadena+="Tarea"+(i+1)+"     "+aux[i].getCodigo()+"     "+aux[i].getTarea()+"\n";
    }
    return cadena;
}

//boton agregar tarea
btnAñadir.addEventListener("click",(cod,tar)=>{
    cod=parseInt(codigo.value);
    tar=tarea.value;
    tar=tar.toLowerCase();
    if(!isNaN(cod) && (tar!="administrativo" && tar!="empresarial" && tar!="personal")){
        txtArea.innerHTML="Uno de los campo es erroneo";
    }else{
        aux=new Tareas(cod,tar);
        tareas.unshift(aux);
        txtArea.innerHTML=ver(tareas);
    }
});

btnRealizar.addEventListener("click",(cod,tar)=>{
    if(tareas.length==0){
        txtArea.innerHTML="No tienes tareas, me extraña";
    }else{
        aux=tareas.shift();
        txtArea.innerHTML=ver(tareas);
    }
})
