var anio;

do {
    anios = parseInt(prompt("Dime el año "));
    if (isNaN(anios)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
}while(isNaN(anios))

if((anios%4==0 && anios%100!=0) || (anios%100==0 && anios%400==0) ){
    document.write("Es bisieto");
}else{
    document.write("No es bisiesto");
}