import { Request, Response, json } from "express";
import pool from "../database";

 
 class LibroController{
    async getLibro(req:Request, res:Response){
        const resul = await pool.query('SELECT * FROM tb_libros');
        res.json(resul[0]);
    }

    async getByIdLibro(req:Request, res:Response){
        const id_libro = req.params.id_libro;
        const resul = await pool.query('SELECT * FROM tb_libros WHERE id_libro=?', [id_libro]);
        res.json(resul[0]);
    }

    async createLibro(req:Request, res:Response){
        await pool.query('INSERT INTO tb_libro SET ?', [req.body]);
        res.json({message: 'Registro Guardado'});
    }

    async deleteLibro(req:Request, res:Response){
        const id_libro = req.params.id_libro;
        await pool.query('DELETE FROM tb_libro WHERE id_libro=?', [id_libro]);
        res.json({message:'Registro Eliminado'});
    } 

    async updateLibro(req:Request, res:Response){
        const {id_libro} = req.params; //id =req,params, id
        await pool.query('UPDATE tb_libro SET ? WHERE id_libro= ?', [req.body, id_libro]);
        res.json({message:'Registro Actualizado'})
    } 
 }

 export const libroController=new LibroController();

 export const createLibro = async (req:Request, res:Response) => {
    const  newLibro = req.body;
 }