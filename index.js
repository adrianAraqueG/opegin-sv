/**
 * Import Modules & Instances
 */
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import session from 'express-session';

import dotenv from 'dotenv';
dotenv.config({path: 'variables.env'});

const app = express();



/**
 * APP CONFIG
 */
// Activa políticas CORS para TODAS las RUTAS
app.use(cors());

// BodiParser
app.use(express.urlencoded({extended: false}));

// Sessions - 30 min expires
app.use(session({
    secret: 'test',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 30
    }
}))
// ViewEngine
app.set('view engine', 'pug');



// Router
app.use('/', router);

// Definir caperta publica (archivos estáticos)
app.use(express.static('public'));






/**
 * SERVER
 */

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, () =>{
    console.log('Server is Running at 3000');
});