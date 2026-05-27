/* =========================================
   ELEMENTS
========================================= */

const mouseBlush =
document.querySelector(".mouse-blush");

const cakeFull =
document.getElementById("cakeFull");

const leftCake =
document.getElementById("leftCake");

const rightCake =
document.getElementById("rightCake");

const swipeLine =
document.getElementById("swipeLine");

const nextSection =
document.getElementById("nextSection");

const instruction =
document.getElementById("instructionText");

const cutSound =
document.getElementById("cutSound");

/* PRELOAD */

cutSound.load();

/* =========================================
   MOUSE BLUSH
========================================= */

document.addEventListener("mousemove",(e)=>{

    mouseBlush.style.left =
    e.clientX + "px";

    mouseBlush.style.top =
    e.clientY + "px";
});

/* =========================================
   TOUCH SWIPE
========================================= */

let startX = 0;
let startY = 0;

document.addEventListener("touchstart",(e)=>{

    startX =
    e.touches[0].clientX;

    startY =
    e.touches[0].clientY;
});

document.addEventListener("touchend",(e)=>{

    const endX =
    e.changedTouches[0].clientX;

    const endY =
    e.changedTouches[0].clientY;

    const diffX =
    endX - startX;

    const diffY =
    endY - startY;

    if(

        Math.abs(diffX) > 100 ||

        Math.abs(diffY) > 100

    ){

        cutCake();
    }
});

/* =========================================
   DESKTOP SWIPE
========================================= */

let mouseDown = false;

document.addEventListener("mousedown",()=>{

    mouseDown = true;
});

document.addEventListener("mouseup",()=>{

    if(mouseDown){

        cutCake();
    }

    mouseDown = false;
});

/* =========================================
   CUT FUNCTION
========================================= */

let alreadyCut = false;

function cutCake(){

    if(alreadyCut) return;

    alreadyCut = true;

    /* HIDE SWIPE TEXT */

    instruction.style.transition =
    "opacity 0.5s ease";

    instruction.style.opacity = "0";

    /* SHOW SWIPE */

    swipeLine.classList.add("show");

    /* HIDE FULL CAKE */

    setTimeout(()=>{

        cakeFull.style.opacity = "0";

    },250);

    /* SPLIT CAKE */

    setTimeout(()=>{

        leftCake.classList.add("cut");

        rightCake.classList.add("cut");

    },350);

    cutSound.currentTime = 0;

cutSound.play();

    /* LEFT */

confetti({

    particleCount:260,

    angle:60,

    spread:55,

    startVelocity:70,

    gravity:0.6,

    ticks:350,

    scalar:1.2,

    origin:{

        x:0,

        y:1
    }
});

/* RIGHT */

confetti({

    particleCount:260,

    angle:120,

    spread:55,

    startVelocity:70,

    gravity:0.6,

    ticks:350,

    scalar:1.2,

    origin:{

        x:1,

        y:1
    }
});

    /* LUXURY BLAST 

    setTimeout(()=>{

        createLuxuryBlast("left");

        createLuxuryBlast("right");

    },600); */

    /* SHOW NEXT */

    setTimeout(()=>{

        nextSection.classList.add("show");

    },1700);
}

/* =========================================
   NEXT PAGE
========================================= */

function moveNext(){

    const transition =
    document.querySelector(".page-transition");

    const cakeScene =
    document.querySelector(".cake-scene");

    /* POP OUT */

    cakeScene.classList.add("pop-out");

    /* FADE */

    transition.classList.add("active");

    /* NEXT PAGE */

    setTimeout(()=>{

        window.location.href =
        "memory.html";

    },900);
}

/* =========================================
   LUXURY CORNER BLAST
========================================= */

function createLuxuryBlast(side){

    const container =

    side === "left"

    ? document.querySelector(".blast-left")

    : document.querySelector(".blast-right");

    if(!container) return;

    const colors = [

        "#ffd54f",
        "#fff3b0",
        "#ffe082",
        "#ffffff",
        "#ffecb3",
        "#ffcc80"
    ];

    for(let i=0; i<120; i++){

        const particle =
        document.createElement("div");

        particle.classList.add("blast-particle");

        const size =
        Math.random()*18 + 6;

        particle.style.width =
        size + "px";

        particle.style.height =
        size + "px";

        particle.style.background =
        colors[Math.floor(Math.random()*colors.length)];

        particle.style.left =
        Math.random()*240 + "px";

        particle.style.bottom =
        "0px";

        particle.style.opacity = "1";

        const spread =

        side === "left"

        ? Math.random()*1100

        : -(Math.random()*1100);

        particle.style.setProperty(
            "--moveX",
            `${spread}px`
        );

        particle.style.animationDelay =
        Math.random()*0.12 + "s";

        container.appendChild(particle);

        setTimeout(()=>{

            particle.classList.add("animate");

        },10);

        /* CLEANUP */

        setTimeout(()=>{

            particle.remove();

        },3000);
    }
}

/* =========================================
   CAKE MUSIC
========================================= */

const cakeMusic =
document.getElementById("cakeMusic");

cakeMusic.volume = 0.4;

/* INSTANT START */

if(localStorage.getItem("cakeMusicStart")){

  cakeMusic.play();
}