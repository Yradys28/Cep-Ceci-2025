const nav = document.querySelector(".nav");
const buttonClose = document.getElementById("button-close");
const buttonOpen = document.getElementById("button-open");

buttonOpen.addEventListener("click", ()=> {
    nav.classList.add("visible");
});

buttonClose.addEventListener("click", ()=> {
    nav.classList.remove("visible");
});