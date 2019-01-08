$(function () {
    $("#my-menu").mmenu({
        extensions: ['widescreen','border-none', 'effect-menu-slide', 'pagedim-black', 'position-right'],
        navbar: {
            title: '<img src="img/Logo-Mysilo.png">'
        },


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
                nav:true
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

});