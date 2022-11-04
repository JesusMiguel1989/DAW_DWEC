function Persona() {
    this.nombre = "Manuel";
    this.edad = 17;

    this.SetNombre = (nuevoNombre) => {
        this.nombre = nuevoNombre;
    }

    this.GetNombre = () => {
        return this.nombre;
    }

    this.SetEdad = (nuevaEdade) => {
        this.edad = nuevaEdad;
    }

    this.GetEdad = () => {
        return this.edad;
    }

    this.SonIguales = function (persona2) {
        if (this.nombre == persona2.GetNombre() && this.edad == persona2.GetEdad()) {
            alert("Los objetos tienen datos iguales");
        } else {
            alert("Los objetos no son iguales");
        }
    }

}
let persona1=new Persona();
let persona2=new Persona();

//persona1.SetNombre("Lucas");

persona1.SonIguales(persona2);