const noBtn = document.querySelector(".no-btn");

/* =========================
   BUTTON SETTINGS
========================= */

noBtn.style.position = "fixed";
noBtn.style.transition =
"left 0.12s ease-out, top 0.12s ease-out";



/* =========================
   INITIAL POSITION
========================= */

/*
DON'T set x/y from JS initially.
Let CSS decide the starting position.

Example in CSS:

.no-btn{
    left: 58%;
    top: 65%;
}

You can adjust those values freely.
*/

let x = parseFloat(getComputedStyle(noBtn).left);
let y = parseFloat(getComputedStyle(noBtn).top);



/* =========================
   ESCAPE LOGIC
========================= */

document.addEventListener("mousemove",(e)=>{

    const rect =
    noBtn.getBoundingClientRect();


    // BUTTON CENTER

    const btnCenterX =
    rect.left + rect.width / 2;

    const btnCenterY =
    rect.top + rect.height / 2;



    // CURSOR DISTANCE

    const dx =
    e.clientX - btnCenterX;

    const dy =
    e.clientY - btnCenterY;

    const distance =
    Math.sqrt(dx * dx + dy * dy);



    // DETECT CURSOR EARLY

    const triggerDistance = 170;



    if(distance < triggerDistance){

        // DIRECTION

        const angle =
        Math.atan2(dy,dx);



        // ESCAPE DISTANCE

        const escapeDistance = 240;



        let newX =
        x - Math.cos(angle) * escapeDistance;

        let newY =
        y - Math.sin(angle) * escapeDistance;



        // SCREEN LIMITS

        const padding = 20;

        const maxX =
        window.innerWidth -
        rect.width -
        padding;

        const maxY =
        window.innerHeight -
        rect.height -
        padding;



        // KEEP INSIDE SCREEN

        if(newX < padding){

            newX = padding;
        }

        if(newX > maxX){

            newX = maxX;
        }

        if(newY < padding){

            newY = padding;
        }

        if(newY > maxY){

            newY = maxY;
        }



        // APPLY POSITION

        x = newX;

        y = newY;

        noBtn.style.left = `${x}px`;

        noBtn.style.top = `${y}px`;
    }
});



/* =========================
   EXTRA SAFETY
========================= */

noBtn.addEventListener("mouseenter",()=>{

    const rect =
    noBtn.getBoundingClientRect();

    const padding = 20;

    const maxX =
    window.innerWidth -
    rect.width -
    padding;

    const maxY =
    window.innerHeight -
    rect.height -
    padding;



    x =
    Math.random() * maxX;

    y =
    Math.random() * maxY;



    noBtn.style.left = `${x}px`;

    noBtn.style.top = `${y}px`;
});



/* =========================
   MOBILE SUPPORT
========================= */

noBtn.addEventListener("touchstart",(e)=>{

    e.preventDefault();

    const rect =
    noBtn.getBoundingClientRect();

    const padding = 20;

    const maxX =
    window.innerWidth -
    rect.width -
    padding;

    const maxY =
    window.innerHeight -
    rect.height -
    padding;



    x =
    Math.random() * maxX;

    y =
    Math.random() * maxY;



    noBtn.style.left = `${x}px`;

    noBtn.style.top = `${y}px`;
});



/* =========================
   YES BUTTON
========================= */

function openCake(){

    const heroCard =
    document.querySelector(".hero-card");

    const questionSection =
    document.querySelector(".question-section");

    /* POP OUT */

    heroCard.classList.add("hero-pop-out");

    questionSection.classList.add("question-pop-out");

    /* NEXT PAGE */

    /* PRELOAD CAKE MUSIC */

const preloadMusic =
new Audio("music/cake.mp3");

preloadMusic.volume = 0;

preloadMusic.play();

/* SAVE FLAG */

localStorage.setItem(
  "cakeMusicStart",
  "true"
);

/* OPEN PAGE */

setTimeout(()=>{

  window.location.href =
  "cake.html";

},120);
}

/* =========================================
   MOUSE BLUSH
========================================= */

const blush =
document.querySelector(".mouse-blush");

document.addEventListener("mousemove",(e)=>{

    blush.style.left =
    e.clientX + "px";

    blush.style.top =
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