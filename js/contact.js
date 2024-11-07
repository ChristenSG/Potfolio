
const body = document.querySelector('body');

// Contact Button---------------------------------------------
const contactBtn = document.getElementById('contact-btn');
const contactSmallO = document.getElementById('contact-small-o');
const contactBigO = document.getElementById('contact-big-o');
const formContainer = document.getElementById('form-container');
// const allProjectsContainer = document.getElementById('all-projects');

contactBtn.addEventListener('click', showContactFun);

function showContactFun(){
	if (contactBigO.style.display === "none" || contactBigO.style.display === ""){
		contactBigO.style.display = "block";
		contactSmallO.style.display = "none";
		formContainer.style.display = "block";
	} else {
		contactBigO.style.display = "none";
		contactSmallO.style.display = "block";
		formContainer.style.display = "none";
	}
}
// -----------------------------------------------------------