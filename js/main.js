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
	$(document).on('click', '.chv-individualni-toggle', function(event){
		event.preventDefault();
		$('.chv-individualni-col').addClass('col-sm-12').removeClass('col-sm-3');
		$('.chv-individualni-toggle').hide();
		$('.chv-individualni').show().scrollTo();
	});
});
