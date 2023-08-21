import {createPool} from 'mysql2/promise';
import { Connection } from 'promise-mysql';
 
const pool = createPool({
    host:'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'bd_biblioteca'
});

pool.getConnection().then(
    connection=>{
        pool.releaseConnection(connection);
        console.log('Conexión Exitosa');
    }
);

export default pool;
