
const Btn = document.querySelector(".btn");

const links = document.querySelector(".switch");

var video = document.getElementById("bg-video"); 

Btn.addEventListener("click", function () {
  links.classList.toggle("active");
});

function playBtn() {
    if(video.paused) {
        video.play();
    } else {
        video.pause();
    }
}