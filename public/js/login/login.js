// Validar FORM
const form = document.querySelector('#form-login');
form.addEventListener('submit', e =>{
    e.preventDefault();
   
    const name = document.querySelector('input[name="name"]');
    const pass = document.querySelector('input[name="password"]');

    // Reset classes
    name.classList.contains('is-invalid') ? name.classList.remove('is-invalid') : '';
    pass.classList.contains('is-invalid') ? pass.classList.remove('is-invalid') : '';

    if(name.value === ''){
        name.classList.contains('is-invalid') ? '' : name.classList.add('is-invalid');
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
