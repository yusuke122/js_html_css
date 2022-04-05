const music = new Audio("かえるのピアノ.mp3");

//sound
const soundVolumeElem = document.querySelector("#soundEditVolume"); //input elem
const currentVolumeElem = document.querySelector("#currentVolume"); //span elem


window.onload = () => {
        soundVolumeElem.addEventListener('input', soundRangeOnChange); // soundスライダー変化時にイベントを発火
        setCurrentValue(soundVolumeElem.value); // ページ読み込み時に値をセット
    }
    //sound
    // 現在の値をspanに埋め込む関数
const setCurrentValue = (val) => {
    currentVolumeElem.innerText = val;
    music.volume = val / 100; //default=50/100 =>0.5
}

// inputイベント時に値をセットする関数
const soundRangeOnChange = (e) => {
    setCurrentValue(e.target.value);
}

function soundCheckOn() {
    music.play();
}

function soundCheckOff() {
    music.pause();
}