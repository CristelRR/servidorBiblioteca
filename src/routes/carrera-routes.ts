import { Router } from "express";
import { carreraController } from "../controllers/CarreraController"; 

class CarreraRoutes{
    public router:Router= Router();

    constructor(){
        this.config();
    }
 
    config(){
        this.router.get('/', carreraController.getCarrera); //CONSULTAR TODOS
        this.router.get('/:id_carrera', carreraController.getByIdCarrera); //CONSULTAR 1
        this.router.post('/', carreraController.createCarrera); //INSERTAR
        this.router.delete('/:id_carrera', carreraController.deleteCarrera); //ELIMINAR
<<<<<<< HEAD
        this.router.put('/:id_carrera', carreraController.updateCarrera); //MODIFICAR
=======
        this.router.put('/:id_Carrera', carreraController.updateCarrera); //MODIFICAR
>>>>>>> f7a9012aeb28c97fc31a6f80a6a6e67529ac76d5
    }
} 

const carreraRoutes =  new CarreraRoutes();     //<-------
export default carreraRoutes.router;