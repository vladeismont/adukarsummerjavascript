/*let btn=document.getElementById('btn1');
btn.addEventListener("click",function(){
    btn.classList.add("btn");
});
btn2=document.getElementById("btn2");
let num=0;
let fn1=function(){
    num=1;
    btn2.classList.remove("btn");
    //btn2.removeEventListener("mousedown",fn);
};
let fn=function(){
    num=2;
    btn2.classList.add("btn");
    //btn2.removeEventListener("mouseup",fn1);
}
btn2.addEventListener("mousedown",fn);
btn2.addEventListener("mouseup",fn1);
*/
let clrs = "#eee, #123456, #12345678, rgb(23,255,70), rgba(23,255,70, .2)";
console.log(clrs.match( /(#([a-f0-9]{3}\b){1,2})|(#\d{6}\b)|(#\d{8}\b)|(rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\))|(rgba\(\d{1,3}\,\d{1,3}\,\d{1,3}\,\s*\d?\.\d{0,1}\))/gi));
//4
//console.log(clrs.match( /(rgb\(\d{1,3}\,\d{1,3}\,\d{1,3}\))/gi));
//5
//console.log(clrs.match( /(rgba\(\d{1,3}\,\d{1,3}\,\d{1,3}\,\s*\d?\.\d{0,1}\))/gi));