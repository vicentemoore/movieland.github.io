/* Alerta Errores */
"use strict"

/* Animaciones para Películas en ViewPort */
const img1 = document.getElementById("img1");const img2 = document.getElementById("img2");const img3 = document.getElementById("img3");const img4 = document.getElementById("img4");const img5 = document.getElementById("img5");const img6 = document.getElementById("img6");const img7 = document.getElementById("img7");const img8 = document.getElementById("img8");const img9 = document.getElementById("img9");const img10 = document.getElementById("img10");const img11 = document.getElementById("img11");
const img12 = document.getElementById("img12");const img13 = document.getElementById("img13");const img14 = document.getElementById("img14");const img15 = document.getElementById("img15");const img16 = document.getElementById("img16");const img17 = document.getElementById("img17");
const img18 = document.getElementById("img18");const img19 = document.getElementById("img19");const img20 = document.getElementById("img20");const img21 = document.getElementById("img21");const img22 = document.getElementById("img22");const img23 = document.getElementById("img23");const img24 = document.getElementById("img24");

const cargarImg = (entradas, observador) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}

const observador = new IntersectionObserver(cargarImg, {
    root: null,
    threshold: 0.4, /* Porcentaje del div necesario para ejecutar animación */
}); 

observador.observe(img1);observador.observe(img2);observador.observe(img3);observador.observe(img4);
observador.observe(img5);observador.observe(img6);observador.observe(img7);observador.observe(img8);observador.observe(img9);
observador.observe(img10);observador.observe(img11);observador.observe(img12);observador.observe(img13);observador.observe(img14);observador.observe(img15);observador.observe(img16);observador.observe(img17);observador.observe(img18);observador.observe(img19);observador.observe(img20);observador.observe(img21);observador.observe(img22);observador.observe(img23);observador.observe(img24);

// Animación Fade para Textos de Cartelera
$(document).ready(function(){
    $("#show").click(function(){
        $(".div1").slideDown(1000);
        $(".div2").slideDown(1000);
        $(".div3").slideDown(1000);
        $(".div4").slideDown(1000);
        $(".div5").slideDown(1000);
        $(".div6").slideDown(1000);
        $(".div7").slideDown(1000);
        $(".div8").slideDown(1000);
        $(".div9").slideDown(1000);
        $(".div10").slideDown(1000);
    });
});
$(document).ready(function(){
    $("#hide").click(function(){
        $(".div1").slideUp(1000);
        $(".div2").slideUp(1000);
        $(".div3").slideUp(1000);
        $(".div4").slideUp(1000);
        $(".div5").slideUp(1000);
        $(".div6").slideUp(1000);
        $(".div7").slideUp(1000);
        $(".div8").slideUp(1000);
        $(".div9").slideUp(1000);
        $(".div10").slideUp(1000);
    });
});

// Animación para Scroll
$('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

    if (target.length) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {

            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
            return false;
            } else {
            $target.attr('tabindex','-1'); 
            $target.focus();
            };
        });
        }
    }
});


// Mostrar y Ocultar Películas
$(document).ready(function(){
    $("#ver1").click(function(){
        $("#hide1").slideDown(2000);
    });
    $("#esconder1").click(function(){
        $("#hide1").slideUp(750);
    });
    $("#ver2").click(function(){
        $("#hide2").slideDown(2000);
    });
    $("#esconder2").click(function(){
        $("#hide2").slideUp(750);
    });
    $("#ver3").click(function(){
        $("#hide3").slideDown(2000);
    });
    $("#esconder3").click(function(){
        $("#hide3").slideUp(750);
    });
    $("#ver4").click(function(){
        $("#hide4").slideDown(2000);
    });
    $("#esconder4").click(function(){
        $("#hide4").slideUp(750);
    });
    $("#ver5").click(function(){
        $("#hide5").slideDown(2000);
    });
    $("#esconder5").click(function(){
        $("#hide5").slideUp(750);
    });
    $("#ver6").click(function(){
        $("#hide6").slideDown(4000);
    });
    $("#esconder6").click(function(){
        $("#hide6").slideUp(750);
    });
    $("#ver7").click(function(){
        $("#hide7").slideDown(2000);
    });
    $("#esconder7").click(function(){
        $("#hide7").slideUp(750);
    });
    $("#ver8").click(function(){
        $("#hide8").slideDown(2000);
    });
    $("#esconder8").click(function(){
        $("#hide8").slideUp(750);
    });

});
