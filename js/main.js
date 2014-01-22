
$(function () {

    $('textarea').focus(function () {
    	$(this).addClass('expand');
        $('#tweet-controls').show();
        $('.button').show();
    });

    // $('textarea')
    $('textarea').blur(function) {
    	$(this).removeClass('expand');

    // $('.button').click(function () {
        
    //     $('textarea').css('height', '40px');
        // $('#tweet-controls').hide();
    });

// Counts characters and turns char-count red at <= 10 characters

    $('textarea').keyup(function () {
        var count = $(this).val().length;
        $('#char-count').text(140 - count);
        if (count > 129) {
            $('#char-count').css('color', 'red');
        } else {
            $('#char-count').css('color', 'black');
        }
        if (count > 140) {
            $('.button').attr('disabled', 'disabled')
        } else {
            $('.button').removeAttr('disabled')
        }
    });

    // Prepend new tweet to feed
 	
 	$('#tweet-submit').on('click', function(){

 		var newText = $('.tweet-compose').val();
 		var profileName = $('#profileName').text();
 		
 		var newTweet = $('.tweet').eq(0).clone();
 		newTweet.find('.avatar').attr('src', 'img/alagoon.jpg')
 		newTweet.find('.tweet-text').text(newText);
 		newTweet.find('.fullname').text(profileName);

 		$('#stream').prepend(newTweet);
 		$('textarea').val('');
 		$('#char-count').text('140');

 	});

 	// $('.content').hover(function () {
  //           $(this).find('.tweet-actions').addClass('hover');
  //       }, function () {
  //           $(this).removeClass('hover');
  //       });


});