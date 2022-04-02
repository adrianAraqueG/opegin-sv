/** ----------------------------------------------------------------/
 *  -------------------------- MIDDLEWARES -------------------------/
 *  ---------------------------------------------------------------*/


    function login(req, res, next){
        if(req.session.user === undefined || req.session.user === null || req.session.user === ''){
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
    login,
    admin
}