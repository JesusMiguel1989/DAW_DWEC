/*
Realiza un script que escriba en el documento la fecha y hora actual. La salida deberá tener el siguiente formato:
Hoy es martes, 19 de Octubre de 2021 y son las 13:32 horas.
*/

let fecha = new Date();

//array de dias
let dias = [' ','Lunes', 'Martes', 'Miercoles','Jueves','Viernes','Sabado','Domingo'];
let mes = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Ahosto','Septiembre','Octubre','Noviembre','Diciembre'];

document.write("Hoy es " + dias[fecha.getDay()] + ", "+fecha.getUTCDay()+" de " + mes[fecha.getMonth()]+ " del " + fecha.getFullYear() + " y son las "
                 + fecha.getHours() + ":" + fecha.getMinutes() );