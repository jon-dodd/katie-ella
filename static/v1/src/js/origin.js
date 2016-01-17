
$(document).ready(function(){
	
	$('.owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: true,
		autoPlay: true,
		mouseDrag: false,
	})
	
	
	// Mobile nav
	$('.nav__toggle').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('nav__toggle--active');
		$('.nav__items').toggleClass('nav__items--show');
	});
	if ($('html').hasClass('no-touchevents')) {
		$('.nav__parent>a').one( "click", function(event) {
			event.preventDefault(); 
		});
	}
});