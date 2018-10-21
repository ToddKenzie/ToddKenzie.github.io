//for reference: parameters of project
//image carousel (rotate min 3 images automatically on page)

//add hamburger button

//add button to show/hide material for portfolio projects
var projectButtons = document.querySelectorAll('.show-project');
var projectInfo = document.querySelectorAll('.project-info');

for (let i = 0; i < projectButtons.length; i++) {
    projectButtons[i].addEventListener('click', function () {
        projectInfo[i].style.display = (projectInfo[i].dataset.toggled ^= 1) ? "block" : "none";
        projectButtons[i].innerText = (projectButtons[i].dataset.toggled ^= 1) ? "Hide Details" : "Show Details";
    })   
}

//create modal box to pop up with bio for button or link (prefer for pics for projects as a Zoom function)
