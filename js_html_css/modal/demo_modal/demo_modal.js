let firstCountTimer,gameTimer,quizTimer,resultTimer,gameElaspedTimer,quizElaspedTimer;
const aroundgametime=100000;
let gameElaspedTime=aroundgametime-1000;
const modal= document.querySelector(".modal-pauseoverlay");

window.onload = function() {


　  // jQueryで円を動かす時間についてCSSを付与

  document.getElementById('ElapsedTimeInCircle').innerText=String(aroundgametime/1000);
  timeElaspedCircle();
};


function timeElaspedCircle()
{
  gameElaspedTimer=setInterval(ElaspedTime,1000);
}

//ゲームの残り時間の計測
function ElaspedTime()
{
document.getElementById('ElapsedTimeInCircle').innerText=String(gameElaspedTime/1000);
gameElaspedTime=gameElaspedTime-1000;
if(gameLElaspedTime<0)
{
  clearInterval(gameElaspedTimer);
}
　
}

function pause()
{

}

function openmodal()
{
  modal.classList.add(".open-modal");
}

function closemodal()
{
  modal.classList.remove(".open-modal");
}
