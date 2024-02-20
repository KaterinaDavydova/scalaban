let menuBtn = document.querySelector('.header__burgerIcon');
let menu = document.querySelector('.nav-menu_mobile');
let menuLinks = document.querySelectorAll('.header__nav-item')

menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    toggleMenu();
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        toggleMenu();
    });
});

function toggleMenu() {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('lock');
}

document.addEventListener("DOMContentLoaded", function() {
    let hidden_block = document.getElementById("portfolio-hidden");
    let colorModeCheckbox = document.getElementById("color_mode");
    let portfolioCases = document.querySelector('.portfolio__cases');

    colorModeCheckbox.addEventListener("click", function() {
        if (hidden_block.classList.contains("hidden")) {
            hidden_block.classList.remove("hidden");
            portfolioCases.classList.add("hidden");
        } else {
            hidden_block.classList.add("hidden");
            portfolioCases.classList.remove("hidden");
        }
    });
});

$(function () {
    $('.investment__slider').slick({
        infinite: true,
        // variableWidth: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
              breakpoint: 769, 
              settings: {
                slidesToShow: 1, 
                slidesToScroll: 1,
            }
            }
        ]
    });
});