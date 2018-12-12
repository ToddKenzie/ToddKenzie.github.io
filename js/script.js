const projectButtons = document.querySelectorAll('.show-project');
const projectInfo = document.querySelectorAll('.project-info');

for (let i = 0; i < projectButtons.length; i++) {
    projectButtons[i].addEventListener('click', function () {
        projectInfo[i].style.display = (projectInfo[i].dataset.toggled ^= 1) ? "block" : "none";
        projectButtons[i].innerText = (projectButtons[i].dataset.toggled ^= 1) ? "Hide Details" : "Show Details";
    })   
}

// var modal = document.getElementById('modal-contact');
// var modButton = document.getElementById('modal-button');
// var modSpan = document.getElementsByClassName('modal-close')[0];

const projectImages = document.getElementsByClassName('.project-image');
const modalImages = document.getElementsByClassName('.modal-image');
const modal = document.querySelector('#modal');
let imageNumber = 0;

for (let j = 0; j < projectImages.length; j++) {
    projectImages[j].addEventListener('click', function () {
        modal.style.display = 'block';
        modalImages[j].style.display = "block";
        imageNumber = j;
    })
}

// modal.addEventListener('click', function () {
//     modal.style.display = "none";
// })

window.onclick = event => {
    if(event.target == modal) {
        modal.style.display = 'none';
        modalImages[imageNumber].style.display = "none";
    }
}

// modButton.onclick = () => modal.style.display = 'block';
// modSpan.onclick = () => modal.style.display = 'none';
