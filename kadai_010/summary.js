// JavaScript Document

$('#change-color').on('click' ,() => {
	$('#target').css('color','red');
});

$('#change-text').on('click' ,() => {
	$('#target').text('Hello!');
});

$(function(){
	$('#fade-out').on('click' ,() => {
		$('#target').fadeOut();
	});
});

$(function(){
	$('#fade-in').on('click' ,() => {
		$('#target').fadeIn();
	});
});