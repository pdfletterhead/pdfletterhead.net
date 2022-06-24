jQuery( document ).ready(function() {

	// Smooth scroll
	jQuery('.navbar-nav a, footer a').click(function(){

    link = jQuery.attr(this, 'href');
    link = link.replace('#','');

		jQuery('html, body').animate({
			scrollTop: jQuery("a[name='" + link + "']").offset().top
		}, 500);

		return false;
	});
});
