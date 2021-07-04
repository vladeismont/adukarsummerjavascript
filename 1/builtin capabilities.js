//practice
//1 Напишите функцию, которая создаёт и возвращает массив длиной
// 20 элементов, каждый из которых – случайное число от 1 до 50.
function randomArray(){
    let ar=[];
    for(let i=0;i<20;++i){
        let rand=1+Math.random()*50;
        ar[i]=rand;
    }
    return ar;
}
console.log(randomArray());

//2 Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента: длину нужного массива,
// минимальное и максимальное
// значения элементов.
function randomArray1(len,min,max){
    let ar=[];
    for(let i=0;i<20;++i){
        let rand=min+Math.random()*(max-min)
        ar[i]=rand;
    }
    return ar;
}
console.log(randomArray1(10,0,1));

//3 Напишите функцию, которая проверяет, начинается ли строка на
// https:// и заканчивается ли она на .html. Если оба условия
// выполнены, функция возвращает true, в ином случае – false.
function tz3(str){
    if( str.startsWith("https://") && str.endsWith(".html"))
        return true;
    else
        return false;
}

//4Напишите функцию, которая считает, сколько раз определённый
// символ встречается в строке.
function tz4(str,ch){
    let f=0;
    for(let i=0;i<str.length-1;++i){
        if(str[i]==ch) f+=1;
    }
    return f;
}
console.log(tz4("gsajkomgfmoaskgm","a"));

//5 Перепишите функцию из задачи 4 так, чтобы она считала большие
// и маленькие буквы одним и тем же символом (например, 'A' == 'a').
function tz5(str,ch){
    let f=0;
    for(let i=0;i<str.length-1;++i){
        if(str[i].toUpperCase()==ch.toUpperCase()) f+=1;
    }
    return f;
}
console.log(tz5("gsajkomgfmoaskgm","a"));

//6 Напишите функцию, которая выводит в консоль текущие дату,
// месяц и год в формате «24 января 2019».
function tz6(){
    let arr=['Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'];
    let xDate=new Date();
    console.log(xDate.getDay()+" "+ arr[xDate.getMonth()-1]+" "+xDate.getFullYear());
    //return xDate.getDay()+" "+ xDate.getMonth()+" "+xDate.getFullYear();
}
tz6();

//7 Напишите функцию, которая выводит в консоль количество
// секунд, прошедших с начала текущего дня.
function tz7(xDate){
    let sec=0;
    sec=(xDate.getHours()+1)*60*60+(xDate.getMinutes()+1)*60+xDate.getSeconds();
    console.log(sec);
}
tz7(new Date());

//homew
//1 Напишите функцию, которая принимает три числа, и определяет, можно ли построить треугольник со сторонами, длина которых равна этим числам. Возвращать функция должна объект из двух свойств: possible (true или false) и angles (объект с тремя свойствами, равными углам полученного треугольника в градусах).
function tzhome1(a,b,c){
    if(a<b+c && b<a+c && c<a+b){
        let angleA,angleB,angleC;
        angleA=Math.acos(((b*b+c*c-a*a)/(2*b*c)))*180/Math.PI;
        angleB=Math.acos(((a*a+c*c-b*b)/(2*a*c)))*180/Math.PI;
        angleC=Math.acos(((b*b+a*a-c*c)/(2*a*b)))*180/Math.PI;
        return [Math.round(angleA), Math.round(angleB), Math.round(angleC)];
    }
    else return false;
}
console.log(tzhome1(3,4,5));

//2Напишите функцию, которая определяет, является ли строка палиндромом. Учитывайте, что пробелы и знаки препинания не влияют на «палиндромность» строки!
function tzhome2(str){
    str = str.toLowerCase();
    return str === str.split(/[/s]/).reverse().join('');
}
console.log(tzhome2("1я иду с ме;чем.!#@ судия1"));

//3 Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней чаще всего. Если таких символов несколько, функция должна возвращать строку из этих символов.
function maxRecurringChar(text) {
    let charMap = {};
    let charArray =[];
    let vaulesArray = [];
    let maxCharValue = 0;
    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    }
    charArray = Object.keys(charMap);
    vaulesArray = Object.values(charMap);
    maxCharValue = Math.max(...vaulesArray);
    return "\'"+charArray[vaulesArray.indexOf(maxCharValue)]+"\'";
}
console.log(maxRecurringChar("rrrcuijctu       a"));

//4 Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.
function upFirstLetter(text){
    return text.replace(/\b\w/g, c => c.toUpperCase());
}
console.log(upFirstLetter("asdgmp asdgkm asdgmf asdgko"));

//5 Напишите функцию, которая заменяет все повторяющиеся буквы в строке на звёздочки. Например, строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".
function replacetalts(str) {
    str = str.toLowerCase();
    let ar=Array.from(new Set(str)).join(' ');
    let nAr=[];
    for(let i=0;i<ar.length;++i){
        let f=0;
        for(let j=0;j<str.length;++j){
            if(ar[i]==str[j] && f==0){
                nAr[j]=str[j];
                f=1;
            }
            else if(ar[i]==str[j] && f>0){
                nAr[j]='*';
            }
        }
    }
    return nAr;

}
let ar=replacetalts("я учусь программированию");
let str='';
for(let i in ar){
    str+=ar[i];
}
console.log(str);

//6 Напишите функцию, которая возвращает текущий день недели на русском языке.
function tz6(xDate){
    let yDate=new Date(xDate);
    let days = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ];
    let d = yDate;
    let n = yDate.getDay();
    return days[n];
}

console.log(tz6(new Date));

//7 Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, используя функцию из задачи 6, выдаёт в консоль день недели для этой даты.
let nDate=new Date(2000,0,1,23,60) //prompt
console.log(tz6(nDate));

//8 Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, которая выводит в консоль количество дней, оставшихся до его дня рождения. Напишите другую функцию, которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, когда ему исполнится 12000 дней).
function birthdayIn(xDate){
    let birthday = new Date(xDate);
    let today = new Date();
    birthday.setFullYear(today.getFullYear());
    if (today > birthday) {
        birthday.setFullYear(today.getFullYear() + 1);
    }
    return Math.floor((birthday - today) / (1000*60*60*24));
}
nDate=new Date(2000,1,1);//prompt
console.log(birthdayIn(nDate));

function getLeftDays(xDate){
    let birthday = new Date(xDate);
    let today = new Date();
    let days=Math.floor((today-birthday) / (1000*60*60*24))
    return 1000-days%1000;
}
nDate=new Date(2000,1,1);//prompt
console.log("your another 1000's day in "+getLeftDays(nDate)+" day(s)");