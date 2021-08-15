function onMousemove(event) {
    var bounds = event.target.getBoundingClientRect();
    var x = (event.clientX - bounds.left).toFixed();
    var y = (event.clientY - bounds.top).toFixed();
    txt.innerHTML="X: "+ x+" , Y:"+y;
}
var txt=document.getElementById("txt");
var elem = document.getElementById("dv");
elem.addEventListener("mousemove", onMousemove, false);
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}