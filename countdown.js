const countElement =
document.getElementById("count");

const loadingBox =
document.getElementById("loadingBox");

const cursorGlow =
document.querySelector(".cursor-glow");

const mouseBlur =
document.querySelector(".mouse-blur");

/* Mouse Glow */

document.addEventListener("mousemove", (e) => {

  cursorGlow.style.left =
  e.clientX - 14 + "px";

  cursorGlow.style.top =
  e.clientY - 14 + "px";

  mouseBlur.style.left =
  e.clientX + "px";

  mouseBlur.style.top =
  e.clientY + "px";
});

/* Countdown */

let count = 3;

countElement.innerHTML = count;

const interval = setInterval(() => {

  count--;

  if(count > 0){

    countElement.innerHTML = count;
  }

  else{

    clearInterval(interval);

    countElement.style.display = "none";

    loadingBox.style.display = "flex";

    setTimeout(() => {

      window.location.href =
      "welcome.html";

    }, 3000);
  }

}, 1000);

/* =========================================
   CONTINUOUS MUSIC SYSTEM
========================================= */

const bgMusic =
document.getElementById("bgMusic");

/* VOLUME */

bgMusic.volume = 0.35;

/* RESTORE TIME */

const savedTime =
localStorage.getItem("musicTime");

if(savedTime){

  bgMusic.currentTime =
  parseFloat(savedTime);
}

/* PLAY */

if(localStorage.getItem("musicAllowed")){

  bgMusic.play();
}

/* SAVE TIME CONTINUOUSLY */

setInterval(()=>{

  localStorage.setItem(
    "musicTime",
    bgMusic.currentTime
  );

},1000);