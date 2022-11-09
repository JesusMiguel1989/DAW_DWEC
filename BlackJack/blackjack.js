/*
blackJack
*/

function Carta(num, palo) {
    this.numero = num;
    this.palo = palo;

    this.getNumero=()=> this.numero;

    function toString(carta) {
        return "El numero es " + carta.numero + " y su palo es " + carta.palo;
    }
}

class Baraja {
    constructor() {
        this.baraja = [];//baraja
        this.jugador = [];//mano del jugador
        this.maquina = [];//mano de la maquina
    }

    generarBaraja() {
        let i, j;
        let carta;
        for (i = 0; i < 4; i++) {
            for (j = 1; j < 14; j++) {
                carta = new Carta(j, i);
                this.baraja.push(carta);
            }
        }
    }//funcion generar baraja

    barajar() {
        let auxiliar = [];
        let i = 0, aleatorio = 0;

        do {
            aleatorio = Math.floor(Math.random() * ((52 - i) - 1) + 1);
            auxiliar.push(this.baraja.splice(aleatorio, 1));
            i++;
        } while (i < 53);
        this.baraja = auxiliar;
        /*
        for(i=0;i<53;i++){
            this.baraja.push(auxiliar.splice(i,1));
        }*/
    }//funcion barajear

    extraerJugador() {
        this.jugador.push(this.baraja.shift());//extraemos la 1 cata de la braja y se la damos al jugador
    }

    extraerMaquina() {
        this.maquina.push(this.baraja.shift());//extraemos la 1 carta de a baraja y se la damos a la maquina
    }

    valorJugador() {
        let total = 0;//puntuacion del jugador
        let carta;//objeto carta
        let i;
        //calculamos 1 vez la puntuacion
        for (i = 0; i < this.jugador.length; i++) {
            //***************** */
            carta=this.jugador[i][0].getNumero();
            
            if (carta >= 10) {
                total += 10;
            } else {
                if (carta==1) {
                    total += 11;
                } else {
                    total += carta;
                }
            }
        }//for
        //comprobamos que esta por debajo de 21,sino los as pasan a valer 1
        if (total > 21) {
            for (i = 0; i < cartas; i++) {
                if (this.jugador.carta.getNumero() > 9) {
                    total += 10;
                } else {
                    if (this.jugador.getNumero() = 1) {
                        total += 1;
                    } else {
                        total += this.jugador.getNumero()
                    }
                }
            }//for
        }//if si supera los 21, 2 oportunidad
        return total;
    }

    valorMaquina() {
        let total = 0;//puntuacion del jugador
        let cartas = this.maquina.length;
        let i;
        //calculamos 1 vez la puntuacion
        for (i = 0; i < cartas; i++) {
            if (this.maquina.getNumero() > 9) {
                total += 10;
            } else {
                if (this.maquina.getNumero() = 1) {
                    total += 11;
                } else {
                    total += this.maquina.getNumero()
                }
            }
        }//for
        //comprobamos que esta por debajo de 21,sino los as pasan a valer 1
        if (total > 21) {
            for (i = 0; i < cartas; i++) {
                if (this.maquina.getNumero() > 9) {
                    total += 10;
                } else {
                    if (this.maquina.getNumero() = 1) {
                        total += 1;
                    } else {
                        total += this.maquina.getNumero()
                    }
                }
            }//for
        }//if si supera los 21, 2 oportunidad
        return total;
    }
}

//variables DOM
let barajar = document.getElementById("barajar");
let pedir = document.getElementById("pedir");
let plantarse = document.getElementById("plantarse");
let comprobar = document.getElementById("comprobar");

//variables js
let comprobador=false;//comprobador de que el jugador a barajeado
let puntuntuacion=0,punto=0;//puntuacion
let baraja = new Baraja();

barajar.addEventListener("click", () => {
    baraja.generarBaraja();
    baraja.barajar();
    comprobador=true;
    alert("barajado");
});//boton barajear

pedir.addEventListener("click",()=>{
    let puntuacion=0;
    if(!comprobador || puntuacion>21){
        document.write("Barajea primero tramposo");
    }else{
        baraja.extraerJugador();
        puntuacion=baraja.valorJugador();
    }
});//pedir cartas

plantarse.addEventListener("click",()=>{
    let punto=0;
    if(!comprobador || punto>21){
        document.write("Barajea primero tramposo");
    }else{
        baraja.extraerMaquina();
        punto=baraja.valorMaquina();
    }
});//turno de la maquina

comprobar.addEventListener("click",()=>{
    if(puntuacion>punto){
        document.write("Gano el jugador");
    }else{
        if(puntuacion=punto){
            document.write("Empate");
        }else{
            document.write("Gano la Casa");
        }
    }
});//mostrar ganador