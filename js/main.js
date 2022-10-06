const imgs = Array.from(document.querySelectorAll("img"));
const box = document.querySelector(".box");
const model = document.querySelector(".model");
const nextBtn = document.getElementById("next");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
let title = document.querySelector(".title-model");
let text = document.querySelector(".text-model") ;
let curentIndex = 0;

//  -----------------------------------------Events

for (let i = 0; i < imgs.length; i++) {
   imgs[i].addEventListener("click", (e) => {
      curentIndex = i;
      open(e.target);
   });
}

// ------------------Close
closeBtn.onclick = close;

document.addEventListener("click", (e) => {
   if (e.target === model) {
      close();
   }
});

// ------------------next
nextBtn.addEventListener("click", next);

// ------------------prev
prevBtn.addEventListener("click", prev);

// ----------------------------------------------- functions
// ------------------open
function open(event) {
   model.classList.remove("d-none");
   model.classList.add("animate__animated", "animate__bounceIn");
   model.classList.remove("animate__bounceOut");
   box.style.backgroundImage = `url(${event.getAttribute("src")})`;

   const titleModel = imgs[curentIndex].nextElementSibling.children[0].innerText;
   const textModel = imgs[curentIndex].nextElementSibling.children[1].innerText;
   
   title.innerText = titleModel;
  text.innerText = textModel;
   

}

// ------------------close
function close() {
   model.classList.replace("animate__bounceIn", "animate__bounceOut");
   model.addEventListener(
      "animationend",
      () => {
         model.classList.add("d-none");
      },
      { once: true }
   );
}

// ------------------ next
function next() {
   curentIndex++;
   if (curentIndex == imgs.length) {
      curentIndex = 0;
   }

   const curentSrc = imgs[curentIndex].getAttribute("src");
   box.style.backgroundImage = `url(${curentSrc})`;

   box.classList.add("animate__animated", "animate__bounceInRight");

   box.addEventListener(
      "animationend",
      () => {
         box.classList.remove("animate__bounceInRight");
      },
      { once: true }
   );


   const titleModel = imgs[curentIndex].nextElementSibling.children[0].innerText;
   const textModel = imgs[curentIndex].nextElementSibling.children[1].innerText;
   
   title.innerText = titleModel;
  text.innerText = textModel;
}

// ------------------ prev
function prev() {
   curentIndex--;
   if (curentIndex < 0) {
      curentIndex = imgs.length - 1;
   }
   const curentSrc = imgs[curentIndex].getAttribute("src");
   box.style.backgroundImage = `url(${curentSrc})`;

   box.classList.add("animate__animated", "animate__bounceInLeft");

   box.addEventListener(
      "animationend",
      () => {
         box.classList.remove("animate__bounceInLeft");
      },
      { once: true }
   );

   const titleModel = imgs[curentIndex].nextElementSibling.children[0].innerText;
   const textModel = imgs[curentIndex].nextElementSibling.children[1].innerText;
   
   title.innerText = titleModel;
  text.innerText = textModel;
}

// ------------------ KeyDown
document.addEventListener("keydown", (e) => {
   if (e.key == "ArrowRight") {
      next();
   } else if (e.key == "ArrowLeft") {
      prev();
   } else if (e.key == "Escape") {
      close();
   }
});
