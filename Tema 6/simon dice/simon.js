window.addEventListener("DOMContentLoaded", () => {

    function Simon() {
        let tapete = document.getElementById("tapete");
        let colores = tapete.getElementsByClassName("op");
        this.ronda = [];

        this.empezamos = (turno) => {
            let i;

            for (i = 0; i < turno; i++) {
                this.ronda[i] = Math.floor(Math.random() * (5 - 1) + 1);
            }//for que inserta
        }

        this.sigueVivo = () => {
            let numero;
            numero = Math.floor(Math.random() * (5 - 1) + 1);
            this.ronda.push(numero);
        }

        this.comprobar = (jugador) => {
            let i;
            for (i = 0; i < this.ronda.length; i++) {
                if (this.ronda[i] != jugador[i]) {
                    return false;
                }
            }
            return true;
        }

        this.mostrar = () => {
            let i = 0, j = 0;

            for (i = 0; i < this.ronda.length; i++) {
                switch (this.ronda[i]) {
                    case 1:
                        colores[0].style.backgroundColor = "red";
                        break;
                    case 2:
                        colores[1].style.backgroundColor = "green";
                        break;
                    case 3:
                        colores[2].style.backgroundColor = "yellow";
                        break;
                    case 4:
                        colores[3].style.backgroundColor = "blue";
                        break;
                }//switch

                let tiempo = new Date();
                while (new Date() - tiempo <= 2000);

                for (j = 0; j < 4; j++) {
                    colores[j].style.backgroundColor = "gray";
                }//for j
            }//for i
        }
    }//objeto simon


    //variables button
    let inicio = document.getElementById("inicio");

    let resetear = document.getElementById("jugar");
    let introducir = document.getElementById("introducir");
    let patron = document.getElementById("patron");
    let colores = document.getElementsByClassName("op");

    //jugador sera donde se guardara la respuesta del jugador
    let jugador = "";

    let partida = new Simon();


    inicio.addEventListener("click", () => {
        let rondas = 4;
        partida.empezamos(rondas);
        partida.mostrar();
    });

    for (let i = 0; i < 4; i++) {
        colores[i].addEventListener("click", () => {
            switch (i) {
                case 0:
                    colores[0].style.backgroundColor = "red";
                    colores[i].addEventListener("blur",()=>{
                        colores[0].style.backgroundColor = "grey";
                    })
                    break;
                case 1:
                    colores[1].style.backgroundColor = "green";
                    colores[i].addEventListener("blur",()=>{
                        colores[1].style.backgroundColor = "grey";
                    })
                    break;
                case 2:
                    colores[2].style.backgroundColor = "yellow";
                    colores[i].addEventListener("blur",()=>{
                        colores[2].style.backgroundColor = "grey";
                    })
                    break;
                case 3:
                    colores[3].style.backgroundColor = "blue";
                    colores[i].addEventListener("blur",()=>{
                        colores[i].style.backgroundColor = "grey";
                    })
                    break;
            }//switch
            jugador += (i + 1) + " ";
        });
    }
    introducir.addEventListener("click", () => {
        let array = jugador.split(" ");
        let acierto = true;
        jugador = "";
        acierto = partida.comprobar(array);
        if (acierto) {
            patron.textContent="Acierto";
            partida.sigueVivo();
            partida.mostrar();
        }else{
            patron.textContent="LASTIMA";
        }

    });

    resetear.addEventListener("click", () => {
        let rondas = 4;
        partida.empezamos(rondas);
        partida.mostrar();
    })
})