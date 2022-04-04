document.getElementById("button").addEventListener('click', () => { window.globalFunction.demo1() });
document.getElementById("elembutton").addEventListener('click', () => {
    alert(window.globalElem.varElem);
    alert(window.globalElem.letElem);
    alert(window.globalElem.constElem);
});