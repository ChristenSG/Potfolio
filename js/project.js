// Project.html-----------------------------------------------
const body = document.querySelector('body');

// Projects Button--------------------------------------------
// const projectsBtn = document.getElementById('projects-btn');
// const allProjectsContainer = document.getElementById('all-projects');

// projectsBtn.addEventListener('click', showProjectsFun);

// function showProjectsFun(){
// 	if (allProjectsContainer.style.display === "none" || allProjectsContainer.style.display === ""){
// 		allProjectsContainer.style.display = "block";
// 		projectsBtn.classList.add('title-container');
// 	} else {
// 		allProjectsContainer.style.display = "none";
// 	}
// }
// -----------------------------------------------------------

// Ghibli Project---------------------------------------------
const ghibliBtn = document.getElementById('ghibli-btn');
const ghibliContent = document.getElementById('ghibli-content');
const ghibliEyeOpen = document.getElementById('ghibli-eye-open');
const ghibliEyeClose = document.getElementById('ghibli-eye-close');
const ghibliContentImg = document.getElementById('ghibli-content-img');
const ghibliContentText = document.getElementById('ghibli-content-text');

ghibliBtn.addEventListener('click', ghibliFunc);

function ghibliFunc(){
	if (ghibliContent.style.display === "none" || ghibliContent.style.display === ""){
		ghibliBtn.style.background = "#F3C623";
		ghibliEyeOpen.style.display = "none";
		ghibliEyeClose.style.display = "block";
		ghibliContent.style.display = "block";
		ghibliContentImg.style.display = "block";
		ghibliContentText.style.display = "block";
	} else {
		ghibliBtn.style.background = "#1E3E62";
		ghibliBtn.style.color = "#fff";
		ghibliEyeOpen.style.display = "block";
		ghibliEyeClose.style.display = "none";
		ghibliContent.style.display = "none";
		ghibliContentImg.style.display = "none";
		ghibliContentText.style.display = "none";
	}
}
// -----------------------------------------------------------

// Ghibli Popup-----------------------------------------------
const ghibliPopup = document.getElementById('ghibli-popup');
const ghibliPopupBtn = document.getElementById('ghibli-popup-btn');

ghibliPopupBtn.addEventListener('click', showGhibliPopupFunc);

function showGhibliPopupFunc(){
	ghibliPopup.style.display = "block";
	body.style.overflowY = "hidden";
}

ghibliPopup.addEventListener('click', function(event){
	if (event.target === ghibliPopup){
		ghibliPopup.style.display = "none";
		body.style.overflowY = "visible";
	}
});
// -----------------------------------------------------------

// Forum Web Application--------------------------------------
const forumBtn = document.getElementById('forum-btn');
const forumContent = document.getElementById('forum-content');
const forumEyeOpen = document.getElementById('forum-eye-open');
const forumEyeClose = document.getElementById('forum-eye-close');
const forumContentImg = document.getElementById('forum-content-img');
const forumContentText = document.getElementById('forum-content-text');

forumBtn.addEventListener('click', forumFunc);

function forumFunc(){
	if (forumContent.style.display === "none" || forumContent.style.display === ""){
		forumBtn.style.background = "#F3C623";
		forumEyeOpen.style.display = "none";
		forumEyeClose.style.display = "block";
		forumContent.style.display = "block";
		forumContentImg.style.display = "block";
		forumContentText.style.display = "block";
	} else {
		forumBtn.style.background = "#1E3E62";
		forumBtn.style.color = "#fff";
		forumEyeOpen.style.display = "block";
		forumEyeClose.style.display = "none";
		forumContent.style.display = "none";
		forumContentImg.style.display = "none";
		forumContentText.style.display = "none";
	}
}
// -----------------------------------------------------------

// Forum Web Application Popup--------------------------------
const forumPopup = document.getElementById('forum-popup');
const forumPopupBtn = document.getElementById('forum-popup-btn');

forumPopupBtn.addEventListener('click', showForumPopupFunc);

function showForumPopupFunc(){
	forumPopup.style.display = "block";
	body.style.overflowY = "hidden";
}

forumPopup.addEventListener('click', function(event){
	if (event.target === forumPopup){
		forumPopup.style.display = "none";
		body.style.overflowY = "visible";
	}
});
// -----------------------------------------------------------

// Ricardo Project--------------------------------------------
const ricardoBtn = document.getElementById('ricardo-btn');
const ricardoContent = document.getElementById('ricardo-content');
// const ricardoDownDiv = document.getElementById('ricardo-down-box');
const ricardoEyeOpen = document.getElementById('ricardo-eye-open');
const ricardoEyeClose = document.getElementById('ricardo-eye-close');
const ricardoContentImg = document.getElementById('ricardo-content-img');
const ricardoContentText = document.getElementById('ricardo-content-text');

ricardoBtn.addEventListener('click', ricardoFunc);

function ricardoFunc(){
	if (ricardoContent.style.display === "none" || ricardoContent.style.display === ""){
		ricardoBtn.style.background = "#F3C623";
		ricardoEyeOpen.style.display = "none";
		ricardoEyeClose.style.display = "block";
		ricardoContent.style.display = "block";
		ricardoContentImg.style.display = "block";
		ricardoContentText.style.display = "block";
		// ricardoContent.setAttribute("data-aos", "zoom-in");
		// ricardoContent.setAttribute("data-aos-delay", "200");
		// AOS.refresh();
	} else {
		ricardoBtn.style.background = "#1E3E62";
		ricardoBtn.style.color = "#fff";
		ricardoEyeOpen.style.display = "block";
		ricardoEyeClose.style.display = "none";
		ricardoContent.style.display = "none";
		ricardoContentImg.style.display = "none";
		ricardoContentText.style.display = "none";
	}
	// ricardoDownDiv.style.top = "100%";
	// ricardoDownDiv.style.animationTimingFunction = "ease-in-out";
}
// -----------------------------------------------------------

// Ricardo Popup----------------------------------------------
const ricardoPopup = document.getElementById('ricardo-popup');
const ricardoPopupBtn = document.getElementById('ricardo-popup-btn');

ricardoPopupBtn.addEventListener('click', showRicardoPopupFunc);

function showRicardoPopupFunc(){
	ricardoPopup.style.display = "block";
	body.style.overflowY = "hidden";
}

ricardoPopup.addEventListener('click', function(event){
	if (event.target === ricardoPopup){
		ricardoPopup.style.display = "none";
		body.style.overflowY = "visible";
	}
});
// -----------------------------------------------------------