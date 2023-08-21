"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrestamo = exports.prestamoController = void 0;
const database_1 = __importDefault(require("../database"));
class PrestamoController {
    getPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT id_prestamo, id_usuario, id_libro, fecha_prestamo, fecha_devolucion, fecha_entrega, estado FROM tb_prestamos');
            res.json(resul[0]);
        });
    }
    getByIdPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_prestamo = req.params.id_prestamo;
            const resul = yield database_1.default.query('SELECT id_prestamo, id_usuario, id_libro, fecha_prestamo, fecha_devolucion, fecha_entrega, estado FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
            res.json(resul[0]);
        });
    }
    createPrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_prestamos SET ?', [req.body]);
            res.json({ message: 'Registro guardado' });
        });
    }
    deletePrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_prestamo = req.params.id_prestamo; //id =req,params, id
            yield database_1.default.query('DELETE FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updatePrestamo(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_prestamo } = req.params; //id =req,params, id
            yield database_1.default.query('UPDATE tb_prestamos SET ? WHERE id_prestamo= ?', [req.body, id_prestamo]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.prestamoController = new PrestamoController();
const createPrestamo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPrestamo = req.body;
});
exports.createPrestamo = createPrestamo;
