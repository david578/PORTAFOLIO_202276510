document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.icon');
    const infoDisplay = document.getElementById('infoDisplay');

    icons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            infoDisplay.textContent = icon.getAttribute('data-info'); // Obtiene la info del data-info
            infoDisplay.style.display = 'block'; // Muestra el contenedor de información
        });

        icon.addEventListener('mouseout', function() {
            infoDisplay.style.display = 'none'; // Oculta la información al salir
        });
    });
});
