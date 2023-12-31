import { Request, Response } from "express";
import pool from "../database";

class CategoriaController{
    async getCategoria(req:Request, res:Response){
<<<<<<< HEAD
        const resul = await pool.query('SELECT id_categoria, categoria FROM tb_categorias');
=======
        const resul = await pool.query('SELECT * FROM tb_usuarios');
>>>>>>> f7a9012aeb28c97fc31a6f80a6a6e67529ac76d5
        res.json(resul[0]);        
    }

    async getByIdCategoria(req:Request, res:Response){
        const id_categoria = req.params.id_categoria;
<<<<<<< HEAD
        const resul = await pool.query('SELECT id_categoria, categoria FROM tb_categorias WHERE id_categoria=?', [id_categoria]);
=======
        const resul = await pool.query('SELECT * FROM tb_categorias WHERE id_categoria=?', [id_categoria]);
>>>>>>> f7a9012aeb28c97fc31a6f80a6a6e67529ac76d5
        res.json(resul[0]);
    }

    async createCategoria(req:Request, res:Response){
        await pool.query('INSERT INTO tb_categorias SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deleteCategoria(req:Request, res:Response){
        const id_categoria = req.params.id_categoria; //id =req,params, id
<<<<<<< HEAD
        await pool.query('DELETE FROM tb_categorias WHERE id_categoria=?', [id_categoria]);
=======
        await pool.query('DELETE FROM tb_categorias WHERE id_usuario=?', [id_categoria]);
>>>>>>> f7a9012aeb28c97fc31a6f80a6a6e67529ac76d5
        res.json({message:'Registro Eliminado'})
    } 

    async updateCategoria(req:Request, res:Response){
        const {id_categoria} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_categorias SET ? WHERE id_categoria= ?', [req.body, id_categoria]);
        res.json({message:'Registro Actualizado'})
    }  
}

export const categoriaController=new CategoriaController();

export const createCategoria = async (req: Request, res:Response) => {
    const newCategoria = req.body;    
}