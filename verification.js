const scannerSection =
document.getElementById("scannerSection");

const scanComplete =
document.getElementById("scanComplete");

const logsSection =
document.getElementById("logsSection");

const logs =
document.querySelectorAll(".log");

const approved =
document.getElementById("approved");

const nextBtn =
document.getElementById("nextBtn");

const warningSection =
document.getElementById("warningSection");

const continueBtn =
document.getElementById("continueBtn");

const verifyBox =
document.querySelector(".verify-box");

/* SCAN COMPLETE */

setTimeout(()=>{

  scanComplete.style.display = "block";

},3000);

/* HIDE SCANNER */

setTimeout(()=>{

  scannerSection.style.display = "none";

},4200);

/* SHOW LOGS */

setTimeout(()=>{

  logsSection.style.display = "flex";

  logs.forEach((log,index)=>{

    setTimeout(()=>{

      log.classList.add("show");

    },index * 700);

  });

},4300);

/* APPROVED */

setTimeout(()=>{

  approved.classList.add("show");

},8500);

/* BUTTON */

setTimeout(()=>{

  nextBtn.classList.add("show");

},9500);

/* WARNING POPUP */

nextBtn.addEventListener("click",()=>{

  verifyBox.style.display = "none";

  warningSection.style.display = "flex";

});

/* CONTINUE */

continueBtn.addEventListener("click",()=>{

  window.location.href = "countdown.html";

});

/* MOUSE GLOW */

const mouseBlur =
document.querySelector(".mouse-blur");

const cursorGlow =
document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

  mouseBlur.style.left =
  e.clientX + "px";

  mouseBlur.style.top =
  e.clientY + "px";

  cursorGlow.style.left =
  e.clientX + "px";

  cursorGlow.style.top =
  e.clientY + "px";
});


/* =========================================
   BACKGROUND MUSIC
========================================= */
/* const bgMusic =
document.getElementById("bgMusic");

bgMusic.volume = 0.35;

if(localStorage.getItem("musicAllowed")){

  bgMusic.play();
} */

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