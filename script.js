function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const ratingValue = document.getElementById('rating-value').innerText;
    const estrellas = document.querySelectorAll('.estrellas');

    estrellas.forEach(function(starDiv) {
        const numStars = Math.round(parseFloat(ratingValue));
        starDiv.innerText = '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
    });
});
