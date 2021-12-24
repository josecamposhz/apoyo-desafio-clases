"use strict";

var _mascota = _interopRequireDefault(require("./mascota"));

var _persona = _interopRequireDefault(require("./persona"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var valentin = new _mascota["default"]("Valentín", 6);
var sol = new _mascota["default"]("Sol", 3);
var persona = new _persona["default"]("Pepe", [valentin]);
console.log(persona);
console.log(persona.mascotas);
persona.getMascotas();
persona.calcularEdadPromedioMascotas();
persona.agregarMascota(sol);
persona.getMascotas();
persona.calcularEdadPromedioMascotas();