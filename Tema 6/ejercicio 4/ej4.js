window.addEventListener("DOMContentLoaded", () => {
    let capa = document.getElementById("capa");
    let parrafos = capa.querySelectorAll("p");
    let visible = document.getElementById("visible");
    let i = 0

    window.setInterval(() => {
        if (i == parrafos.length) {
            window.clearInterval();
        } else {
            visible.appendChild(parrafos[i]);
            i++;
        }

    }, 1000);
})