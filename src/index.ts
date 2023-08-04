import express, {Application}  from "express";
import morgan from 'morgan';
import cors from 'cors';
import indexRoutes from "./routes/index-routes";
import usuarioRoutes from "./routes/usuario-routes";
import editorialRoutes from "./routes/editorial-routes";
import libroRoutes from "./routes/libro-routes";
import { categoriaController } from "./controllers/CategoriaController";
import categoriaRoutes from "./routes/categoria-routes";
import carreraRoutes from "./routes/carrera-routes";
import prestamoRoutes from "./routes/prestamo-routes";


class Server {
    public app: Application;

    constructor(){
        this.app=express();         //inicializando la app
        this.config(); 
        this.routes();
    }

    config():void{
        this.app.set('port', process.env.PORT || 4000); 
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());  //ACEPTA FORMATO JSON
        this.app.use(express.urlencoded({extended:false})); //ACEPTA FORMULARIOS HTML
    }

    routes():void{ //GRUPO DE RUTAS
        this.app.use('/', indexRoutes);
        this.app.use('/usuario', usuarioRoutes);
        this.app.use('/editorial', editorialRoutes);
        this.app.use('/libro', libroRoutes);
        this.app.use('/categoria', categoriaRoutes);
        this.app.use('/carreras', carreraRoutes);
        this.app.use('/prestamo', prestamoRoutes)
    }

    start():void{
        this.app.listen(this.app.get('port'), ()=>{
            console.log('Server on port ', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
