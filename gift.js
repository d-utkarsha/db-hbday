/* =========================
   ELEMENTS
========================= */

const giftClosed =
document.getElementById("giftClosed");

const giftOpened =
document.getElementById("giftOpened");

const whiteFlash =
document.getElementById("whiteFlash");

const choiceScene =
document.getElementById("choiceScene");

const envelope =
document.getElementById("envelope");

const reel =
document.getElementById("reel");

const letterScene =
document.getElementById("letterScene");

const reelScene =
document.getElementById("reelScene");

const closeLetter =
document.getElementById("closeLetter");

const closeReel =
document.getElementById("closeReel");

const continueBtn =
document.getElementById("continueBtn");

const memoryVideo =
document.getElementById("memoryVideo");

const bgMusic =
document.getElementById("bgMusic");

const dustContainer =
document.getElementById("dustContainer");

const giftTitle =
document.querySelector(".giftTitle");

const giftClick =
document.querySelector(".giftClick");

/* =========================
   STATES
========================= */

let giftOpenedAlready = false;
let letterViewed = false;
let reelViewed = false;

/* =========================
   LOAD
========================= */

window.addEventListener("load",()=>{

    bgMusic.volume = 0.4;

    bgMusic.play().catch(()=>{});

    createDust();

    startGiftFormation();

});

/* =========================
   DUST
========================= */

function createDust(){

    for(let i=0;i<120;i++){

        const dust =
        document.createElement("div");

        dust.classList.add("dust");

        dust.style.left =
        Math.random()*100 + "vw";

        dust.style.top =
        Math.random()*100 + "vh";

        dust.style.animationDuration =
        (5 + Math.random()*8)
        + "s";

        dust.style.animationDelay =
        Math.random()*8 + "s";

        dustContainer.appendChild(
        dust
        );

    }

}

/* =========================
   GIFT FORMATION
========================= */

function startGiftFormation(){

    giftClosed.animate(

    [

    {
        opacity:0,
        transform:"scale(.25)"
    },

    {
        opacity:.6,
        transform:"scale(.8)"
    },

    {
        opacity:1,
        transform:"scale(1)"
    }

    ],

    {

        duration:2500,
        easing:"ease-out",
        fill:"forwards"

    });

}

/* =========================
   OPEN GIFT
========================= */

giftClosed.addEventListener(
"click",
()=>{

    if(giftOpenedAlready)
    return;

    giftOpenedAlready = true;

    wobbleGift();

});

function wobbleGift(){

    giftClosed.style.pointerEvents =
    "none";

    giftClosed.animate(

    [

    {
        transform:
        "scale(1) rotate(0deg)"
    },

    {
        transform:
        "scale(1.03) rotate(-5deg)"
    },

    {
        transform:
        "scale(1.04) rotate(5deg)"
    },

    {
        transform:
        "scale(1.05) rotate(-2deg)"
    },

    {
        transform:
        "scale(1.05) rotate(2deg)"
    },

    {
        transform:
        "scale(1) rotate(0deg)"
    }

    ],

    {

        duration:1100,

        easing:"ease-in-out",

        fill:"forwards"

    });

    giftClosed.style.filter =
    "drop-shadow(0 0 35px rgba(255,220,120,.9))";

    setTimeout(()=>{

        giftClosed.style.filter =
        "drop-shadow(0 18px 30px rgba(0,0,0,.45))";

        runWhiteReveal();

    },1100);

}
/* =========================
   WHITE REVEAL
========================= */

function runWhiteReveal(){

    /* HIDE TITLE */

    giftTitle.animate(

    [
        {
            opacity:1,
            transform:"translateX(-50%) translateY(0)"
        },

        {
            opacity:0,
            transform:"translateX(-50%) translateY(-20px)"
        }
    ],

    {
        duration:800,
        fill:"forwards"
    }

    );

    /* HIDE CLICK TEXT */

    if(giftClick){

        giftClick.animate(

        [
            {
                opacity:1,
                transform:"translateX(-50%) translateY(0)"
            },

            {
                opacity:0,
                transform:"translateX(-50%) translateY(-20px)"
            }
        ],

        {
            duration:800,
            fill:"forwards"
        }

        );

    }

    /* WHITE FLASH */

    whiteFlash.style.transition =
    "opacity 1.3s ease";

    whiteFlash.style.opacity = "1";

    /* FULL WHITE SCREEN */

    setTimeout(()=>{

        giftClosed.style.display =
        "none";

        giftOpened.style.display =
        "block";

        giftTitle.style.display =
        "none";

        if(giftClick){
            giftClick.style.display =
            "none";
        }

        giftOpened.animate(

        [
            {
                opacity:0,
                transform:"scale(.92)"
            },

            {
                opacity:1,
                transform:"scale(1)"
            }
        ],

        {
            duration:1200,
            fill:"forwards"
        }

        );

    },1500);

    /* HOLD WHITE */

    setTimeout(()=>{

        whiteFlash.style.transition =
        "opacity 3s ease";

        whiteFlash.style.opacity =
        "0";

    },2600);

    /* REVEAL CHOICES */

    setTimeout(()=>{

        revealChoices();

    },4300);

}
/* =========================
   CHOICES
========================= */

