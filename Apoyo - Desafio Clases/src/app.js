import Mascota from "./mascota";
import Persona from "./persona";

let valentin = new Mascota("Valentín", 6);
let sol = new Mascota("Sol", 3);

let persona = new Persona("Pepe", [valentin]);

console.log(persona)
console.log(persona.mascotas)

persona.getMascotas();
persona.calcularEdadPromedioMascotas();

persona.agregarMascota(sol);

persona.getMascotas();
persona.calcularEdadPromedioMascotas();