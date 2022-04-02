/** ----------------------------------------------------------------/
 *  ------------------- Import Modules & Instances -----------------/
 *  ---------------------------------------------------------------*/

    import express from 'express';

    import {
        getLogin,
        postLogin,
        getLogout
    } from '../controller/loginController.js';

    import {
        getUser,
    } from '../controller/userController.js';

    import {
        getForms,
    } from '../controller/formsController.js';

    import {
        getRegisters
    } from '../controller/registersController.js';

    import {
        getReport
    } from '../controller/reportController.js';

    import {
        login,
        admin
    } from './middlewares.js'

    const router = express.Router();


    /** --- Default Route --- */
    router.get('/', (req, res) =>{
        res.redirect('/login');
    });

/** ----------------------------------------------------------------/
 *  -------------------------- GET ---------------------------------/
 *  ---------------------------------------------------------------*/

    router.get('/login', getLogin);

    router.get('/logout', login, getLogout);

    router.get('/user', login, getUser);

    router.get('/user/forms/create/:form', login, getForms);

    router.get('/user/reportar', login, getReport);

    router.get('/user/registros', login, getRegisters);

    router.get('/user/admin', login, admin, (req, res) =>{
        res.send('solo admins loks');
    });



/** ----------------------------------------------------------------/
 *  -------------------------- POST --------------------------------/
 *  ---------------------------------------------------------------*/

    router.post('/login', postLogin);



export default router;