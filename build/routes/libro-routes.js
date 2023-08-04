"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LibroController_1 = require("../controllers/LibroController");
class LibroRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', LibroController_1.libroController.getLibro); //CONSULTAR TODOS
        this.router.get('/:id_editorial', LibroController_1.libroController.getByIdLibro); //CONSULTAR 1
        this.router.post('/', LibroController_1.libroController.createLibro); //INSERTAR
        this.router.delete('/:id_editorial', LibroController_1.libroController.deleteLibro); //ELIMINAR
        this.router.put('/:id_editorial', LibroController_1.libroController.updateLibro); //MODIFICAR
    }
}
const libroRoutes = new LibroRoutes(); //<-------
exports.default = libroRoutes.router;
