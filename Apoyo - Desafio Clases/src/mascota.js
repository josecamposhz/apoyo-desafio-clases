class Mascota {
    #nombre;
    #edad;
    constructor(nombre, edad) {
        this.#nombre = nombre;
        this.#edad = edad;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    get edad() {
        return this.#edad;
    }

    set edad(nuevoEdad) {
        this.#edad = nuevoEdad;
    }
}

export default Mascota;