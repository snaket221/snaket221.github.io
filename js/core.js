window.addEventListener("scroll", function() {
	var offset = window.pageYOffset;
	var parallax = document.getElementsByClassName("slideshowimage");
	var navbar = document.querySelector(".navbar");

	for (i = 0; i < parallax.length; i++) {
	    parallax[i].style.backgroundPositionY = offset * .25 + 'px';
	}

	if (offset > 50) {
		navbar.classList.add("scrolled");
	}

	else if (offset < 50) {
		navbar.classList.remove("scrolled");
	}
});

document.addEventListener('click', function(event) {
	var specifiedElement = document.querySelector('.search');
  	var isClickInside = specifiedElement.contains(event.target);
  	var search = document.querySelector(".searchform");

  	if (!isClickInside && !event.target.classList.contains('searchbutton') && search.classList.contains("shown") == true) {
    	searchdb();
  	}
});

function searchdb() {
	var searchform = document.querySelector(".searchform");
	var searcha = document.querySelector(".searcha");
	var navbar = document.querySelector(".navbar");
	searchform.classList.toggle("shown");
	searcha.classList.toggle("hidden");
	navbar.classList.toggle("searchshown");
}

function dropdown() {
	var dropdown = document.querySelector(".dropdown");
	var dropdownbtn = document.querySelector(".dropbtn");
	var navbar = document.querySelector(".navbar");

	dropdown.classList.toggle("shown");
	navbar.classList.toggle("dropdownshown");
	navbar.classList.remove("scrolled");

	if (dropdown.classList.contains("shown")) {
		dropdownbtn.innerHTML = '<i class="fas fa-times"></i>';
		dropdownbtn.style.fontSize = "3.5vh";
		$('html, body').css({
		  	'overflow': 'hidden',
		  	'height': '100vh'
		});
	}

	else {
		dropdownbtn.innerHTML = '<i class="fas fa-bars"></i>';
		dropdownbtn.style.fontSize = "3vh";
		$('html, body').css({
		  	'overflow': 'auto',
		 	'height': 'auto'
		});
	}
}