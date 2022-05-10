import $ from "jquery";

export function mobilemenu() {
	$(".js-menu").on("click", function() {
		$("body").toggleClass("menuopen");
		$("body").toggleClass("opensidemenu");
		$(".js-mobilemenu").toggleClass("open");
	});
	
	
	$('.mod-mobilemenu li:not(.btn) a').on("click", function() {		
		$("body").removeClass("menuopen");
		$("body").removeClass("opensidemenu");
		$(".js-mobilemenu").removeClass("open");
		
		$('html, body').animate({
			  scrollTop: $($.attr(this, 'href')).offset().top
		}, 1200);
	});
}