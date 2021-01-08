$(document).ready(function(){
	$('.gallerySlider').slick({
		rows: 2,
		centerMode: true,
		variableWidth: true,
		infinite: true,
		prevArrow: '<div class="scrollButton"><div class="container"><a class="slick-prev" aria-label="Previous" type="button" href="javascript:void(0);"><img src="img/left-arrow.png"></a></div></div>',
		nextArrow: '<div class="scrollButton"><div class="container"><a class="slick-next" aria-label="Next" type="button" href="javascript:void(0);"><img src="img/right-arrow.png"></a></div></div>',
		responsive: [
			{
			    breakpoint: 1200,
			    settings: "unslick"
			},
		]
	});

	$(".fancybox").fancybox();

	$('.userSlider').slick({
		arrows: false,
		dots: true,
		dotsClass: 'dotki',
		autoplay: true,
		autoplaySpeed: 5000
	});

    $("nav a[href^='#'], .topMain .button a").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    new WOW({
    	boxClass:     'wow',      // default
    	animateClass: 'animated', // default
    	offset:       0,          // default
    	mobile:       false,
    	live:         true        // default
    }).init();

	if(window.innerWidth < 1200) {
		$( function() {
			$( ".tablet" ).accordion();

			$('.rightSit').slick({
				rows: 2,
				slidesPerRow: 2,
				dots: true,
				arrows: false,
				centerPadding: '100px',
				dotsClass: 'dotki',
				autoplay: true,
				autoplaySpeed: 5000,
				responsive: [
					{
					    breakpoint: 744,
					    settings: "unslick"
					},
				]
			});

			$('.gallerySlider').slick({
				rows: 1,
				slidesPerRow: 1,
				centerMode: true,
				infinite: true,
				variableWidth: true,
				infinite: true,
				prevArrow: '<div class="scrollButton"><div class="container"><a class="slick-prev" aria-label="Previous" type="button" href="javascript:void(0);"><img src="img/left-arrow.png"></a></div></div>',
				nextArrow: '<div class="scrollButton"><div class="container"><a class="slick-next" aria-label="Next" type="button" href="javascript:void(0);"><img src="img/right-arrow.png"></a></div></div>',
				responsive: [
					{
					    breakpoint: 744,
					    settings: "unslick"
					},
				]
			});			
		});
    }

	if(window.innerWidth < 744) {
		$( function() {
			$( ".tablet" ).accordion();

			$('.advantagesWrap .partners').slick({
				rows: 3,
				slidesPerRow: 1,
				dots: true,
				arrows: false,
				centerMode: false,
				infinite: true,
				dotsClass: 'dotki',
				autoplay: true,
				autoplaySpeed: 5000
			});

			$('.whyitWrap .partners').slick({
				rows: 3,
				slidesPerRow: 1,
				dots: true,
				arrows: false,
				centerMode: false,
				swipeToSlide: true,
				infinite: true,
				dotsClass: 'dotki',
				autoplay: true,
				autoplaySpeed: 5000
			});

			$('.rightSit').slick({
				rows: 2,
				slidesPerRow: 1,
				dots: true,
				arrows: false,
				dotsClass: 'dotki',
				autoplay: true,
				autoplaySpeed: 5000
				
			});
			$('.gallerySlider').slick({
				rows: 1,
				slidesPerRow: 1,
				dots: true,
				arrows: false,
				variableWidth: true,
				centerMode: true,
				dotsClass: 'dotki',
				autoplay: true,
				autoplaySpeed: 5000
			});

			$('.pricepacks').slick({
				slidesPerRow: 1,
				dots: true,
				arrows: false,
				centerMode: false,
				dotsClass: 'dotki',
				autoplay: true,
				autoplaySpeed: 5000
			});
		});
    }

});

$(window).scroll(function(){    
    "use strict";   
    var scroll = $(window).scrollTop();
    if( scroll > 20 ){      
        $("header").addClass("scroll-fixed-navbar");               
    } else {
        $("header").removeClass("scroll-fixed-navbar");
    }

    $('.phone').mask('+380 (99) 999-9999');

});
