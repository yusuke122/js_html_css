let firstCountTimer,gameTimer,quizTimer,resultTimer,gameLaspTimer,quizLaspTimer;
const aroundgametime=10000;
let gameLaspTime=aroundgametime-1000;

window.onload = function() {


　  // jQueryで円を動かす時間についてCSSを付与

  document.getElementById('timeElapsedCircle').innerText=String(aroundgametime/1000);
  timeElaspedCircle();
};


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