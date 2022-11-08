/*
Un cine de un pueblo pequeño nos propone hacer una aplicación para
controlar las personas de una cola de un cine en los grandes estrenos de
películas.
• Queremos crear objetos que representen personas, de ellos necesitamos
o Para la construcción de las personas se usará una función constructora
a la que se le pasará la edad de las persona.
o Un método llamado setEdad que permitirá cambiar la edad de la
persona
o Un método llamado getEdad que devolverá la edad de la persona
• Genera un array de personas
o El número de personas será al azar entre 5 y 50 (Que una función se
encargue de esto)
o La edad de la persona será al azar entre 5 y 60 (Que una función se
encargue de esto)
• Muestra la cantidad total recaudada, el número total de personas que
asistieron, el número de personas entre 5 y 10 años, el número de personas
entre 11 y 17 años y el número de personas mayores de 18 años. Para ello,
ve sacando personas del array en el mismo orden en el que llegaron y
teniendo en cuenta la siguiente lista de precios
• Recuerda que al final el array tiene que quedar vacío y que una vez que
una persona paga su entrada ya no está en el array.
*/

function Personas (n,e){
    this.nombre=n;
    this.edad = e;

    this.GetEdad= ()=>this.edad;

    this.setEdad = (edad) => {
        this.edad=edad;
    }
}

function asistentesAleatorios(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}

let colaPersonas = [];
let i;//variables del programa
let totales=asistentesAleatorios(5,50);
let usuarios = [0,0,0];

for(i=0;i<totales;i++){
    let nombre="Persona"+i;
    let edad=asistentesAleatorios(5,60);
    let nuevoCliente=new Personas(nombre,edad);
    colaPersonas.push(nuevoCliente);
}

//bucle for para saber cuantos clientes son de que franjas de edad
for(i=0;i<totales;i++){
    let caja=colaPersonas.shift();
    let edad=caja.GetEdad();
    if(edad<11){
        usuarios[0]+=1;
    }else{
        if(edad<18){
            usuarios[1]+=1;
        }else{
            usuarios[2]+=1;
        }
    }
}

document.write("Usuario entre los 5 y los 10 son: " + usuarios[0] + " aportan " + usuarios[0]*2 + "€<br>");
document.write("Usuario entre los 11 y los 17 son: " + usuarios[1] + " aportan " + usuarios[1]*4 + "€<br>");
document.write("Usuario entre mayores de 18 son : " + usuarios[2] + " aportan " + usuarios[2]*6 + "€<br>");