function menuOnClick() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
}

const backToTopButton = document.getElementById("backToTop");
// Mostra ou esconde o botão ao rolar
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block"; // Mostra o botão
    } else {
        backToTopButton.style.display = "none"; // Esconde o botão
    }
};
// Define a ação do botão
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Rolagem suave
    });
};

function myFunction() {
    const body = document.body;
    body.classList.toggle("dark-mode");
    
    const navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-light");
    navbar.classList.toggle("navbar-dark");
}