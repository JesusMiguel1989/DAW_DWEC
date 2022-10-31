let cajaTexto = document.getElementById("texto");
let boton = document.getElementById("boton");

var miTablaMultiplicar = [];

function mostrar() {
    let cadenaSolucion = "";
    for (let i = 0; i <= 10; i++) {
        for (let j = 0; j <= 10; j++) {
            if(miTablaMultiplicar[i][j]<10){
               cadenaSolucion +="0"+miTablaMultiplicar[i][j]+" ";
            }else{
                cadenaSolucion +=miTablaMultiplicar[i][j]+" ";
            }
            /*cadenaSolucion += miTablaMultiplicar[i][j];
            cadenaSolucion += " ";*/
        }
        cadenaSolucion += "\n";
    }
    cajaTexto.textContent = cadenaSolucion;
    cadenaSolucion="";
}


boton.addEventListener("click", () => {
    for (let i = 0; i <= 10; i++) {
        let fila = [];
        for (let j = 0; j <= 10; j++) {
            if (j == 0) {
                fila[j] = 0;
            } else {
                fila[j] = i * j;
            }
        }
        miTablaMultiplicar[i] = fila;
    }
    mostrar();
})
