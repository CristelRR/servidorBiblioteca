import { Router } from "express";
<<<<<<< HEAD
import { tipoController } from "../controllers/TipoController";
=======
import { tipoController } from "../controllers/TipoController"; 
>>>>>>> f7a9012aeb28c97fc31a6f80a6a6e67529ac76d5

class TipoRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.get('/', tipoController.getTipo); //CONSULTAR TODOS
        this.router.get('/:id_tipo', tipoController.getByIdTipo); //CONSULTAR 1
        this.router.post('/', tipoController.createTipo); //INSERTAR
        this.router.delete('/:id_tipo', tipoController.deleteTipo); //ELIMINAR
        this.router.put('/:id_tipo', tipoController.updateTipo); //MODIFICAR
    }
} 

const tipoRoutes =  new TipoRoutes();     //<-------
export default tipoRoutes.router;  