document.addEventListener("DOMContentLoaded", () => {
    navburger = document.querySelector(".nav-burger");
    navbar = document.querySelector(".navbar");
    navList = document.querySelector(".navlist");

    navburger.addEventListener("click", () => {
        navList.classList.toggle("list-resp");
        navbar.classList.toggle("nav-resp");
    });
});

$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $(".scrollup").fadeIn().css("display", "flex");
        } else {
            $(".scrollup").fadeOut();
        }
    });
    $(".scrollup").click(function () {
        $("html,body").animate({ scrollTop: 0 }, 600);
    });
});
