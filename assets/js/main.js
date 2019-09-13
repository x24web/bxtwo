var Nav                 = $(".navbar-light"),
    $document           = $(document),
    $window             = $(window),
    scrollUp            = 0;

$(window).on('load', function () {
    $(".preloader").delay(700).fadeOut(600, function () {
        $(this).remove();
    });
});
$(window).on('scroll', function () {
    "use strict";
    // Nav Fixed on Scroll
    if ($window.scrollTop() > 75) {
        Nav.addClass("nav-scroll");
    } else {
        Nav.removeClass("nav-scroll");
    }
    // hidden Navbar with scroll
    var scrollDown = $window.scrollTop();
    
    if (scrollDown > scrollUp) {
        Nav.addClass("hidden");
    } else {
        Nav.removeClass("hidden");
    }
    scrollUp = scrollDown;

    // 09 - Back To Up
    if ($(window).scrollTop() < 400) {
        $('.scroll-top').removeClass('active');
    } else {
        $('.scroll-top').addClass('active');
    }
});
$(function () {
    "use strict";
    $('.navbar-toggler').click(function(){
        if(!$('.navbar-light').hasClass('nav-scroll')){
            $('.navbar-light').addClass('nav-scroll');
        }else if ($(window).scrollTop() == 0){
            $('.navbar-light').removeClass('nav-scroll');            
        }
    });
    if(document.getElementById('typed')){
        var typed = new Typed("#typed", {
            stringsElement: '#typed-string',
            typeSpeed: 35,
            backSpeed: 25,
            backDelay: 1200,
            startDelay: 500,
            smartBackspace: false,
            loop: true,
        });
    }

    $('.brand-logo-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 2500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    
    $('.service-content.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout: 2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            }
        }
    })
    
    
    $('.testimonial-content').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout: 2500,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            }
        }
    })

    // 09 - Back To Up
    $('.scroll-top').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
});