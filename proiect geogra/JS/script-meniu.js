function toggleMenu() {
    var menuNavbar = document.querySelector('.menu-navbar');
    menuNavbar.classList.toggle('active');
}

// Închide meniul când se face clic pe orice element din meniu
document.querySelectorAll(".menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        var menuNavbar = document.querySelector(".menu-navbar");
        menuNavbar.classList.remove("active");
    });
});
