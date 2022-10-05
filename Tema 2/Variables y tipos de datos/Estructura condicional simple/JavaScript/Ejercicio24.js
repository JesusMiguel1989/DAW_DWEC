var horas, precio, total;
const MAX=40;
var calculo;

do {
    horas = parseInt(prompt("Dime las horas que ha trabajado"));
    if (isNaN(horas)) {
        alert("no has metido numeros, vuelve a intentarlo")
    }
    precio = parseInt(prompt("Dime el precio de las horas"));
}while(isNaN(horas) && isNaN(precio))

calculo=horas-40;
if(calculo>0){
    total=(40*precio)+(calculo*(precio*1.5));
    document.write("Ha hecho " + calculo + " y este trabajador va a cobrar " + total + "€");
}else{
    total=horas*precio;
    document.write("No ha hecho horas extras por lo que su salario esta semana es : " + total + "€")
}