$(function(){
	$.fn.scrollTo = function(){
		if (this.length) {
			$('html, body').animate({
				scrollTop: this.offset().top,
			}, 200);
		}
	};
	$(document).on('click', '.scroll-to', function(event){
		event.preventDefault();
		var target = $(this).data('target');
		$(target).scrollTo();
	});
});
