
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('email-phone').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\+591\s[67]\d{7}$/;

    if (emailPattern.test(input) || phonePattern.test(input)) {
        alert('Información válida. Redirigiendo...');
        window.location.href = 'next-page.html';
    } else {
        alert('Por favor ingrese un email o número de teléfono válido.');
    }
});

document.getElementById('play-button').addEventListener('click', function() {
    window.location.href = 'video-page.html';
});

document.getElementById('info-button').addEventListener('click', function() {
    alert('Más información desplegada aquí.');
});
