// script.js

document.addEventListener("DOMContentLoaded", function() {
    const logo = document.getElementById("logo");
    const title = document.getElementById("titulo-principal");

    // Animación del logo al cargar la página
    logo.style.animation = "fadeIn 2s ease-in-out forwards";
    
    // Animación del título al cargar la página
    title.style.animation = "slideIn 1s ease-in-out forwards";
});

(function() {
    var cx = 'YOUR_GOOGLE_SEARCH_ENGINE_ID'; // Reemplaza con tu ID de motor de búsqueda personalizado
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();

// Manejo del formulario de reservación
document.getElementById("reservation-form").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Reserva enviada. Nos pondremos en contacto contigo.");
});
