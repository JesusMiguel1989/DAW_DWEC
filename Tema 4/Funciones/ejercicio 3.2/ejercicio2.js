/*
Queremos crear objetos que representen puntos, de ellos necesitaremos:
• Que tengan dos propiedades, “x” e “y”. Servirán para representar las
coordenadas del punto.
• Para la construcción de los puntos se usará una función constructora a la
que se le pasan dos números. Si lo que recibe en cada coordenada no es un
número, se colocará un 0;
• Un método llamado cambiar al que le pasamos dos números y nos
permite modificar las coordenadas del punto. Si lo que recibe en cada
coordenada no es un número, se colocará un 0.
• Un método llamado copia que retorna una copia del objeto
• Un método llamado iguales que recibe un segundo punto y nos dice si
ambos puntos son iguales
• Un método llamado suma que recibe un segundo punto y devuelve un
tercer punto resultado de sumar las coordenadas de los dos anteriores. Si
no recibe un punto devolverá una copia del actual
• Finalmente, un método llamado toString que retorna un texto con las
coordenadas del punto. Por ejemplo (-5,2).
*/

//si no es un numero con la funcion isNaN sabemos si lo es o no
function Punto (num1, num2){
    if(isNaN(num1)){
        this.x=0;
    }else{
        this.x=num1;
    }
    if(isNaN(num2)){
        this.y=0;
    }else{
        this.y=num2;
    }

    this.cambiar= (num1,num2)=> {
        if(isNaN(num1)){
            this.x=0;
        }else{
            this.x=num1;
        }
        if(isNaN(num2)){
            this.y=0;
        }else{
            this.y=num2;
        }
    }

    //funcion que devuele una copia, es decir creamos otro objeto
    this.Copia = ()=>{
        return this.Punto = new Punto(this.x,this.y);
    }

    //igualdad comparamos los parametros del objeto que recibe con los propios
    this.iguales = (punto)=>{
        if(this.x == punto.x && this.y == punto.y){
            alert("los puntos son iguales");
        }else{
            alert("Los puntos no son iguales");
        }
    }

    //suma puntos si no recibe ningun punto creara otro objeto con valores 0.0
    this.suma = (punto=new  Punto(0,0))=>{
        return puntoAux= new Punto (this.x+punto.x,this.y+punto.y);
    }

    //toString
    this.toString = () =>{
        let cadena ="Las coordenadas son (" + this.x + "," + this.y + ")";
        return cadena;
    }
}

let punto1= new Punto("a",2);
console.log(punto1.toString());
let punto2 = new Punto(3,3);
console.log(punto2.toString());
let punto3= punto1.Copia();
console.log(punto3.toString());

punto1.cambiar(4,-3);
console.log(punto1.toString());

let punto4=punto1.suma(punto2);
console.log(punto4.toString());

punto1.iguales(punto2);