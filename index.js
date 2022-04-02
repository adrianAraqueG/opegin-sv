/** ----------------------------------------------------------------/
 *  ------------------- Import Modules & Instances -----------------/
 *  ---------------------------------------------------------------*/


    import express from 'express';

    import cors from 'cors';

    import router from './routes/index.js';

    import session from 'express-session';

    import db from './config/db.js';

    import dotenv from 'dotenv';
    dotenv.config({path: 'variables.env'});


    const app = express();



/** ----------------------------------------------------------------/
 *  ------------------- App Settings & Configs ---------------------/
 *  ---------------------------------------------------------------*/


    app.set('view engine', 'pug');

    app.use(cors());

    app.use(express.urlencoded({extended: false}));

    app.use(session({
        secret: 'test',
        resave: false,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 30
        }
    }));

    app.use(express.static('public'));

    db.authenticate()
        .then( () =>{ console.log('DB Connected') })
        .catch( err => { console.log(err) });

    app.use('/', router);


    
/** ----------------------------------------------------------------/
 *  ----------------------- Start Server ---------------------------/
 *  ---------------------------------------------------------------*/


    const host = process.env.HOST || '0.0.0.0';
    const port = process.env.PORT || 3000;

    app.listen(port, host, () =>{
        console.log('Server is Running at 3000');
    });