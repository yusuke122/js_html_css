// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const truemodal = document.querySelector(".modal-trueoverlay");
const closeBtn = document.querySelector(".close-btn");

window.onload = function () {
  //truemodal.classList.add("open-modal");
};

/*
modalBtn.addEventListener("click", function () {
  modal.classList.add("open-modal");
});
/*
closeBtn.addEventListener("click", function () {
  modal.classList.remove("open-modal");
});
*/
function closeModal()
{
  modal.classList.remove("open-modal");
}

function closeTrueModal()
{
  truemodal.classList.remove("open-modal");
}

function opentrue()
{
  truemodal.classList.add("open-modal");
}
