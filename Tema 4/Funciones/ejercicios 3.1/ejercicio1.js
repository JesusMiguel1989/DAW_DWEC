/*
Imaginemos que vamos a desarrollar un juego y debemos crear objetos de
tipo Jugador que tengan una propiedad fuerza que inicialmente tenga el
valor 1, un método incrementarFuerza que nos permita incrementar en 1 la
fuerza del jugador y un método consultarFuerza que muestre un mensaje
por consola con la fuerza del jugador.
*/

function Jugador(){
    this.fuerza=1;

    this.GetFuera=()=>{
        return this.fuerza;
    }

    this.SetFuerza= (fuerza)=>{
        this.SetFuerza = fuerza;
    }

    this.incrementarFuerza = () =>{
        this.fuerza++;
    }

    this.mostrarFuerza = () =>{
        return this.fuerza;
    }
}

let jugador1=new Jugador();

jugador1.incrementarFuerza();
console.log(jugador1.mostrarFuerza());