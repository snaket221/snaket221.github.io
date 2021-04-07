$('html, body').css({
  	'overflow': 'hidden',
  	'height': '100vh'
});

window.onload = function() {
	document.querySelector(".preloader").classList.add("loaded");
	$('html, body').css({
	  	'overflow': 'auto',
	 	'height': 'auto'
	});
}