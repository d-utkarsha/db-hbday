/* MUSIC */

const music =
document.getElementById("memoryMusic");

music.volume = 0.4;

window.addEventListener("load",()=>{

  music.play();
});

/* TORCH */

const torch =
document.querySelector(".torch");

document.addEventListener("mousemove",(e)=>{

  torch.style.left =
  e.clientX + "px";

  torch.style.top =
  e.clientY + "px";
});

/* POPUP */

const memories =
document.querySelectorAll(".memory");

const popup =
document.getElementById("popup");

const popupImg =
document.getElementById("popupImg");

const popupText =
document.getElementById("popupText");

memories.forEach(memory=>{

  memory.addEventListener("click",()=>{

    popup.style.display =
    "flex";

    popupImg.src =
    memory.dataset.img;

    popupText.innerHTML =
    memory.dataset.msg;
  });
});

/* CLOSE */

const closeBtn =
document.getElementById("closeBtn");

closeBtn.addEventListener("click",()=>{

  popup.style.display =
  "none";
});

/* NEXT */

const nextBtn =
document.getElementById("nextBtn");

nextBtn.addEventListener("click",()=>{

  document.body.style.transition =
  "1s ease";

  document.body.style.opacity =
  "0";

document.body.classList.add(
"memory-exit"
);

setTimeout(()=>{

 window.location.href="gift.html";

},2500);

});