var firstcount=3;
const aroundgametime=10000;
const answertime=10000;
let gameLaspTime=aroundgametime-1000;
let quizLaspTime=0;
var laspTimeArray;
const byResultAnnounce=3000;
let firstCountTimer,gameTimer,quizTimer,resultTimer,gameLaspTimer,quizLaspTimer;
var question=' ';
var incorrectStr='\n';
var tm;
const CLASSNAME = "-visible";
const resultView = 2000;
const $target = $(".bg");
let quizOutputCount=0;
let answerCorrectCount=0;
let answerIncorrectCount=0;
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const firstmodal = document.querySelector(".modal-firstoverlay");
const countdownmodal = document.querySelector(".modal-countdownoverlay");
const settingsmodal = document.querySelector(".modal-settingsoverlay");


window.onload = function() {
  //ウィンドウ表示時にスタート画面のモーダルを表示
  firstmodal.classList.add("open-modal");
  laspTimeArray=new Array();
  //document.getElementById("").innerHTML;
};

function firstCountDownModal()
{
  firstmodal.classList.remove("open-modal");
  countdownmodal.classList.add("open-modal");
  firstCountTimer=setInterval(firstCountDown,1000);
}

function firstCountDown()
{
document.getElementById('sec').innerText=String(firstcount);
 firstcount--;
if(firstcount<0){
clearInterval(firstCountTimer);
countdownmodal.classList.remove("open-modal");
pauseModal();
}
}