// Importar DB
import {users as db} from '../config/db.js';



const pageLogin = (req, res) =>{
    res.render('login', {nombreSitio: 'OPEGIN', pagina: 'Entrar'});
}
const postLogin = (req, res) =>{
    console.log('accediendo al POST');

    //Datos del FORM
    const {user, password} = req.body
    let userValidated = {}

    db.forEach( (userDB, index) =>{
        if(user === userDB.username){
            if(password === userDB.password){
                res.redirect('/user');
            }else{
                res.render('login', {
                    pagina: 'Entrar',
                    error: 'password',
                    user: userDB
                });
            }
        }else{
            res.render('login', {
                pagina: 'Entrar',
                error: 'user',
                user: userDB
            });
        }
    });

}

const pageUser =  (req, res) =>{

    res.render('home', {
        pagina: 'Inicio',
        user
    });
}

const pageForms = (req, res) =>{
    const { form } = req.params

    res.send(`Página: Crear ${form}`);
}

const pageReport = (req, res) =>{
    res.render('reportar', {
        pagina: 'Reportar',
        user
    });
}

const pageRegister = (req, res) =>{
    res.render('registros', {
        pagina: 'Registros',
        user
    });
}


export {
    pageLogin,
    postLogin,
    pageUser,
    pageForms,
    pageRegister,
    pageReport
}
