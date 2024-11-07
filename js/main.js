// Header BG onScroll---------------------------------------
window.onscroll = function(){
	var header = document.getElementById('header');
	if (window.pageYOffset > 100) {
		header.style.background = 'linear-gradient(to bottom, #000, #1A1A19)';
	} else {
		header.style.background = 'linear-gradient(to bottom, #000, transparent)';
	}
};
// ---------------------------------------------------------

// Header [Burger Menu]-------------------------------------
const burgerBtn = document.getElementById('burger-btn');
const burgerMenu = document.getElementById('burger-menu');
const burgerCloseBtn = document.getElementById('burger-close-btn');

burgerBtn.addEventListener('click', burgerBtnFunc);
function burgerBtnFunc() {
	burgerMenu.style.display = "block";
	body.style.overflowY = "hidden";
}

burgerCloseBtn.addEventListener('click', burgerCloseBtnFunc);
function burgerCloseBtnFunc() {
	burgerMenu.style.display = "none";
	body.style.overflowY = "visible";
}
// ---------------------------------------------------------

// Slick Slider [Technologies]------------------------------
	$('.tech-box-slider').slick({
		autoplay: true,
		autoplaySpeed: 0,
	  	dots: false,
	  	arrows: false,
	  	infinite: true,
	  	speed: 8000,
	  	slidesToShow: 4,
	  	slidesToScroll: 1,
	  	cssEase: 'linear'
	  	// responsive: [
	    // 	{
	    //   		breakpoint: 1024,
	    //   		settings: {
	    //     		slidesToShow: 3,
	    //     		slidesToScroll: 3,
	    //     		infinite: true,
	    //     		dots: true
	    //   		}
	    // 	},
	    // 	{
	    //   		breakpoint: 600,
	    //   		settings: {
	    //     		slidesToShow: 2,
	    //     		slidesToScroll: 2
	    //   		}
	    // 	},
	    // 	{
	    //   		breakpoint: 480,
	    //   		settings: {
	    //     		slidesToShow: 1,
	    //     		slidesToScroll: 1
	    //   		}
	    // 	}
	    // // You can unslick at a given breakpoint now by adding:
	    // // settings: "unslick"
	    // // instead of a settings object
	  	// ]
	});
// -----------------------------------------------------------

// Initialize AOS---------------------------------------------
AOS.init({
	once: false,
	easing: 'ease',
	offset: 20,
	duration: 1000
});
// -----------------------------------------------------------



