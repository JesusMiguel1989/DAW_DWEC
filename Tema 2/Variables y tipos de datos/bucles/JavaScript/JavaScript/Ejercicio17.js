var suma;

suma=0;

for(i=9;i<=45;i++){
    if(i%3==0 && (i<21 || i>27) && i%7==0){
        suma = suma+i;
    }
}

document.write("La suma es " + suma);
console.log("La suma es " + suma);