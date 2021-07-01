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
