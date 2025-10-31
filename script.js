$(document).ready(function () {
    $("#mobile-btn").on("click", function () {
        $("#mobile-menu").toggleClass("active");
        const $icon = $("#mobile-btn i");
        $icon.toggleClass("fa-bars fa-xmark");
    });

    const sections = $("section");
    const navItens = $(".nav-item");

    $(window).on("scroll", function () {
        const header = $("header");
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css("box-shadow", "none");
        }
        else {
            header.css("box-shadow", "5px 1px 5px rgba(0, 0, 0, 0.1)");
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })


        navItens.removeClass("active");
        $(navItens[activeSectionIndex]).addClass("active");
    });

    ScrollReveal().reveal("#cta", {
        origin: "left",
        duration: 2000,
        distance: "20%",
    });

    ScrollReveal().reveal(".dish", {
        origin: "left",
        duration: 2000,
        distance: "20%",
    });

    ScrollReveal().reveal("#testimonials-chef", {
        origin: "left",
        duration: 2000,
        distance: "20%",
    });

    ScrollReveal().reveal(".feedbeck", {
        origin: "right",
        duration: 2000,
        distance: "20%",
    });

});