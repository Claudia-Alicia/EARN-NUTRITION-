// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");
    
    menuIcon.addEventListener("click", () => {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Add slide-in animation to sections when scrolled into view
    const sections = document.querySelectorAll('main > section');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "slide-in-out 2s ease-in-out";
            }
        });
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        observer.observe(section);
    });
});
