const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

const popup = (e) => {
    e.preventDefault()
    modal.style.display = "block";
}
const closepopup = (e) => {
//   e.preventDefault();
  modal.style.display = "none";
};

btn.addEventListener("click" , popup);
modal.addEventListener("click", closepopup);
close.addEventListener("click", closepopup);


