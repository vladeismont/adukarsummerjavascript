//1 Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте инпут.
let input=document.createElement('input');
let button=document.createElement('button');
button.innerHTML="button";
document.body.appendChild(input);
document.body.appendChild(button);
button.addEventListener("click",function(){
    let inp=document.createElement("input");
    document.body.insertBefore(inp,button);
})

//2 Добавьте на страницу таблицу в стандартном оформлении. Создайте три класса для этой таблицы: bordered (с границами вокруг всех ячеек), striped (разные цвета для чётных и нечётных строк), highlight (оформление стандартное, но при наведении на ячейку текст в ней меняет цвет). При первом клике на таблице добавьте ей класс bordered, при втором клике удалите класс bordered и добавьте класс striped, при третьем клике удалите класс striped и добавьте класс highlight. Четвёртый и последующие клики запускают «карусель классов» по второму кругу.
var num=0;
tbl.addEventListener("click",function(){
    if(num>2) {
        num=0;
        tbl.classList.remove("highlight");
    }
    if(num==0){
        tbl.classList.add("bordered");
    }
    if(num==1){
        tbl.classList.remove("bordered");
        tbl.classList.add("striped");
        //можно ли используя дж-с добавлять свойства к .stripped_tr1:nth-child(odd)???
    }
    if(num==2){
        tbl.classList.remove("striped");
        tbl.classList.add("highlight");
    }
    ++num;
});

//3 Модифицируйте задачу 2. Добавьте три radiobutton. При выборе первой включайте класс bordered, при выборе второй — striped, при выборе третьей — highlight. При включении каждого класса выключайте остальные два.

/*let tmp=document.querySelectorAll('input');
for(let i=0;i<tmp.length;++i){
    tmp[0].addEventListener("change",function(){
        tbl.classList.add(tmp[i].id);
    })
}*/
function handleClick(myRadio) {
    tbl.removeAttribute("class");
    tbl.classList.add(myRadio.id);
}

//4 Создайте пять элементов разных типов (например, div, p, button, a, span). Используя приём делегирования, по клику на элемент выводите информацию о его типе.
let delegate=document.querySelector("#d1");
delegate.addEventListener("click",function (evt){
    console.log(evt.target);
})

//5 Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку изображение заменяется другим, при выходе мыши за пределы изображения восстанавливается первоначальное изображение.
input.addEventListener('mouseover',function(){
    input.style.background="rebeccapurple";
    document.body.style.backgroundImage="url('https://files.oyebesmartest.com/uploads/preview/smoke-png---smog-transparent-background-hd-reddish-(3)whafnxrjaj.png')";
});
input.addEventListener('mouseout',function(){
    input.style.background="white";
    document.body.style.backgroundImage="";
});