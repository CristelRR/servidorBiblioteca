import { Router } from "express";
import { libroController } from "../controllers/LibroController";


class LibroRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', libroController.getLibro); //CONSULTAR TODOS
        this.router.get('/:id_editorial', libroController.getByIdLibro); //CONSULTAR 1
        this.router.post('/', libroController.createLibro); //INSERTAR
        this.router.delete('/:id_editorial', libroController.deleteLibro); //ELIMINAR
        this.router.put('/:id_editorial', libroController.updateLibro); //MODIFICAR
    }
}

const libroRoutes =  new LibroRoutes();     //<-------
export default libroRoutes.router;  