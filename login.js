const inputs = document.querySelectorAll("input");

const button = document.getElementById("enterBtn");

const message = document.getElementById("message");

const cursorGlow = document.querySelector(".cursor-glow");

const mouseBlur = document.querySelector(".mouse-blur");

const correctPassword = "13062006";



/* Mouse Movement */

document.addEventListener("mousemove", (e) => {

  

  cursorGlow.style.left =
  e.clientX - 10 + "px";

  cursorGlow.style.top =
  e.clientY - 10 + "px";

  mouseBlur.style.left =
  e.clientX + "px";

  mouseBlur.style.top =
  e.clientY + "px";
});

/* Input Navigation */

inputs.forEach((input, index) => {

  input.addEventListener("input", () => {

    if(
      input.value.length === 1 &&
      index < inputs.length - 1
    ){

      inputs[index + 1].focus();
    }

  });

  input.addEventListener("keydown", (e) => {

    if(
      e.key === "Backspace" &&
      input.value === "" &&
      index > 0
    ){

      inputs[index - 1].focus();
    }

  });

});

/* Enter Button */

button.addEventListener("click", () => {

  let enteredPassword = "";

  inputs.forEach(input => {

    enteredPassword += input.value;
  });

  /* Correct Password */

  if(enteredPassword === correctPassword){

    const popSound =
document.getElementById("popSound");

popSound.play();

/* ALLOW MUSIC FOR NEXT PAGE */

localStorage.setItem(
  "musicAllowed",
  "true"
);

 /* PRELOAD MUSIC */

  const bg =
  new Audio("music/birthday.mp3");

  bg.volume = 0;

  bg.play();

    message.innerHTML =
    "Welcome Birthday Girl 💛";

    confetti({

      particleCount:220,

      spread:120,

      origin:{ y:0.6 }
    });

    setTimeout(() => {

      window.location.href =
      "verification.html";

    }, 2400);
  }

  /* Wrong Password */

  else{

    message.innerHTML =
    "Suspicious human detected 👀";

    document.querySelector(".login-card")
    .style.animation =
    "shake 0.4s";

    setTimeout(() => {

      document.querySelector(".login-card")
      .style.animation = "";

    }, 500);
  }

});

localStorage.setItem("musicAllowed","true");