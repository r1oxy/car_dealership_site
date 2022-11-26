var contt001 = document.getElementById("contt001");
var contt002 = document.getElementById("contt002");
var contt003 = document.getElementById("contt003");
var btnb1 = document.getElementById("btnb1");
btnb1.onclick = function() {
    contt001.style.cssText = "display: block";
    contt002.style.cssText = "display: block";
    btnb1.style.cssText = "display: none";
}

var navbarNavDropdown = document.getElementById("navbarNavDropdown");
var nav11 = document.getElementById("nav11");

nav11.onclick = function() {
    navbarNavDropdown.style.cssText = "display: block;"
}
var black = document.getElementById("black");
var white = document.getElementById("white");

black.onclick = function() {
    black.style.cssText = "width: 70px; height: 70px;";
    white.style.cssText = "width: 60px; height: 60px;";
}

white.onclick = function() {
    white.style.cssText = "width: 70px; height: 70px;";
    black.style.cssText = "width: 60px; height: 60px;";
}
var btn0c1 = document.getElementById("btn-primary1");
var desc11001 = document.getElementById("desc11001");

btn0c1.onclick = function() {
    desc11001.style.cssText = "display: none;";
    btn0c1.style.cssText = "display: none;";
}
btn0c1.onclick = function() {
    btn0c1.style.cssText = "display: none;";
}
var btnpr = document.getElementById("btnpr");
var msg111 = document.getElementById("msg111");
var desc11001 = document.getElementById("desc11001");

btnpr.onclick = function() {
    msg111.style.cssText = "display: block;";
    btnpr.style.cssText = "display: none;";
    desc11001.style.cssText = "display: none;";
}