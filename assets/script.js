// Who are we section carousel
$('.message .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
});
$('.first-carousel.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
$('.second-carousel.owl-carousel').owlCarousel({
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
$('.third-carousel.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});


// Carousel Wall Section
$('.wall .owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});

// Image View Box - Business Wall Section
$(function(){
	$('.image-link').viewbox();
});

// On Scroll Function
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 150) {
        $('.navbar').addClass('bar-fixed');
    } else {
        $('.navbar').removeClass('bar-fixed');
    }
});

