/*==========[index]==========
01 - VARIABLES
02 - Preloader
03 - Navbar
04 - Back To Up 
05 - Typed js
06 - OwlCarousel Logo Section
07 - OwlCarousel Service Section 
08 - OwlCarousel testimonial Section
09 - Animate Back To Up

NOTE:
------
Please DO NOT EDIT THIS JS, you may need to use "custom.js" file for writing your custom js.
We may release future updates so it will overwrite this file. it's better and safer to use "custom.js".
===========================*/

// 01 - VARIABLES
var Nav                 = $(".navbar-light"),
    $document           = $(document),
    $window             = $(window),
    scrollUp            = 0;

$(window).on('load', function () {
    // 02 - Preloader
    $(".preloader").delay(700).fadeOut(600, function () {
        $(this).remove();
    });
});
$(window).on('scroll', function () {
    "use strict";
    // 03 - Nav Fixed on Scroll
    if ($window.scrollTop() > 75) {
        Nav.addClass("nav-scroll");
    } else {
        Nav.removeClass("nav-scroll");
    }
    // 03 - hidden Navbar with scroll
    var scrollDown = $window.scrollTop();
    
    if (scrollDown > scrollUp) {
        Nav.addClass("hidden");
    } else {
        Nav.removeClass("hidden");
    }
    scrollUp = scrollDown;

    // 04 - Back To Up
    if ($(window).scrollTop() < 400) {
        $('.scroll-top').removeClass('active');
    } else {
        $('.scroll-top').addClass('active');
    }
});
$(function () {
    "use strict";
    // 03 - color navbar on mobile
    $('.navbar-toggler').click(function(){
        if(!$('.navbar-light').hasClass('nav-scroll')){
            $('.navbar-light').addClass('nav-scroll');
        }else if ($(window).scrollTop() == 0){
            $('.navbar-light').removeClass('nav-scroll');            
        }
    });

    // 05 - Typed js
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
    // 06 - OwlCarousel Logo Section
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
    // 07 - OwlCarousel Service Section    
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

    // 08 - OwlCarousel testimonial Section
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

    // 09 - Animate Back To Up
    $('.scroll-top').on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
    });
});