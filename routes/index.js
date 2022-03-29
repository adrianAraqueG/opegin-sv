import express from 'express';
import { 
    pageLogin,
    postLogin,
    pageUser,
    pageForms,
    pageRegister,
    pageReport,
    pageLogout,
    login,
    admin
} from '../controller/pageController.js';

const router = express.Router();


// Default Route
router.get('/', (req, res) =>{
    res.redirect('/login');
});

// Routing GET
router.get('/login', pageLogin);
router.get('/logout', login, pageLogout);
router.get('/user', login, pageUser);
router.get('/user/forms/create/:form', login, pageForms);
router.get('/user/reportar', login, pageReport);
router.get('/user/registros', login, pageRegister);
router.get('/user/admin', login, admin, (req, res) =>{
    res.send('solo admins loks');
});


// Routing POST
router.post('/login', postLogin);

export default router;