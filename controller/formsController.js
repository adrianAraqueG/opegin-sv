/** --- Import DB --- */
    


/** ----------------------------------------------------------------/
 *  -------------------------- Methods -----------------------------/
 *  ---------------------------------------------------------------*/  

    const getForms = (req, res) =>{
        const { form } = req.params

        switch(form){
            case 'f-go-05': {
                res.render('forms/f-go-05', {
                    pagina: 'F-GO-05',
                    user: req.session.user
                }); break;
            }
            default: {
                res.send('Creando '.form);
            }
        }
    }

    

/** --- Import DB --- */
    export {
        getForms
    }