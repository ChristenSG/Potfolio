const body = document.querySelector('body');

// About Button---------------------------------------------
const aboutBtn = document.getElementById('about-btn');
const aboutSmallO = document.getElementById('about-small-o');
const aboutBigO = document.getElementById('about-big-o');

aboutBtn.addEventListener('click', showAboutFun);

function showAboutFun(){
	if (aboutBigO.style.display === "none" || aboutBigO.style.display === ""){
		aboutBigO.style.display = "block";
		aboutSmallO.style.display = "none";
	} else {
		aboutBigO.style.display = "none";
		aboutSmallO.style.display = "block";
	}
}
// -----------------------------------------------------------

// About Popup------------------------------------------------
const aboutPopup = document.getElementById('about-popup');
const aboutPopupBtn = document.getElementById('about-popup-btn');

aboutPopupBtn.addEventListener('click', showAboutPopupFunc);

function showAboutPopupFunc(){
	aboutPopup.style.display = "block";
	body.style.overflowY = "hidden";
}

aboutPopup.addEventListener('click', function(event){
	if (event.target === aboutPopup){
		aboutPopup.style.display = "none";
		body.style.overflowY = "visible";
	}
});
// -----------------------------------------------------------