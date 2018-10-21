//for reference: parameters of project
//image carousel (rotate min 3 images automatically on page)
var images;
var maxImageIndex;
var currentIndex;

const setUp = () => {
    images = document.querySelectorAll('#cycler-images img');
    maxImageIndex = images.length;
    currentIndex = 0;
}

const changeBanner = () => {
    images[currentIndex].className = 'cycler-image';
    currentIndex = (currentIndex >= maxImageIndex - 1) ? 0 : currentIndex + 1;
    images[currentIndex].className += ' top';
}

//add hamburger button
const hamburger = () => {
    var x = document.getElementById("nav-links");
    if (x.className === "ham") {
        x.className += " responsive";
    } else {
        x.className = "ham";
    }
}

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
var modal = document.getElementById('modal-contact');
var modButton = document.getElementById('modal-button');
var modSpan = document.getElementsByClassName('modal-close')[0];

modButton.onclick = () => modal.style.display = 'block';
modSpan.onclick = () => modal.style.display = 'none';
window.onclick = event => {
    if(event.target == modal) {
        modal.style.display = 'none';
    }
}

window.onload = () => {
    setUp();
    images[currentIndex].className += ' top';
    setInterval(changeBanner, 8000);
}
