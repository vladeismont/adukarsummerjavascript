//practice
//1 Создайте селект с несколькими опциями. Добавьте одну опцию, используя
// ipt. Сделайте так, чтобы по выбору опции выводилось сообщение с данными этой опции (текст +
//      е).
/*let newOpt=new Option("option3",'option2');
slt.appendChild(newOpt);
slt.onchange=function(){
    console.log(slt.options[slt.selectedIndex].value);
}
*/

//2 Создайте форму вычисления процентов по вкладу:
let show=document.getElementById("show");
show.onclick=function (){
    let sum=document.getElementById("sum").value;
    let sumBefore=document.getElementById("sumBefore");
    let before=sum;
    sumBefore.innerHTML="до "+before;
    let sumAfter=document.getElementById("sumAfter");
    sumAfter.innerHTML="после "+parseInt(sum * 1.12);
}

//1 Создайте регулярное выражение для поиска трёх точек.
let reg=new RegExp("[\.]{3}","g");
let str="ag.aerhysaerh.aegraerg. ..."; // last ...
console.log(str.match(reg));

//2 Создайте regexp, который ищет все положительные числа, в том числе десятичные.
reg = /\b(?<!-)\d+\.*\d*\b/g;
str = "0 12 -5.1 123.1 -18";
console.log( str.match(reg) );

//3 Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd
let clrs = "#eee, #eeeddd";
console.log(clrs.match( /#([a-f0-9]{3}){1,2}/gi));

//4 Предложите строку, которая подойдет под выражение ^$
reg=/^\d+[e]*$/g;
str="018925934e";
console.log(str.match(reg))