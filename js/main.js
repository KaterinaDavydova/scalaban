document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});




let menuBtn = document.querySelector('.header__burgerIcon');
let menu = document.querySelector('.nav-menu_mobile');
let menuLinks = document.querySelectorAll('.header__nav-item');

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
window.addEventListener('scroll', () => {
    document.body.classList.remove('lock');
});




document.addEventListener("DOMContentLoaded", function () {
    let hidden_block = document.getElementById("portfolio-hidden");
    let colorModeCheckbox = document.getElementById("color_mode");
    let portfolioCases = document.querySelector('.portfolio__cases');

    colorModeCheckbox.addEventListener("click", function () {
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
    const $slider = $('.investment__slider');
    const $progressBar = $('.investment__progress');
    const $progressBarLabel = $('.slider__label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 1)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        speed: 400,
        infinite: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
});