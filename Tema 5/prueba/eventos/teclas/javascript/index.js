let funcionRaton = (ev) => {
    console.log("Cliente X :" + ev.clientX);
    console.log("Cliente Y :" + ev.clientY);
    console.log("screen X :" + ev.screenX);
    console.log("screen y :" + ev.screenY);
    console.log("page X :" + ev.pageX);
    console.log("page y :" + ev.pageY);
}

let funcionSeguimiento = (e) => {
    document.getElementById("Hola").style.left = e.clientX + "px";
    document.getElementById("Hola").style.top = e.clientY + "px";
}

document.addEventListener("mousemove", funcionSeguimiento);
let documento=document.getElementById("imagen");


document.body.addEventListener("keyup",function(evento){
    if(evento.altKey && evento.key=="F12"){
        let capa=document.getElementById("capa");
        capa.style.backgroundImage="url('https://source.unsplash.com/random')";
    }
})


let funcionTeclas = (t) => {
    console.log(t.keyCode);
    if (t.altKey && t.keyCode == 123) {
        //document.innerHTML="<img src='./imagen/recortado.png'>";
        //documento.setAttribute("src", "recortado.png");
        documento.style.display="block";
       
    }else{
        documento.style.display="none";
    }
}


document.body.addEventListener("keydown", funcionTeclas);