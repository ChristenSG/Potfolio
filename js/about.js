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