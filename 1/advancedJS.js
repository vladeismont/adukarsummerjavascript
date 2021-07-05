//practice
//1 Напишите функцию counterFactory(start, step), которая при вызове возвращает другую функцию –
// счётчик tictoc(). start – стартовое значение счётчика, step – его шаг. При каждом вызове tictoc
// увеличивает значение счётчика на step.
function counterFactory(start){
    function tictoc(step){
        return start+step;
    }
    return tictoc;
}
let tz1=counterFactory(2);
let tz2=counterFactory(10);
console.log(tz1(1),tz2(5),tz1(2));

//2 Напишите функцию take(tictoc, x), которая вызывает функцию tictoc заданное число (x) раз и
// возвращает массив с результатами
// вызовов.
//console.log(take(tictoc(),10)); ???
function take(fn,x){
    let ar=[], ar1=[];
    for(let i=0;i<x;++i)
        ar1[i]=fn;
        //ar[i]=counterFactory(2)(2);
    return ar1;
}
console.log(take(counterFactory(2)(2),10));

//3
//Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова
// сложите в массив.
// Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём
// массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая
// считает общее количество букв «с» во всех
// элементах массива.
let str="Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова сложите в массив. Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая считает общее количество букв «с» во всех элементах массива.";
let tmp=str.replace(/[ .,!?\/#!$%\'\^&\*;:{}=\-_`~()«»]/g," ");
let ar=[];
ar=tmp.split(" ")
console.log(ar);
function reverseString(str) {
    return str.split("").reverse().join("");
}
function getResStr(ar){
    let tmp=[];
    for(let i=0;i<ar.length;++i){
        if(ar[i]){
            let s='';
            s=ar[i];
            s=reverseString(s);
            tmp.push(s);
        }
    }
    return tmp;
}
ar=getResStr(ar)
function compareStrSort(a,b){
    if(a.length>b.length) return 1;
    if (a.length == b.length) return 0;
    if (a.length < b.length) return -1;
}
ar=ar.sort(compareStrSort)
console.log(ar);
function getCharCNum(ar,char){
    let num=0;
    for(let i in ar){
        if((ar[i].match(new RegExp(char, "g")) || []).length) {
            num++;
            console.log(ar[i]+" = "+(ar[i].match(new RegExp(char, "g")) || []).length+" char \'" + char+ "\'");
        }
    }
    return num;
}
console.log(getCharCNum(ar,'с'));










/*let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // что будет показано: "John" или "Pete"?



function makeWorker() {
    let name = "Pete";

    return function() {
        console.log(name);
    };
}

name = "John";

// create a function
let work = makeWorker();

// call it
work(); // что будет показано? "Pete" (из места создания) или "John" (из места выполнения)
*/