
let slideShowButtons = document.getElementsByClassName("slideshow-button");
let ourImg = document.querySelector(".img-section-1");
let ourSrc = ["background-image-section-1", "custom-image-1", "custom-image-1", "custom-image-1" ];

slideShowButtons[0].style.backgroundColor ="#4e63aa";


for (let i = 0; i<4; i++) {slideShowButtons[i].addEventListener("click", buttonFunc) };

function buttonFunc() {

    let elem = this;

    for (let j = 0; j < 4; j++) {

        if (slideShowButtons[j] == elem) {
            ourImg.setAttribute('src', `image/${ourSrc[j]}.png`);
            slideShowButtons[j].style.backgroundColor ="#4e63aa";

        } else {
            slideShowButtons[j].style.backgroundColor ="#dadada"}
    }
};






