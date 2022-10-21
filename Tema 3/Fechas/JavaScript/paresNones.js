/*
Realiza un programa para jugar a “pares o nones” con el ordenador. 
El juego comenzará pidiéndote el número de dedos qué quieres sacar a través de un prompt, 
si el número no está entre 1 y 5 volverá a pedírtelos hasta que los pongas bien. Después te preguntará 
¿Pares o Nones? Y lo pregunta´ra hasta que respondas una de las dos opciones. 
Una vez puestos bien generará un número aleatorio entre 1 y 5 que será el número de dedos del oponente, 
según si has elegido pares o nones calculará quien gana y creará una página web similar a esta. 
(Las imágenes estarán disponibles en el aula virtual)
*/

//variables jugador
let numero;//variable numerica
let eleccion;//variable string

//variables maquina
let num1;//numerica

//variables programa
let total;//numerica
let jugador,pc,marcador;//variables para la imprsion de la imagen
jugador=document.getElementById("jugador");
pc=document.getElementById("pc");
marcador=document.getElementById("marcador");


do {
    numero = parseInt(prompt("Cuantos dedos sacas"));
    if (isNaN(numero)) {
        alert("No me has dado un numero");
    }
    if (numero<1 && numero>5) {
        alert("Me has dado un numero BIEN\n pero recuerda que tiene que ser del1 al 5\n Vuelve a probar");
    }
}while(numero<=0 && numero>=6);

do {
    eleccion = prompt("Dime que quieres\nPares\nnones");
    eleccion.toLowerCase();
} while (eleccion != "pares" && eleccion != "nones");

num1=Math.floor(Math.random()*(5-1)+1);

total=num1+numero;

if(total%2==0){
    if(eleccion=="pares"){
        alert("gana el jugador");
    }else{
        alert("Gana la maquina");
    }
}else{
    if(eleccion=="nones"){
        alert("Gana el jugador");
    }else{
        alert("Gana la maquina");
    }
}