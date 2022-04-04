let firstCountTimer,gameTimer,quizTimer,resultTimer,gameLaspTimer,quizLaspTimer;
const aroundgametime=10000;
let gameLaspTime=aroundgametime-1000;


const modalBtn = document.querySelector(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const truemodal = document.querySelector(".modal-trueoverlay");
const clockmodal = document.querySelector(".modal-clockoverlay");
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

function openclock()
{
  clockmodal.classList.add("open-modal");
  document.getElementById('timeElapsedCircle').innerText=String(aroundgametime/1000);
  timeElaspedCircle();
}

function timeElaspedCircle()
{
  gameLaspTimer=setInterval(laspTime,1000);
}

//ゲームの残り時間の計測
function laspTime()
{
document.getElementById('timeElapsedCircle').innerText=String(gameLaspTime/1000);
gameLaspTime=gameLaspTime-1000;
if(gameLaspTime<0)
{
  clearInterval(gameLaspTimer);
}
　
}
