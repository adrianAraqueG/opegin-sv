// Evitar el reenvio de un formulario POST
if(window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
