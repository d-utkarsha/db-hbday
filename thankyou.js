/* =========================================
   EMAIL JS
========================================= */

emailjs.init(
"QN9wtYZq2uaZoJGEY"
);

/* =========================================
   ELEMENTS
========================================= */

const title =
document.getElementById(
"thankYouTitle"
);

const typewriter =
document.getElementById(
"typewriterText"
);

const signature =
document.getElementById(
"signature"
);

const feedbackScene =
document.getElementById(
"feedbackScene"
);

const finalScene =
document.getElementById(
"finalScene"
);

const slider =
document.getElementById(
"ratingSlider"
);

const ratingValue =
document.getElementById(
"ratingValue"
);

const feedbackText =
document.getElementById(
"feedbackText"
);

const submitBtn =
document.getElementById(
"submitFeedback"
);

const mouseBlur =
document.querySelector(
".mouse-blur"
);

const cursorGlow =
document.querySelector(
".cursor-glow"
);

const rightGroup =
document.getElementById(
"rightGroup"
);

const thankyouMusic =
document.getElementById(
"thankyouMusic"
);

const cutSound =
document.getElementById("cutSound");

/* PRELOAD */

cutSound.load();

/* =========================================
   MOUSE GLOW
========================================= */

document.addEventListener(
"mousemove",
(e)=>{

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
   TYPEWRITER TEXT
========================================= */

const message =

`This wasn't just a birthday website.

It was a collection of memories,
moments and smiles.

I hope this made your day
a little more special.`;

let index = 0;

/* =========================================
   START TYPEWRITER
========================================= */

setTimeout(()=>{

    typewriter.style.opacity = "1";

    typeWriter();

},3000);

/* =========================================
   TYPE FUNCTION
========================================= */

function typeWriter(){

    if(index < message.length){

        typewriter.innerHTML =

        message.substring(
        0,
        index
        )

        +

        '<span class="cursor">|</span>';

        index++;

        setTimeout(
        typeWriter,
        42
        );

    }

    else{

        typewriter.innerHTML =
        message;

        showSignature();
    }

}

/* =========================================
   SIGNATURE
========================================= */

function showSignature(){

    setTimeout(()=>{

        signature.style.opacity =
        "1";

    },700);

}

/* =========================================
   TRANSITION TO FEEDBACK
========================================= */

setTimeout(()=>{

    title.classList.add(
    "dissolve"
    );

    typewriter.classList.add(
    "dissolve"
    );


    setTimeout(()=>{

rightGroup.classList.add(
"moveRight"
);

feedbackScene.classList.add(
"active"
);

    },1000);

},12000);

/* =========================================
   SLIDER
========================================= */

slider.addEventListener(
"input",
()=>{

    const value =
    Number(slider.value);

    const percent =

(value / 10) * 100;

slider.style.background =

`linear-gradient(
to right,
#ffd54f 0%,
#ffd54f ${percent}%,
#222 ${percent}%,
#222 100%
)`;

    if(value >= 10){

        ratingValue.textContent =
        "1000";

        ratingValue.style.textShadow =
        "0 0 25px gold";

        ratingValue.style.transform =
        "scale(1.15)";

    }

    else{

        ratingValue.textContent =
        value.toFixed(1);

        ratingValue.style.textShadow =
        "none";

        ratingValue.style.transform =
        "scale(1)";
    }

});

/* =========================================
   SUBMIT
========================================= */

submitBtn.addEventListener(
"click",
async ()=>{

    const rating =

Number(slider.value) >= 10

? "1000"

: Number(slider.value).toFixed(1);

    const feedback =
    feedbackText.value.trim();

    if(feedback === ""){

        alert(
        "Please write something before leaving 💛"
        );

        return;
    }

    submitBtn.disabled =
    true;

    submitBtn.innerHTML =
    "Sending...";

    try{

        await emailjs.send(

        "service_4sisino",

        "template_bz1lrjk",

        {

            rating:
            rating,

            feedback:
            feedback

        }

        );

        feedbackScene.classList.add(
"dissolve"
);

rightGroup.classList.add(
"dissolve"
);



setTimeout(()=>{

    finalScene.classList.add(
    "show"
    );

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

},1800);

    }

    catch(error){

        console.log(error);

        alert(
        "Couldn't send feedback 😭"
        );

        submitBtn.disabled =
        false;

        submitBtn.innerHTML =
        "Send Feedback 💛";
    }

});

/* =========================================
   OPTIONAL RATING RESPONSE
========================================= */

slider.addEventListener(
"change",
()=>{

    const value =
    Number(slider.value);

    if(value === 10){

        console.log(
        "Mission Successful 💛"
        );

    }

});

/* =========================================
   PREVENT DOUBLE SUBMIT
========================================= */

window.addEventListener(
"beforeunload",
(e)=>{

    if(
    feedbackScene.classList.contains(
    "active"
    ) &&
    !finalScene.classList.contains(
    "show"
    )
    ){

        e.preventDefault();

        e.returnValue = "";
    }

});

window.addEventListener(
"load",
()=>{

    thankyouMusic.volume = 0;

    thankyouMusic.play();

    let volume = 0;

    const fadeIn = setInterval(()=>{

        volume += 0.02;

        thankyouMusic.volume = volume;

        if(volume >= 0.25){

            clearInterval(
            fadeIn
            );
        }

    },100);

});

const fadeOut = setInterval(()=>{

    music.volume -= 0.02;

    if(music.volume <= 0){

        clearInterval(
        fadeOut
        );

        window.location.href =
        "thankyou.html";
    }

},100);
