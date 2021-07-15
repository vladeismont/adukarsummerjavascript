//Сделайте так, чтобы по нажатию на кнопку выводился
// alert
let btn=document.querySelector('#btn1');
btn.addEventListener('click',function (){
    alert("button1 pressed");
});

//Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст
// изменялся на button.
btn.addEventListener('click',function(){
    btn.innerHTML="text";
})

//Создайте форму с полем для ввода и двумя кнопками «enable» и «disable». Сделайте так, чтобы по
// нажатию на кнопку «disable» поле становилось неактивным, на «enable»
// — активным.
let en=document.querySelector('#enale');
let dis=document.querySelector('#disale');
en.addEventListener('click',function(){
    let tmp=document.querySelector('input__txt');
    tmp.attributes.disabled=false;
    //document.getElementById("input__txt").disabled = false;
});

dis.addEventListener('click',function(){
    document.getElementById("input__txt").disabled = true;
});

//Создайте объект произвольной формы и цвета. Сделайте так, чтобы объект можно
// было двигать, а его координаты на странице выводились в HTML-элементе output.
let blck=document.querySelector('#blck');
let fn1=function(evt){
    blck.style.top=(evt.clientY-blck.clientHeight/2)+'px';
    blck.style.left=(evt.clientX-blck.clientWidth/2)+'px';
    blck.innerHTML=(evt.clientX-blck.clientWidth/2)+'X '+(evt.clientY-blck.clientHeight/2)+'Y';
};
let fn=function(){
    blck.addEventListener('mousemove',fn1)
}
blck.addEventListener('mousedown',fn);
blck.addEventListener('mouseup',function(evt){
    blck.removeEventListener('mousemove',fn1);
});

//Создайте поле ввода, сделайте с помощью JS так, чтобы в него можно было вводить
// только числовые значения.
let tmp=document.querySelector('#input__txt');
let fn2=function(){
    tmp.value = tmp.value.replace(/[^\d.]/g, '');
}
tmp.addEventListener('keyup',fn2)

//Создайте блок div, в качестве изображения фона установите ему изображение закрытой папки. Добавьте
// событие, которое выполняется при двойном клике на блоке
// и заменяет фон блока на изображение открытой папки.
blck.addEventListener('dblclick',function(){
    blck.style.background='yellow';
})