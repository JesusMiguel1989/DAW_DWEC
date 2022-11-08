/*
Un supermercado nos pide que hagamos una pequeña aplicación que almacene los productos pasados por el scaner
• Queremos crear objetos que representen a productos, de ellos necesitamos
o Para la construcción de los productos se usará una función constructora a la que se le pasará cantidad y precio.
o Un método llamado getCantidad que devolverá la cantidad
o Un método llamado getPrecio que devolverá el precio de un producto
o Un método llamado getPrecioFinal que devolverá el precio de de todos los productos (El número de productos viende dado por cantidad)
• Crea una página web con dos textbox, dos botones y un textarea
o Al primer textbox corresponderá con cantidad
o El segundo textbox corresponderá con precio
o Cuando se le dé al primer botón creará un nuevo objeto producto y lo meterá en un array
o Cuando se pulse el segundo botón irá sacando del array en el mismo orden que se introdujeron productos hasta dejarlo vacío. 
Mostrará en el textarea un ticket con todo lo vendido y el precio final como hacen los supermercados
*/

function Producto(can, pre){
    this.cantidad=can;
    this.precio=pre;

    this.getCantidad=()=> this.cantidad;
    this.getPrecio=()=> this.precio;

    this.getPrecioFinal=()=>{
        return this.cantidad*this.precio;
    }
}

//variables provenientes del DOM
let cantidad=document.getElementById("cantidad");
let precio=document.getElementById("precio");
let btnCrear=document.getElementById("btnCrear");
let btnTicket=document.getElementById("btnTicket");
let txtArea=document.getElementById("txtArea");

//variables del programa
let productos = [];//array objetos
let aux;//variable que recogera el objeto temporal
let cant,pre;//variables de los input
let cadena="";//variable para recoger la cadena final
let i,precioFinal=0;//variable del programa
cadena="**************Cantidad*********Precio****Total\n";

//accion del boton de crear
btnCrear.addEventListener("click",(cant,pre)=>{
    cant=cantidad.value;
    pre=precio.value;
    if(!isNaN(cant) && !isNaN(pre)){
        aux=new Producto(cant,pre);
        productos.push(aux);
        txtArea.innerHTML="Producto introducido";
    }else{
        txtArea.innerHTML="Dame numeros mejor";
    }
});

//boton del ticket
btnTicket.addEventListener("click",()=>{
    if(productos.length<0){
        txtArea.innerHTML="No sere yo quien te diga que no me pagues por nada";
    }else{
        for(i=0;i<productos.length;i++){
            aux=productos.shift();
            cadena+="Producto"+i+"     "+aux.getCantidad()+"\t\t"+aux.getPrecio()+"€\t "+aux.getPrecioFinal().toFixed(2)+"€\n";
            precioFinal+=aux.getPrecioFinal().toFixed(2);
        }
        cadena+="Precio Final\t\t\t\t"+precioFinal+"€";
        txtArea.innerHTML=cadena;
    }
});