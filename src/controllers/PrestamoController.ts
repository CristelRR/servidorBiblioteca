import { Request, Response } from "express";
import pool from "../database";

class PrestamoController{
    async getPrestamo(req:Request, res:Response){
        const resul = await pool.query('SELECT * FROM tb_prestamos');
        res.json(resul[0]);        
    }

    async getByIdPrestamo(req:Request, res:Response){
        const id_prestamo = req.params.id_prestamo;
        const resul = await pool.query('SELECT * FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
        res.json(resul[0]);
    }

    async createPrestamo(req:Request, res:Response){
        await pool.query('INSERT INTO tb_prestamos SET ?', [req.body]);
        res.json({message:'Registro guardado'})
    }

    async deletePrestamo(req:Request, res:Response){
        const id_prestamo = req.params.id_prestamo; //id =req,params, id
        await pool.query('DELETE FROM tb_prestamos WHERE id_prestamo=?', [id_prestamo]);
        res.json({message:'Registro Eliminado'})
    } 

    async updatePrestamo(req:Request, res:Response){
        const {id_prestamo} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_prestamos SET ? WHERE id_prestamo= ?', [req.body, id_prestamo]);
        res.json({message:'Registro Actualizado'})
    }  
}

export const prestamoController=new PrestamoController();

export const createPrestamo = async (req: Request, res:Response) => {
    const newPrestamo = req.body;    
}