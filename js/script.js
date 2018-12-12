var projectButtons = document.querySelectorAll('.show-project');
var projectInfo = document.querySelectorAll('.project-info');

for (let i = 0; i < projectButtons.length; i++) {
    projectButtons[i].addEventListener('click', function () {
        projectInfo[i].style.display = (projectInfo[i].dataset.toggled ^= 1) ? "block" : "none";
        projectButtons[i].innerText = (projectButtons[i].dataset.toggled ^= 1) ? "Hide Details" : "Show Details";
    })   
}