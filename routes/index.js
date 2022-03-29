import express from 'express';
import { 
    pageLogin,
    postLogin,
    pageUser,
    pageForms,
    pageRegister,
    pageReport
} from '../controller/pageController.js';

const router = express.Router();

// Default Route
router.get('/', (req, res) =>{
    res.redirect('/login');
});

// Routing GET
router.get('/login', pageLogin);
router.get('/user', pageUser);
router.get('/user/forms/create/:form', pageForms);
router.get('/user/reportar', pageReport);
router.get('/user/registros', pageRegister);


// Routing POST
router.post('/login', postLogin);

export default router;