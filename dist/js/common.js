$(function () {
    $("#my-menu").mmenu({
        extensions: ['widescreen','border-none', 'effect-menu-slide', 'pagedim-black', 'position-right'],
        navbar: {
            title: '<img src="img/Logo-Mysilo.png">'
        },
        "pageScroll": true

    });
    var $icon = $(".hamburger");

    var api = $('#my-menu').data('mmenu');
    $icon.on( "click", function() {
        api.open();
    });
    api.bind( "open:finish", function() {
        setTimeout(function() {
            $icon.addClass( "is-active" );
        }, 50);
    });
    api.bind( "close:finish", function() {
        setTimeout(function() {
            $icon.removeClass( "is-active" );
        }, 50);
    });
    $('.carousel-projects').on('initialized.owl.carousel',function () {
        setTimeout(function(){
            carouselService();
        }, 50)
    });


    $('.carousel-projects').owlCarousel({
        loop:true,
        nav:true,
        dots:true,
        smartSpeed:800,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            800:{
                items:3,
                nav:true
            },
            1100:{
                items:5,
                nav:true
            }
        }
    });
    function carouselService(){
        $('.carousel-projects-item').each(function(){
            var ths  = $(this),
                thsh = ths.find('.carousel-projects__image').outerHeight();

            ths.find('.carousel-projects__content').css('min-height', thsh);
        });
    }carouselService();

    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css("display","flex").hide().fadeIn();
            setTimeout(function() {
                $(th).find('.success').removeClass('active').fadeOut();
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

    $('.partners').owlCarousel({
        loop:true,
        smartSpeed: 800,
        dots:false,
        nav: true,
        responsiveClass: true,
        responsive:{
            0:{
                items:2,
                nav:false
            },
            800:{
                items:4,
                nav:true
            },
            1100:{
                items:5,
                nav:true
            }
        }
    })
    $('.carousel-projects__content').equalHeights();

    $(".carousel-projects-item").each(function (i) {
        $(this).find(".button").attr("href", '#project_' + i);
        $(this).find(".elevator-description").attr("id", "project_" + i);
    });

    $(".popup").magnificPopup({type: "image"});
    $(".popup_content").magnificPopup({type: "inline", midClick: true});
    $(".popup_content_2").magnificPopup({type: "inline", midClick: true});
});
