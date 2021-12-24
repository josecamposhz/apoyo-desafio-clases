class Persona {
    #nombre;
    #mascotas;
    constructor(nombre, mascotas = []) {
        this.#nombre = nombre;
        this.#mascotas = mascotas;
    }

    get nombre() {
        return this.#nombre;
    }

    set nombre(nuevoNombre) {
        this.#nombre = nuevoNombre;
    }

    getMascotas() {
        console.log("Mascotas de " + this.#nombre);
        this.#mascotas.forEach((mascota, index) => {
            console.log("Indice: " + index, "Nombre: " + mascota.nombre);
        })
    }

    agregarMascota(nuevaMascota) {
        this.#mascotas.push(nuevaMascota);
    }

    calcularEdadPromedioMascotas() {
        let total = 0;
        this.#mascotas.forEach(mascota => {
            total += mascota.edad;
        })

        let promedio = total / this.#mascotas.length;
        console.log(`La edad promedio de las mascotas es: ${promedio}`)
    }
}

export default Persona;