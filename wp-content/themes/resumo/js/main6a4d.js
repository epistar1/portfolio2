(function($) {
    
    "use strict";

    var win = $(window),
        htmlBody = $("html, body"),
        scrollToTop = $(".scroll-top"),
        navBar = $(".navbar"),
        progressCheck = false,
        factsCheck = false;
        
    
    /*========== Loading  ==========*/
    $(".loading").animate({
        "top": "-100%"
    }, 700, function () {
        $(this).remove();
    });

    $('.navbar .navbar-nav > li > a').removeAttr('title');
    
    /*========== Navbar Animation On Scroll  ==========*/
    function activeNavbar() {
        
        if (win.scrollTop() > 20) {
            navBar.addClass("active-nav");
        } else {
            if (navBar.hasClass("menu-active")) {
                navBar.addClass("active-nav");
            } else {
            navBar.removeClass("active-nav");
            }
        }
        
    }
    
    activeNavbar();
    
    win.on("scroll", function () {
        activeNavbar();
    });
    
    /*========== Mobile Menu  ==========*/
    $(".navbar .menu-toggle").on("click", function () {
        navBar.toggleClass("menu-active");
		navBar.toggleClass("active-nav");
    });

    $(".navbar .navbar-nav > li.menu-item-has-children").on("click", function () {
        $(".navbar .navbar-nav > li.menu-item-has-children .sub-menu").slideToggle();
    });
    
    /*========== Smooth Scroll  ==========*/
    $(".navbar .navbar-nav > li > a").on("click", function () {
        htmlBody.animate({
            scrollTop: $($(this).href()).offset().top
        }, 600);
    });

     /*========== Scroll To Top  ==========*/
     function scrollUp() {
        if (win.scrollTop() >= 1200) {
            scrollToTop.addClass("active");
        } else {
            scrollToTop.removeClass("active");
        }
    }
    
    scrollUp();
    
    win.on("scroll", function () {
        scrollUp();
    });
    
    scrollToTop.on("click", function (e) {
        e.preventDefault();
        htmlBody.animate({
            scrollTop: 0
        }, 800);
    });

    /*========== Skills Progress  ==========*/
    $(".progress-container").each(function () {
        var timer = $(this).find(".percent");
        timer.css("left", "calc(" + timer.data("to") + "% - 15px)");
    });
    function skillsPogress() {
        $(".progress-container").each(function () {
            var timer = $(this).find(".percent"),
                progressBar = $(this).find(".progress-bar");
            timer.countTo();
            progressBar.css("width", progressBar.attr("aria-valuenow") + "%");
        });
    }
    
    if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
        skillsPogress();
        progressCheck = true;
    }
    
    win.on("scroll", function () {
        
        if (!progressCheck && $(this).scrollTop() >= $(".skills").offset().top - 300) {
            skillsPogress();
            progressCheck = true;
        }
        
    });
    
    /*========== Facts Counter  ==========*/
    if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
        $(".facts .fact-number").countTo();
        factsCheck = true;
    }
    
    win.on("scroll", function () {
        if (!factsCheck && $(this).scrollTop() >= $(".facts").offset().top - 400) {
            $(".facts .fact-number").countTo();
            factsCheck = true;
        }
    });
    
    /*========== Owl Carousel Js Testimonial  ==========*/
    $(".testimonials .owl-carousel").owlCarousel({
        items: 2, 
        autoplay: true,
        smartSpeed: 500,
        margin: 30,
        loop: true,
        autoplayHoverPause: true,
        responsiveClass: true,
		responsive: {
            0: {
                items: 1
            },
            991: {
                items: 2
            }
        }
    });
    
    /*========== Fire wow js Plugin  ==========*/
    new WOW().init();
    	
})(jQuery);