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
exports.createLibro = exports.libroController = void 0;
const database_1 = __importDefault(require("../database"));
class LibroController {
    getLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const resul = yield database_1.default.query('SELECT * FROM tb_libros');
            res.json(resul[0]);
        });
    }
    getByIdLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_libro = req.params.id_libro;
            const resul = yield database_1.default.query('SELECT * FROM tb_libros WHERE id_libro=?', [id_libro]);
            res.json(resul[0]);
        });
    }
    createLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO tb_libro SET ?', [req.body]);
            res.json({ message: 'Registro Guardado' });
        });
    }
    deleteLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id_libro = req.params.id_libro;
            yield database_1.default.query('DELETE FROM tb_libro WHERE id_libro=?', [id_libro]);
            res.json({ message: 'Registro Eliminado' });
        });
    }
    updateLibro(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id_libro } = req.params; //id =req,params, id
            yield database_1.default.query('UPDATE tb_libro SET ? WHERE id_libro= ?', [req.body, id_libro]);
            res.json({ message: 'Registro Actualizado' });
        });
    }
}
exports.libroController = new LibroController();
const createLibro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newLibro = req.body;
});
exports.createLibro = createLibro;