function revealChoices(){

    choiceScene.style.display =
    "block";

    envelope.animate(

    [

    {
        opacity:0,
        transform:
        "translateY(140px) rotate(-6deg)"
    },

    {
        opacity:1,
        transform:
        "translateY(0px) rotate(-6deg)"
    }

    ],

    {

        duration:1300,
        easing:"ease-out",
        fill:"forwards"

    });

    reel.animate(

    [

    {
        opacity:0,
        transform:
        "translateY(140px) rotate(6deg)"
    },

    {
        opacity:1,
        transform:
        "translateY(0px) rotate(6deg)"
    }

    ],

    {

        duration:1300,
        easing:"ease-out",
        fill:"forwards"

    });

}

/* =========================
   LETTER
========================= */

/* =========================
   LETTER
========================= */

envelope.addEventListener(
"click",
()=>{

    continueBtn.style.display =
    "none";

    letterScene.style.display =
    "flex";

    letterScene.animate(

    [
        {opacity:0},
        {opacity:1}
    ],

    {
        duration:700,
        fill:"forwards"
    }

    );

});


/* =========================
   REEL
========================= */

reel.addEventListener(
"click",
()=>{

    continueBtn.style.display =
    "none";

    reel.style.visibility =
    "hidden";

    reelScene.style.display =
    "flex";

    memoryVideo.currentTime = 0;

    memoryVideo.animate(

    [

    {
        opacity:0,
        transform:"scale(.75)"
    },

    {
        opacity:1,
        transform:"scale(1)"
    }

    ],

    {

        duration:900,

        easing:
        "cubic-bezier(.22,.61,.36,1)",

        fill:"forwards"

    });

    setTimeout(()=>{

        memoryVideo.play();

    },500);

});


/* =========================
   CLOSE LETTER
========================= */

closeLetter.addEventListener(
"click",
()=>{

    letterScene.style.display =
    "none";

    letterViewed = true;

    checkCompletion();

});


/* =========================
   CLOSE REEL
========================= */

closeReel.addEventListener(
"click",
()=>{

    memoryVideo.pause();

    reelScene.style.display =
    "none";

    reel.style.visibility =
    "visible";

    reelViewed = true;

    checkCompletion();

});


/* =========================
   CONTINUE BUTTON
========================= */

function checkCompletion(){

    if(
        letterViewed &&
        reelViewed
    ){

        continueBtn.style.display =
        "block";

        continueBtn.animate(

        [

        {
            opacity:0,
            transform:
            "translateX(-50%) translateY(20px)"
        },

        {
            opacity:1,
            transform:
            "translateX(-50%) translateY(0)"
        }

        ],

        {

            duration:900,
            fill:"forwards"

        });

    }

}


/* =========================
   CONTINUE
========================= */

continueBtn.addEventListener(
"click",
()=>{

    document.body.style.transition =
    "opacity 1.8s ease";

    document.body.style.opacity =
    "0";

    setTimeout(()=>{

        window.location.href =
        "thankyou.html";

    },1800);

});


/* =========================
   CONTINUE
========================= */

continueBtn.addEventListener(
"click",
()=>{

    document.body.style.transition =
    "opacity 1.8s ease";

    document.body.style.opacity =
    "0";

    setTimeout(()=>{

        window.location.href =
        "thankyou.html";

    },1800);

});

/* =========================
   ESC CLOSE
========================= */

document.addEventListener(
"keydown",
(e)=>{

    if(e.key==="Escape"){

        letterScene.style.display =
        "none";

        reelScene.style.display =
        "none";

        memoryVideo.pause();

    }

});