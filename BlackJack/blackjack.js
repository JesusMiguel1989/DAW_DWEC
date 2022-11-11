/*
blackJack
*/

function Carta(num, palo) {
    this.numero = num;
    this.palo = palo;

    this.getNumero = () => this.numero;
    this.getpalo = () => this.palo;

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

    valorJugador(turno) {
        let total = 0;//puntuacion del jugador
        let carta;//objeto carta
        let i;
        let aux;//auxiliar donde se guardara la mano del jugador activo

        if (!turno) {
            aux = this.jugador;
        } else {
            aux = this.maquina;
        }

        //calculamos 1 vez la puntuacion
        for (i = 0; i < aux.length; i++) {
            carta = aux[i][0].getNumero();
            if (carta >= 10) {
                total += 10;
            } else {
                if (carta == 1) {
                    total += 11;
                } else {
                    total += carta;
                }
            }
        }//for
        //comprobamos que esta por debajo de 21,sino los as pasan a valer 1
        if (total > 21) {
            total = 0;
            for (i = 0; i < aux.length; i++) {
                carta = aux[i][0].getNumero();
                if (carta >= 10) {
                    total += 10;
                } else {
                    total += carta;
                }
            }//for
        }//if si supera los 21, 2 oportunidad
        return total;
    }

    //mostrar cartas
    mostrar(turno) {
        let cadena = "";//cadena donde se guardara el nombre de la carta
        let cadena1="";
        let aux;//auxiliar donde se guardara la mano del jugador activo
        let i;//variable programa
        let variable;

        if (!turno) {
            aux = this.jugador;
            variable=document.getElementById("jugador");
        } else {
            aux = this.maquina;
            variable=document.getElementById("banca");
        }

        for (i = 0; i < aux.length; i++) {
            switch (aux[i][0].getpalo()) {
                case 0:
                    cadena = "Club" + aux[i][0].getNumero() + ".png";
                    break;
                case 1:
                    cadena = "Diamond" + aux[i][0].getNumero() + ".png";
                    break;
                case 2:
                    cadena = "Heart" + aux[i][0].getNumero() + ".png";
                    break;
                case 3:
                    cadena = "Spade" + aux[i][0].getNumero() + ".png";
                    break;
            }
            cadena1+='<img src="./cartas/' + cadena + '">';
            variable.innerHTML = cadena1;
            
        }
        cadena="";
        //return cadena;
    }
}

//variables DOM
let barajar = document.getElementById("barajar");
let pedir = document.getElementById("pedir");
let plantarse = document.getElementById("plantarse");
let comprobar = document.getElementById("comprobar");
let resultado=document.getElementById("resultado");
let nueva=document.getElementById("nueva");
let banca=document.getElementById("banca");
let jugador=document.getElementById("jugador");
let marcador=document.getElementById("marcador");
let marcador1=document.getElementById("marcador1");

//variables js
let comprobador = false;//comprobador de que el jugador a barajeado
let puntuacion = 0, punto = 0;//puntuacion
let baraja = new Baraja();
let turno = false;//boleano para saber a quien le damos carta
let cadena = "";//cadena que recoge la imagen

barajar.addEventListener("click", () => {
    baraja.generarBaraja();
    baraja.barajar();
    comprobador = true;
    alert("barajado");
});//boton barajear

pedir.addEventListener("click", () => {
    //let puntuacion=0;
    if (!comprobador || puntuacion > 21) {
        document.write("Barajea primero tramposo");
    } else {
        baraja.extraerJugador();
        puntuacion = baraja.valorJugador(turno);
        baraja.mostrar(turno);
        marcador.innerHTML=puntuacion;
    }
    
});//pedir cartas

plantarse.addEventListener("click", () => {
    turno = true;
    if (!comprobador || punto > 21) {
        document.write("Barajea primero tramposo");
    } else {
        while (punto < puntuacion && puntuacion <= 21) {
            baraja.extraerMaquina();
            punto = baraja.valorJugador(turno);
            baraja.mostrar(turno);
            marcador1.innerHTML=punto;
        }
    }
});//turno de la maquina

comprobar.addEventListener("click", () => {
    if (puntuacion <= 21) {
        if (punto <= 21) {
            if (puntuacion > punto && punto <= 21) {
                resultado.innerHTML="Ganó el jugador";
            } else {
                if (puntuacion == punto) {
                    resultado.innerHTML="Empate";
                } else {
                    resultado.innerHTML="Ganó la Casa";
                }
            }
        } else {
            resultado.innerHTML="Ganó el Jugador";
        }
    } else {
        resultado.innerHTML="Gano la Banca";
    }


});//mostrar ganador

nueva.addEventListener("click",()=>{
    baraja = new Baraja();
    turno=false;
    marcador.innerHTML=" ";
    marcador1.innerHTML=" ";
    banca.innerHTML=" ";
    jugador.innerHTML=" ";
    puntuacion=0;
    punto=0;
    resultado.innerHTML=" ";
})