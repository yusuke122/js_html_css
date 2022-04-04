const demo1function = () => {
    alert("demo1 function");
}

// windowオブジェクトのグローバル変数用キーに定義した関数を入れる
window.globalFunction = {};
window.globalFunction.demo1 = demo1function;