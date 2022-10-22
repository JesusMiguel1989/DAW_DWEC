let fechahoy;
let fechanvieja;
let diferencia;
let dias,horas,min,seg;
let aux;

fechahoy=new Date();
fechanvieja= new Date(fechahoy.getFullYear()+1,0,1,0,0,0);

diferencia=fechanvieja.getTime()-fechahoy.getTime();
alert(fechanvieja);

alert("Son "+diferencia+ " milesegundos");

diferencia=diferencia/1000/60/60/24;
dias=Math.floor(diferencia);

aux=(diferencia-Math.floor(diferencia))*24;
horas=Math.floor(aux);

aux=(aux-horas)*60;
//horas=Math.floor(((fechanvieja.getTime()-fechahoy.getTime())/1000/60/60))-(dias*60);

min=Math.floor(aux);
aux=(aux-min)*60;
//min=Math.floor(((fechanvieja.getTime()-fechahoy.getTime())/1000/60/60))-(diferencia*24*60);

seg=aux;
//seg=Math.floor(((fechanvieja.getTime()-fechahoy.getTime())/1000/60/60))-(diferencia*25*360);

//pasarlo todo a milisegundos

alert("Quedan " + diferencia + " días");

alert("Quedan:\nDias : "+dias+"\nHoras : "+horas+"\nMinutos : "+min+"\nSegundos : "+ seg);