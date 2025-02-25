// (function(){
//         emailjs.init("YOUR_USER_ID"); // EmailJS User ID
//     })();

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault();

//     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
//     .then(function() {
//         alert('Email sent successfully!');
//     }, function(error) {
//         alert('Failed to send email. ' + JSON.stringify(error));
//     });
// });

const body = document.querySelector('body');

// Contact Button---------------------------------------------
const contactBtn = document.getElementById('contact-btn');
const contactSmallO = document.getElementById('contact-small-o');
const contactBigO = document.getElementById('contact-big-o');
const formContainer = document.getElementById('form-container');
// const allProjectsContainer = document.getElementById('all-projects');

contactBtn.addEventListener('click', showContactFun);

function showContactFun(){
	if (contactBigO.style.display === "block" || contactBigO.style.display === ""){
		contactBigO.style.display = "none";
		contactSmallO.style.display = "block";
		formContainer.style.display = "none";
	} else {
		contactBigO.style.display = "block";
		contactSmallO.style.display = "none";
		formContainer.style.display = "block";
	}
}
// -----------------------------------------------------------

// Submitting Contact form------------------------------------
document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    let formData = new FormData(this);
    let jsonObject = {};

    // Convert FormData to JSON
    formData.forEach((value, key) => {
        if (value.trim() !== "") { // Ignore empty fields
            jsonObject[key] = value.trim();
        }
    });

    let responseMessage = document.getElementById("formResponse");

    // Ensure the JSON object is not empty
    if (Object.keys(jsonObject).length === 0) {
        responseMessage.innerHTML = "⚠️ Please fill out the form before submitting.";
        return;
    }

    try {
        let response = await fetch("https://formspree.io/f/mjkgwnag", {
            method: "POST",
            body: JSON.stringify(jsonObject),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        let data = await response.json();

        if (response.ok) {
            responseMessage.innerHTML = "✅ Message sent successfully!";
            this.reset();
        } else {
            responseMessage.innerHTML = `❌ Error: ${data.error || "Something went wrong."}`;
        }
    } catch (error) {
        responseMessage.innerHTML = `⚠️ Error: ${error.message}`;
    }
});
// -----------------------------------------------------------
