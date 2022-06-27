jQuery(function($){	
	$(document).ready(function(){
        $('.sliderBanner').slick({
            dots: true,
            arrows: false,
            infinite: true,
            autoplay: false,
            speed: 300,
            slidesToShow: 3,

            responsive: [
                {
                    breakpoint: 1024,
                    settings:{
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings:{
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 480,
                    settings:{
                        slidesToShow: 1,
                    }
                },
            ]
        });
	});	
});