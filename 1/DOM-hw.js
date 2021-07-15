//homework
//1 Дан элемент #elem. Добавьте ему класс "www".
var tmp= document.getElementById('elem');
tmp.className="www";

console.log(tmp);

//2 Дан элемент #elem. Проверьте наличие у него класса "www", если есть — удалите этот класс.
if(tmp.className=="www"){
    tmp.classList.remove("www");
    console.log("\'www\' class deleted");
}
else{ console.log("no www class here");}

//3 Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. Сделайте так, чтобы четные позиции имели красный фон.
let ar=["one","two","three","four"];
function insertElems(ar){
    let parent=document.body;
    let ul=document.createElement("ul");
    for(let i=0;i<ar.length;++i){
        let li=document.createElement('li');
        let textNod=document.createTextNode(ar[i]);
        if(i%2==1){
            li.style.background="red";
        }
        li.appendChild(textNod);
        ul.appendChild(li);
        parent.appendChild(ul);
    }
}
insertElems(ar);

//4 Дан элемент #elem. Найдите его соседа сверху и добавьте ему в начало и в конец по восклицательному знаку '!'
let elem=document.querySelectorAll("li")[3].previousSibling;
tmp=document.createTextNode(" ! ");
//elem.prepend(tmp);
//elem=document.querySelectorAll("li")[3].previousSibling;
elem.appendChild(tmp);
elem.appendChild(tmp); // 2))
console.log(elem);




//5 Реализуйте функцию wrapInParagraph, которая находит каждый из дочерних текстовых узлов внутри элемента div и оборачивает их в элемент p.
let div=document.getElementsByTagName('div');
function wrapInParagraph(){
    for(let i=0;i<div.length;++i){
        if(div[i].innerHTML!=""){
            div[i].innerHTML="<p>"+"~~~~~~"+div[i].innerHTML+"</p>";
        }
    }
}
wrapInParagraph();