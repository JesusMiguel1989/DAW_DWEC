/*
Crea un array multidimensional que contenga la tabla de multiplicar del 1 al 9 (9 filas y 9 columnas). 
La primera columna debe contener estos números. Algo así:
*/

let i, j;//variables programa
let tablas = [];//array que contiene las tablas



for (i = 0; i <= 10; i++) {
    let fila = [];
    for (j = 0; j <= 10; j++) {
        fila[j] = i * j;
    }
    tablas.push(fila);
}

for (i = 0; i <= 10; i++) {
    for(j=1;j<10;j++){
        if(tablas[i][j]<10){
            document.write("0"+tablas[i][j]+"&nbsp&nbsp");
        }else{
            document.write(tablas[i][j]+"&nbsp&nbsp");
        }
    }
    document.write("<br>");
}

