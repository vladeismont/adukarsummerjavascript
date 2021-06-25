//practice
//1
let obj={a:1, b:2, c:3}
console.log(obj.c)
console.log(obj["c"])
for(let prop in obj){
    console.log(prop+": "+obj[prop]);
}

//2
let city={name:"New York", population:99999999}

//3
let blrCities=[{name:"Minsk", population:1},
    {name:"Mogilev", population:2},
    {name:"Vitebsk", population:3},
    {name:"Grodno", population:4},
    {name:"Gomel", population:5},
    {name:"Brest", population:6}
]

//4 display city info, function
function cityWelcome(arr){
    for(let obj of arr){
        console.log(obj.name+": "+obj.population);
    }
}
cityWelcome(blrCities);

//5Создайте в объектах с городами из задачи 3 метод getInfo,
// который возвращает строку с информацией о городе (например, в таком формате: "Город Добруш,
// население – 18760
// человек").

blrCities.getInfo=function(i){
    console.log(this[i].name+": "+this[i].population);
}
function cityInfo(num){
    blrCities.getInfo(num-1);
}
cityInfo(1);

//6.Создайте объект с информацией о себе (имя, фамилия, любимое занятие). Добавьте в него метод,
// который выводит
// эту информацию в консоль в удобочитаемом формате.
let person={name:"aname",surname:"asurname",hobby:"programming"};
person.getInfo=function(){
    console.log(this.name+" "+this.surname+" likes "+this.hobby);
}
person.getInfo();

//homework
//1 Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).
let cilindr={r:5,h:2};
let pi=Math.atan(1)*4;
cilindr.V=function (){
    let res=pi*this.r*this.r*this.h;
    return res;
}
console.log(cilindr.V());

//2 Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, создатель и источник). Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие и представление вашего пингвина, и fly, который в зависимости от значения свойства canFly (true или false) определяет, может ли пингвин летать, и сообщает об этом в консоль.
let penguin={
    name:"Sam Sawnoff",
    origin:"The Magic Pudding",
    author:"Norman Lindsay",
    canFly:false
};
penguin.sayHello=function(){
    console.log("i'm "+this.name);
}
penguin.fly=function(){
    if(this.canFly==true){
        console.log("i can fly");
    }
    else{
        console.log("i can't fly");
    }
}
penguin.sayHello();
penguin.fly();

//3 Создайте несколько (3-4) объектов одинаковой структуры, которые описывают ваши любимые книги (автор, название, год издания + любые другие свойства на ваше усмотрение). Добавьте в каждый из них метод для вывода в консоль краткой информации о книге (например, в формате Автор — Название).
let books=[
    {author:"author0",name:"name0",year:1990},
    {author:"author1",name:"name1",year:1991},
    {author:"author2",name:"name2",year:1992},
    {author:"author3",name:"name3",year:1993}
];
books.getInfo=function(x){
    console.log(this[x-1].author+": "+this[x-1].name);
}
books.getInfo(1);

//4 Создайте функцию, которая получает в качестве аргументов два объекта с книгами (из задачи 3) и возвращает ту книгу, которая издана раньше.
function firstBook(obj1,obj2){
    if(obj1.year>obj2.year){
        return obj2.name;
    }
    else{
        return obj1.name;
    }
}
console.log(firstBook(books[2],books[0]));