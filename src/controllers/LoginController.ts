import { Request, Response, json } from "express";
import pool from "../database";



class LoginController{
    async getLogin(req:Request, res:Response){
        const resul = await pool.query('SELECT * FROM tb_usuarios');
        res.json(resul[0]);
    }

    async getUser(req:Request,res:Response){
        const{id_usuario}=req.params;

        const result=await pool.query('SELECT * FROM tb_usuarios WHERE id_usuario=? AND contrasena=?',[id_usuario,req.body.contrasena]);
        res.json(result[0]);
    
    }
}
export const loginController=new LoginController(); 