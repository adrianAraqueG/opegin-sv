/** --- Import DB --- */
    
    import usersTable from '../model/Users.js';

/** ----------------------------------------------------------------/
 *  -------------------------- Methods -----------------------------/
 *  ---------------------------------------------------------------*/    

    const getLogin = (req, res) =>{
        if(req.session.user){
            res.redirect('/user');
        }else{
            res.render('login', {pagina: 'Entrar'});
        }

    }
    const postLogin = async (req, res) =>{
        console.log('accediendo al POST de LOGIN');
        const { name, password } = req.body;

        // Validate
        if( name === undefined || name.trim() === ''){
            return res.render('login', {
                pagina: 'Entrar',
                error: 'name',
                name
            });
        }
        if( password === undefined || name.trim() === ''){
            return res.render('login', {
                pagina: 'Entrar',
                error: 'password',
                name
            });
        }

        // Search in DB & Second Validation
        try{

            const user = await usersTable.findAll({
                where: {
                    username: name.trim()
                }
            });

            if(user.length <= 0){
                return res.render('login', {
                    pagina: 'Entrar',
                    error: 'name',
                    name

                });
            }

            if(user[0].dataValues.password !== password){
                return res.render('login', {
                    pagina: 'Entrar',
                    error: 'password',
                    name
                });
            }

            const userData = {
                id: user[0].dataValues.id,
                username: user[0].dataValues.username,
                name: user[0].dataValues.name,
                shortname: user[0].dataValues.shortname,
                role: user[0].dataValues.role,
                cc: user[0].dataValues.cc 
            }

            req.session.user = userData;

            res.redirect('/user');

            

        }catch(err){
            console.log(err);
        }

    }

    const getLogout = (req, res) =>{
        req.session.destroy();
        res.redirect('/login');
    }


/** --- Exports ---  */

    export {
        getLogin,
        postLogin,
        getLogout
    }