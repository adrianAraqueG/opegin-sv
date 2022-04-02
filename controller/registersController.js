/** --- Import DB --- */
    


/** ----------------------------------------------------------------/
 *  -------------------------- Methods -----------------------------/
 *  ---------------------------------------------------------------*/

    const getRegisters = (req, res) =>{
        res.render('registers', {
            pagina: 'Registros',
            user: req.session.user
        });
    }



/** --- Import DB --- */
    export {
        getRegisters
    }