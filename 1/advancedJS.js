//practice
//1 Напишите функцию counterFactory(start, step), которая при вызове возвращает другую функцию –
// счётчик tictoc(). start – стартовое значение счётчика, step – его шаг. При каждом вызове tictoc
// увеличивает значение счётчика на step.
function counterFactory(start){
    var count=start;
    function tictoc(step){
        count+=step;
        return count;
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

//homework
//1 Напишите функцию, которая принимает в качестве параметра строку из одного символа. Подсчитайте количество таких символов во всех элементах массива, как в задаче 3 из практики. При подсчёте прописные и строчные буквы считайте одинаковыми.
function tz01(ar){
    let num=0;
    function tz011(char){
        for(let i in ar){
            // tz01 homework
            /*if((ar[i].match(new RegExp(char, "g")) || []).length) {
                num++;
            }*/

            //tz02 homework
            let str=ar[i].toLowerCase();
            for(let j=0;j<str.length;++j){
                if((str[j].match(new RegExp(char.toLowerCase(), "g")) || []).length){
                    num++;
                }
            }
        }
        return num;
    }
    return tz011;
}
let tmp1=tz01(ar);
let tmp1S=tmp1('с');
console.log(tmp1S,tmp1('а'));

//2 Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, фиксируя искомый символ. Например:
// let countOfE = letterCounter('e');
// console.log(countOfD(["abcde", "eerie", "MBE"])); // 5

//see tz01() - #77 string
console.log(tz01(["abcde", "eerie", "MBE"])('e')); // 5


//3 Отфильтруйте массив городов так, чтобы в нём остались только города из штата Техас, которые с 2000 по 2013 выросли в населении.

import { hellodata } from './module.js';
let val = hellodata();
//console.log(val);
let someVar=val.filter(item=> (item.state=="Texas" && item.growth_from_2000_to_2013.split('%').join('')[0]>0));
console.log(someVar);

//4 Подсчитайте, сколько миллионов населения живёт во всех городах на долготе от -110 до -120 градусов.
let population=val.reduce(function(res,item){
    if(item.longitude>=(-120) && item.longitude<=(-110)){
        let tmp=Number(item.population);
        res+=tmp;
    }
    return res;
},0);
console.log(population);

//5 Создайте массив только из тех городов, которые начинаются на букву S, при этом отсортируйте элементы этого массива по названию штата.
someVar=val.filter(function(item){
    if(item.city.split("")[0]=='S') return true;
})
function compareCitySort(a,b){
    if(a.state>b.state) return 1;
    if (a.state == b.state) return 0;
    if (a.state < b.state) return -1;
}
someVar=someVar.sort(compareCitySort);
console.log(someVar);

//6 Преобразуйте представленный массив "Города" в объект "Штаты":
// для каждого штата – отдельное свойство объекта (ключ = название штата);
// значение каждого свойства – массив городов;
// каждый элемент массива – название города, население и место в общем рейтинге (rank).
function newAr(ar,property){
    return ar.reduce(function (res,obj){
            let state=obj[property];
            if(!res[state]){
                res[state]=[];
            }
            let city= {};
            city.city=obj.city;
            city.rank=obj.rank;
            city.population=obj.population;
            res[state].push(city);
            return res;
        },{})
}
console.log(newAr(val,"state"));

let str1='Разбейте текст этой задачи на отдельные слова, удаляя по пути точки и запятые, а полученные слова\n' +
    '// сложите в массив.\n' +
    '// Напишите функцию, которая возвращает массив из тех же слов, но развёрнутых задом наперёд, причём\n' +
    '// массив должен быть отсортирован по количеству букв в слове. Напишите другую функцию, которая\n' +
    '// считает общее количество букв «с» во всех\n' +
    '// элементах массива.';
console.log((str1.match(new RegExp('а', "g")) || []).length);
function findBigSmall(InStr=''){
    function findDifferent(InStrDif = '') {
        let counts = 0;
        for (let index in InStrDif){
            if (InStr[index] != InStrDif[index])
            { counts++;}
        }
        return counts;
    }
    console.log("Big = " + findDifferent(InStr.toUpperCase()));
    console.log("Small = " + findDifferent(InStr.toLowerCase()));

}
findBigSmall("asdkogmASKFO")
console.log((str1.match(new RegExp(/([а-я]+)/, "g")) || []).length);
console.log((str1.match(new RegExp(/[А-Я]+/, "g")) || []).length);
function getAr(ar,a=undefined,b=undefined){
    let ar1=[];
    return ar.reduce(function (res,elem){
        if(a && b){
            if((Number(elem)>b && b) || (Number(elem)<a && a)){
                ar1.push(elem);
            }
        }
        else if(!b){
            if((Number(elem)<a && a)){
                ar1.push(elem);
            }
        }
        return ar1;
    },[])
}
console.log(getAr(['1','3'],2))