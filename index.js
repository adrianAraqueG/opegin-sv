/**
 * Import Modules & Instances
 */
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();



/**
 * APP CONFIG
 */
// Activa políticas CORS para TODAS las RUTAS
app.use(cors());

// Implementamos bodiParser
app.use(express.urlencoded({extended: false}));

// Setteamos el ViewEngine
app.set('view engine', 'pug');



// Implementamos el Router
app.use('/', router);

// Definir caperta publica (archivos estáticos)
app.use(express.static('public'));






/**
 * SERVER
 */
app.listen(3000, () =>{
    console.log('Server is Running at 3000');
});