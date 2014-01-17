$(function() {

	$('textarea').click(function() {
		$(this).css('height', '300px');
		$('#tweet-controls').show();
		$('.button').show();

    $('textarea').keydown(function() {
		var count = $(this).val().length;

		$('#char-count').text(140-count);

        if(count > 129){
            $('#char-count').css('color', 'red');
        } else {
        	$('#char-count').css('color', 'black');
        }



		//else subtract number
		

	});
    });



});
