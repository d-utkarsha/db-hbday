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

},6000);

/* HIDE SCANNER */

setTimeout(()=>{

  scannerSection.style.display = "none";

},8200);

/* SHOW LOGS */

setTimeout(()=>{

  logsSection.style.display = "flex";

  logs.forEach((log,index)=>{

    setTimeout(()=>{

      log.classList.add("show");

    },index * 700);

  });

},8300);

/* APPROVED */

setTimeout(()=>{

  approved.classList.add("show");

},12500);

/* BUTTON */

setTimeout(()=>{

  nextBtn.classList.add("show");

},13300);

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