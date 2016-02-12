$(document).ready(function() {


//hide character count and tweet button
$('#tweet-controls').hide();


//expand textarea and show tweet-controls on click
$('.tweet-compose').on('click', function(e) {
	e.stopPropagation(); //prevents click event from bubbling up event chain
                         //without stopPropagation, the click event below would also fire, effectively
                         //changing the height of the textarea and hiding the tweet-controls
	$(this).css('height', '5em');
	$('#tweet-controls').show();
});


//shrink textarea and hide tweet-controls when you click anywhere except textarea
$('html').on('click', function() {
	$('.tweet-compose').css('height','2.5em');
	$('#tweet-controls').hide();
});


//character counter
var maxCharacters = 140;

$('#char-count').text(maxCharacters); //fill char-count div with 140

$('textarea').bind('keyup keydown', function() {
    var count = $('#char-count');
    var characters = $(this).val().length;
    var currentCount = (maxCharacters - characters);

    if (currentCount <= 10) {       //if currentCount is less than 10, turn text red
    	count.css('color', 'red');
    }; 

    if (currentCount < 0) {         // if currentCount is less than 0, disable tweet button
    	$('#tweet-submit').attr('disabled','disabled');
    };

    if (currentCount >= 0 && currentCount !== 140) {  //if currentCount is between 0 and not 140, enable tweet button
    	$('#tweet-submit').attr('disabled', false);   //allows button to be enabled when user deletes characters
    }


    count.text(currentCount); //display currentCount in char-count div
});


$('#tweet-submit').on('click', function() {                  //when user clicks the tweet submit button
		var newTweet = $('#sampletweet').clone();            //clone a sample tweet from below
		var newTweetText = $('.tweet-compose').val();        //assign value of .tweet-compose to newTweetText

		
		newTweet.find('img').attr('src', 'img/alagoon.jpg'); //set correct avatar
		newTweet.find('.fullname').text('Your Name Here');   //set correct name
		newTweet.find('.username').text('@yourHandle');      //set correct handle
		newTweet.find('.tweet-text').text(newTweetText);     //set correct text
		
		$('#stream').prepend(newTweet);                      //add to top of stream
		$('.tweet-compose').val('');                         //clear textarea

});

















});