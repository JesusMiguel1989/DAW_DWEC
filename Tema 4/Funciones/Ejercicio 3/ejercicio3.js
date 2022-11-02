/*
En muchos casos de la historia, para descifrar textos se ha utilizado el sistema de análisis 
por frecuencia de aparición de letras ya que hay letras que aparecen más frecuentemente que otras. 
Dado un texto pasado mediante un cuadro de texto, debes hacer un programa que cuente el número de veces 
que aparece cada letra del abecedario en el mismo. Puede haber letras que no aparezcan con lo cual se pondrá valor 0.
*/

let texto=document.getElementById("cadena");
let btn=document.getElementById("btn");

//arrays
let arrayAbecedario = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z'];
let arraySolucion = [];
let cadena = [];
let i,j;//variable numerica


//arrays para la conversion de acentos y dieresis
let acentos = ['á','é','í','ó','ú'];
let vocales = ['a','e','i','o','u'];
let dieresis = ['ä','ö','ü'];
let vocales1 = ['a','o','u'];

//rellenamos el arraynumeros con 0
for(i=0;i<arrayAbecedario.length;i++){
    arraySolucion.push(0);
}

//funcion que convierte caracteres
function transformarStringBasico(cadena){
    
    for(i=0;i<cadena.length;i++){
        for(j=0;j<acentos.length;j++){
            if(cadena[i]==acentos[j]){
                cadena[i]=vocales[j];
            }
        }//for que recorre el array acentos
        for(j=0;j<dieresis.length;j++){
            if(cadena[i]==dieresis[j]){
                cadena[i]=vocales1[j];
            }
        }//for para las dieresis
    }//for que recorre cadena
}

//funcione que calcula las apariciones
function comprobarCaracter(cadena){
    for(i=0;i<cadena.length;i++){
        for(j=0;j<arrayAbecedario.length;j++){
            if(cadena[i]==arrayAbecedario[j]){
                arraySolucion[j]++;
            }
        }
    }
}

function mostrar(cadena){
    for(i=0;i<arrayAbecedario.length;i++){
        document.write(arrayAbecedario[i]+" ha aparecido "+arraySolucion[i]+" veces<br>" );
    }
}

btn.addEventListener("click",()=>{
    cadena=texto.value;
    cadena=cadena.toLowerCase();
    cadena=cadena.split("");
    transformarStringBasico(cadena);
    comprobarCaracter(cadena);
    mostrar(cadena);
})

