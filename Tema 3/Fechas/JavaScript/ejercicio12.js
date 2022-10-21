/*
Realiza un script pida un mes y año e imprima su calendario. 
No hace falta esmerarse en la presentación del calendario, 
el calendario simplificado puede ser del tipo: 
OCTUBRE – 2014 1 (miercoles), 2 (jueves), ….. , 31 (viernes).
*/

//variables
let mes,year;
let dias = [' ','Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado','Domingo'];
let meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Ahosto','Septiembre','Octubre','Noviembre','Diciembre'];
let fecha;

do{
    mes=prompt("Dime un mes");
    year=prompt("Dime un año");
}while(isNaN(mes) || isNaN(year));

//en js los meses van desde el 0 al 11, le resto 1 para coincidir
mes--;
fecha=new Date(year, mes - 1, 1, 0, 0, 0);

console.log(fecha);

let auxiliar;
while(fecha.getMonth()!=mes+1){
    document.write(fecha.getMonth()+"-"+dias[fecha.getDay()]+ "-" + fecha.getDate());
    auxiliar=fecha.getTime();
    auxiliar+=(1000*60*60*24);
    fecha=new Date(auxiliar);
}
