// Importar DB
import {users as db} from '../config/db.js';


const pageLogin = (req, res) =>{
    res.render('login', {pagina: 'Entrar'});
}
const postLogin = (req, res) =>{
    console.log('accediendo al POST');
    const user = db.find(user => user.name === req.body.name);
    if(user !== undefined){
        if(user.password === req.body.password){
            req.session.user = user;
            console.log(req.session);
            res.redirect('/user');
        }else {
            res.render('login', {
                pagina: 'Entrar',
                error: 'password',
                name: req.body.name
            })
        }
    }else{
        res.render('login', {
            pagina: 'Entrar',
            error: 'name',
            name: req.body.name
        })
    }

}

const pageUser =  (req, res) =>{

    res.render('home', {
        pagina: 'Inicio',
        user: req.session.user
    });
}

const pageForms = (req, res) =>{
    const { form } = req.params

    res.send(`Página: Crear ${form}`);
}

const pageReport = (req, res) =>{
    res.render('reportar', {
        pagina: 'Reportar',
        user: req.session.user
    });
}

const pageRegister = (req, res) =>{
    res.render('registros', {
        pagina: 'Registros',
        user: req.session.user
    });
}


const pageLogout = (req, res) =>{
    req.session = null
    req.session.destroy();
    res.redirect('/login');
}


/**
 * MIDDLEWARES
 */
function login(req, res, next){
    console.log(req.session.user);
    if(!req.session.user){
        res.redirect('/login');
        console.log('No hay cookie session valida');
    }else{
        next();
    }
}

function admin(req, res, next){
    if(req.session.user.role !== 'admin'){
        res.redirect('/user');
        console.log('no eres admin');
    }else{
        next();
    }
}


export {
    pageLogin,
    postLogin,
    pageUser,
    pageForms,
    pageRegister,
    pageReport,
    pageLogout,
    login,
    admin
}
