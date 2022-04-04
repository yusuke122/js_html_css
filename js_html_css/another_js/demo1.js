const demo1function = () => {
    alert("demo1 function");
}

var vartime = 100;
let lettime = 1000;
const consttime = 10000;

// windowオブジェクトのグローバル変数用キーに定義した関数を入れる
window.globalFunction = {};
window.globalFunction.demo1 = demo1function;
window.globalElem = {};
window.globalElem.varElem = vartime;
window.globalElem.letElem = lettime;
window.globalElem.constElem = consttime;