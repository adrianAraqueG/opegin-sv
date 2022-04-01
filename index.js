/**
 * Import Modules & Instances
 */
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import session from 'express-session';

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
app.listen(3000, () =>{
    console.log('Server is Running at 3000');
});