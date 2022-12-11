
let exprej1 = /^Parra/;

let cadena = "Parra tenia una perra";
let cadena1 = "parra tenia una parra";

console.log("cadena  ", exprej1.test(cadena));
console.log("cadena 1 ", exprej1.test(cadena1));

//ejercicio2 Expresión regular para que el texto contenga parra, sin distinguir mayúsculas de minúsculas.

let exprej2 = /parra/i;
let cadena3 = "Parra tenia una perra";
let cadena4 = "la parra del patio";
let cadena5 = "la perra del patio";

console.log("cadena 3 ", exprej2.test(cadena3));
console.log("cadena 4 ", exprej2.test(cadena4));
console.log("cadena 5 ", exprej2.test(cadena5));

//ejercicio 3 Expresión regular para que el texto termine con la letra s.
let exprej3 = /s$/;

let cadena6 = "Tres tristes tigres";
let cadena7 = "Tres tristes tigre";

console.log("cadena 6 ", exprej3.test(cadena6));
console.log("cadena 7 ", exprej3.test(cadena7));

//Ejercicio 4 Expresión regular para que el texto empiece por o o por p y que además contenga la letra q.
let exprej4 = /^[op].*q/;

let cadena8 = "otro podador que por alli pasaba";
let cadena9 = "podo la parra de mi tio Porro";

console.log("cadena 8 ", exprej4.test(cadena8));
console.log("cadena 9 ", exprej4.test(cadena9));

//ejercicio 5 Expresión regular para que el texto contenga palabras cuya primera letra sea una p, 
//a continuación, cualquier letra, luego una o más r y por último una a.
let  exprej5 = /\b[p][a-z]r+a\b/;

let cadena10 = "Parra tenia una parra";
let cadena11 = "pero la perra de Parra";
let cadena12 = "p1rra tenia parra";

console.log("cadena 10 ", exprej5.test(cadena10));
console.log("cadena 11 ", exprej5.test(cadena11));
console.log("cadena 12 ", exprej5.test(cadena12));

//ejercicio 6 Expresión regular para que el texto termine en punto (.)
///broot\b.+*\badmin\b|\badmin\b.*\broot\b/;
let exprej6 = /\.$/;

let cadena13="Parra tenia una perra.";
let cadena14 = "Parra tenia una perra,";
let cadena15 = "Parra tenia una perra";

console.log("cadena 13 ", exprej6.test(cadena13));
console.log("cadena 14 ", exprej6.test(cadena14));
console.log("cadena 15 ", exprej6.test(cadena15));

//ejercicio 7 Expresión regular para que el texto contenga perro, perra, tigre o tigresa.

let exprej7 = /\bperro\b|\bperra\b|\btigres\b|\btigresa\b/;
///\bperr[oa]\|\btigre(sa)?\b/
let prueba = /\bperr[oa]\b|\btigre(sa)?\b/;

let cad="tigresa en el circo";
console.log("cad ", prueba.test(cad));

let cadena16 = "Mi mascota es un perro";
let cadena17 = "mi mascota es un gato";

console.log("cadena 16 ", exprej7.test(cadena16));
console.log("cadena 17 ", exprej7.test(cadena17));

//ejercicio 8 Expresión regular para que el texto empiece por una palabra que contenga una t.
let exprej8 = /^\b[a-zñáéíóú]*t[a-zñáéíóú]*\b/i;
///\w*t\w*\b/i;

let cadena18 ="Coge un atajo";
let cadena19 = "Atajando llego antes";

console.log("cadena 18 ", exprej8.test(cadena18));
console.log("cadena 19 ", exprej8.test(cadena19));

//ejercicio 9 Expresión regular para que el texto empiece por vocal.
let exprej9 =/^[aeiou]/i;

let cadena20 ="Ana hace los ejercicios";
let cadena21 = "Jesus hace los ejercicios";

console.log("cadena 20 ", exprej9.test(cadena20));
console.log("cadena 21 ", exprej9.test(cadena21));

//ejercicio 10 Expresión regular para que el texto empiece por una T o una P (mayúscula o minúscula) y que terminan con un punto.
let exprej10 = /^[TP].*\.$/i;

let cadena22 ="Ana hace los ejercicios";
let cadena23 = "Pablo hace los ejercicios.";
let cadena24 = "quique hace los ejercicios";

console.log("cadena 22 ", exprej10.test(cadena22));
console.log("cadena 23 ", exprej10.test(cadena23));
console.log("cadena 24 ", exprej10.test(cadena24));

//ejercicio 11 Expresión regular para que el texto empiece por una T o una P (mayúscula o minúscula), o bien que terminan con un punto.
let exprej11 = /^[TP]|\.$/i;

let cadena25 ="Ana hace los ejercicios.";
let cadena26 = "Pablo hace los ejercicios";
let cadena27 = "tatiana hace los ejercicios";

console.log("cadena 25 ", exprej11.test(cadena25));
console.log("cadena 26 ", exprej11.test(cadena26));
console.log("cadena 27 ", exprej11.test(cadena27));

//ejercicio 12 Expresión regular para que el texto tenga algún signo de interrogación, coma o punto.
let exprej12 = /\?|\¿|\,|\./;

let cadena28 = "Quien eres?";
let cadena29 = "Quien eres";
let cadena30 = "Quien eres.";

console.log("cadena 28 ", exprej12.test(cadena28));
console.log("cadena 29 ", exprej12.test(cadena29));
console.log("cadena 30 ", exprej12.test(cadena30));

//ejercicio 13 Expresión regular para que el texto tenga las palabras casa y moto en ese orden
let exprej13 = /\bcasa\b.*\bmoto\b/;

let cadena31="La casa de gustavo";
let cadena32="cerca de la casa guardo la moto";

console.log("cadena 31 ", exprej13.test(cadena31));
console.log("cadena 32 ", exprej13.test(cadena32));

//ejercicio 14 Expresión regular para que el texto tenga las palabras casa y moto en el orden que sea
let exprej14 = /\bcasa\b.*\bmoto\b|\bmoto\b.*\bcasa\b/;

let cadena33="La casa de gustavo";
let cadena34="cerca de la casa guardo la moto";
let cadena35="la moto esta cerca de la casa";

console.log("cadena 33 ", exprej14.test(cadena33));
console.log("cadena 34 ", exprej14.test(cadena34));
console.log("cadena 35 ", exprej14.test(cadena35));

//ejercicio 15 Expresión regular para que el texto tenga las palabras casa o moto
let exprej15 = /.*\bcasa\b.*|.*\bmoto\b.*/;

let cadena36 = "Estoy en casa";
let cadena37 = "Voy en moto";
let cadena38 = "Fui a casa en moto";

console.log("cadena 36 ", exprej15.test(cadena36));
console.log("cadena 37 ", exprej15.test(cadena37));
console.log("cadena 38 ", exprej15.test(cadena38));

//ejercicio 16 Expresión regular para que el texto tenga alguna palabra de 5 letras, las dos ultimas que sean ía.
let exprej16 = /\b[a-zñáéíóú]{3}ía\b/i;

let cadena39 = "María";
let cadena40 = "EvaMaría";
let cadena41 = "Patría";

console.log("cadena 39 ", exprej16.test(cadena39));
console.log("cadena 40 ", exprej16.test(cadena40));
console.log("cadena 41 ", exprej16.test(cadena41));