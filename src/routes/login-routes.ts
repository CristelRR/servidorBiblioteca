import { Router } from "express";
import { loginController } from "../controllers/LoginController";

class LoginRoutes{
    public router:Router=Router();

    constructor(){
        this.config();
    }

    config(){
        this.router.post('/:id_usuario', loginController.getLogin); //CONSULTAR TODOS
        
    }
}

const loginRoutes =  new LoginRoutes();     //<-------
export default loginRoutes.router;