$(window).on('load', function () {
    $('#page-preloader').delay(350).fadeOut('slow');
});

$(document).ready(function(){
	new Clipboard('.clipboard');

	$('#about a.photo').magnificPopup({type:'image'});

	$('#contacts button').hover(
		function(){
			var text = $(this).data('clipboard-text');
			$('#contacts .contact-content').text(text).fadeIn(300);
		}, 
		function(){
			$('#contacts .contact-content').hide().text('');
		}
	);

	$('#contacts button').click(function(){
		$('#contacts .contact-content').text('Скопировано!');
	});

	$('.nav a').click(function(e){
		e.preventDefault();

		var target = $(this).attr('href');
		var top = $(target).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});