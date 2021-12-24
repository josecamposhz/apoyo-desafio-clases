"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }

function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }

var _nombre = /*#__PURE__*/new WeakMap();

var _mascotas = /*#__PURE__*/new WeakMap();

var Persona = /*#__PURE__*/function () {
  function Persona(nombre) {
    var mascotas = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Persona);

    _classPrivateFieldInitSpec(this, _nombre, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldInitSpec(this, _mascotas, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _nombre, nombre);

    _classPrivateFieldSet(this, _mascotas, mascotas);
  }

  _createClass(Persona, [{
    key: "nombre",
    get: function get() {
      return _classPrivateFieldGet(this, _nombre);
    },
    set: function set(nuevoNombre) {
      _classPrivateFieldSet(this, _nombre, nuevoNombre);
    }
  }, {
    key: "getMascotas",
    value: function getMascotas() {
      console.log("Mascotas de " + _classPrivateFieldGet(this, _nombre));

      _classPrivateFieldGet(this, _mascotas).forEach(function (mascota, index) {
        console.log("Indice: " + index, "Nombre: " + mascota.nombre);
      });
    }
  }, {
    key: "agregarMascota",
    value: function agregarMascota(nuevaMascota) {
      _classPrivateFieldGet(this, _mascotas).push(nuevaMascota);
    }
  }, {
    key: "calcularEdadPromedioMascotas",
    value: function calcularEdadPromedioMascotas() {
      var total = 0;

      _classPrivateFieldGet(this, _mascotas).forEach(function (mascota) {
        total += mascota.edad;
      });

      var promedio = total / _classPrivateFieldGet(this, _mascotas).length;

      console.log("La edad promedio de las mascotas es: ".concat(promedio));
    }
  }]);

  return Persona;
}();

var _default = Persona;
exports["default"] = _default;