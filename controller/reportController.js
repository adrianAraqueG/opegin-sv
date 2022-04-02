/** --- Import DB --- */
    


/** ----------------------------------------------------------------/
 *  -------------------------- Methods -----------------------------/
 *  ---------------------------------------------------------------*/

    const getReport = (req, res) =>{
        res.render('report', {
            pagina: 'Reportar',
            user: req.session.user
        });
    }



/** --- Import DB --- */
    export {
        getReport
    }