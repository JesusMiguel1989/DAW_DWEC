var letra;

do{
    letra=prompt("Dime una letra y te dire si es una vocal");
    if(!isNaN(letra) || letra.length!=1){
        alert("No me has dado una letra");
    }
}while(!isNaN(letra) || letra.length!=1)
//comprobacion de que le metemos una letra

//lo pasamos a minusculas para la comprobacion
letra=letra.toLowerCase();

//y hacemos la comprobacion
if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u'){
    document.write("Es una vocal");
}else{
    document.write("Es una consonante");
}