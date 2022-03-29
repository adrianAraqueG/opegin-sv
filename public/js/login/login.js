// Evitar el reenvio de un formulario POST
if(window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}


// Validar FORM
const form = document.querySelector('#form-login');
form.addEventListener('submit', e =>{
    e.preventDefault();
   
    const user = document.querySelector('input[name="user"]');
    const pass = document.querySelector('input[name="password"]');

    // Reset classes
    user.classList.contains('is-invalid') ? user.classList.remove('is-invalid') : '';
    pass.classList.contains('is-invalid') ? pass.classList.remove('is-invalid') : '';

    if(user.value === ''){
        user.classList.contains('is-invalid') ? '' : user.classList.add('is-invalid');
        return;
    }
    if(pass.value === ''){
        pass.classList.contains('is-invalid') ? '' : pass.classList.add('is-invalid');
        return;
    }

    form.submit();
    
});


/**
 * FUNCTIONS
 */
