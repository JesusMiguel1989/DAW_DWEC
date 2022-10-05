var opcion;

do{
    alert("Opciones\na) saludo\nb)despedida")
    opcion=prompt("Dime una letra");
    if(!isNaN(opcion) && opcion.length>=1){
        alert("No me has dado una letra");
    }
}while(!isNaN(opcion) && opcion.length!=0)

opcion=opcion.toLowerCase();

switch(opcion){
    case 'a':
        alert("Hola que tal");
        break;
    case 'b':
        alert("Hasta pronto");
        break;
    default:
        alert("Opcion Incorrecta");
        break;
}