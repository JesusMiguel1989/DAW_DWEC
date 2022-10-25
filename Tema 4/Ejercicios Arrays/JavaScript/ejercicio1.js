/*
Queremos realizar una aplicación que nos permita comprobar hasta qué punto la función Math.random() 
es realmente aleatoria. Para ello calcularemos 10000 veces números aleatorios del 1 al 10. 
Mostraremos en la página web el número de veces que ha salido cada número. Ejemplo de resultado:
*/

let array = [0,0,0,0,0,0,0,0,0,0,0];
let numero;//variable numerica

//generamos los 10000 numeros y segun es el numero sumamos 1 a esa posicion
for (let i = 1; i <= 10000; i++) {
    numero = Math.floor(Math.random() * (11 - 1) + 1);
    switch (numero) {
        case 1:
            array[1]++;
            break;
        case 2:
            array[2]++;
            break;
        case 3:
            array[3]++;
            break;
        case 4:
            array[4]++;
            break;
        case 5:
            array[5]++;
            break;
        case 6:
            array[6]++;
            break;
        case 7:
            array[7]++;
            break;
        case 8:
            array[8]++;
            break;
        case 9:
            array[9]++;
            break;
        case 10:
            array[10]++;
            break;
        default:
            document.write("buen intento");
            break;
    }
}

//recorremos el array tras los 10000
for(i=1;i<=10;i++){
    document.write("Para el " + i + " ha salido " + array[i] + " veces<br>");
}