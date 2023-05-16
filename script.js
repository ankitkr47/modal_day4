const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const modal_content = document.querySelector(".modal-content");

const popup = (e) => {
    e.preventDefault();
    modal.style.display = "block";
};
const closepopup = () => {
    //   e.preventDefault();
    modal_content.classList.add("slide-up");
    setTimeout(() => {
        modal.style.display = "none";
        modal_content.classList.remove("slide-up");
    }, 500);
};

btn.addEventListener("click", popup);
modal.addEventListener("click", closepopup);
close.addEventListener("click", closepopup);
