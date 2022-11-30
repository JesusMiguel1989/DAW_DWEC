let cadena ="Maria esta en casa";

//creaccion de una expresion regular
let expr = new RegExp("^Maria");// haciendolo como un objeto
let expr2 = /^Maria/;//haciendolo directamente

//comprobamos que tenga una cadena o empiece por ella
//Console.log(cadena.match(expr));
// let e = new RegExp("\bc");//creaccion de una expresion regular
//metodos de expresiones regulares
//expr.exec(); 
//devuelve la coincidencia del string con la expresion regular
//Console.log(expr.exec(cadena));

//test devuelve un bool
//expr.text();
/*console.log(expr.test(cadena));
//devuelve en booleano si es true o false

let expr3=/^[AEIOU][13579][24680]\...../;
//let expr3=/^[AEIOU][13579][24680]\..{4}$/; otra forma
let cad2="A12.dgt3";
let cad3="A21.dgt3";
let cad4="A12d.gt3";
let cad5="a12.dgt3";
let cad6="A'12.dgt3";
console.log(expr3.test(cad2));
console.log(expr3.test(cad3));
console.log(expr3.test(cad4));
console.log(expr3.test(cad5));
console.log(expr3.test(cad6));*/


let expr3 = /root/;
let expr4 = /\broot\b/;

console.log(expr3.test("Estoy rooteando paquetes"));
console.log(expr3.test("root es el ad del sistema"));

console.log(expr4.test("Estoy rooteando paquetes"));
console.log(expr4.test("root es el ad del sistema"));