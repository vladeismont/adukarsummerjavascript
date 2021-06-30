//practice
//Создайте функцию, которая принимает три числа: два
// первых должны быть длиной сторон катетов прямоугольного треугольника, а третье – длиной гипотенузы.
// Функция возвращает true, если такой
// прямоугольный треугольник возможен, и false, если нет.
function triangleExist(x,y,z){
    if((x*x+y*y)==(z*z)){
        return true;
    }
    else return false;
}
console.log(triangleExist(3,4,5));

//2Создайте функцию, которая принимает два числа, и определяет, делится ли одно из них на другое без
// остатка.
// Из функции верните true или false.
function def(x,y){
    if(x>=y){
        if(x%y==0){
            return true;
        }
        else return false;
    }
    else
        if(y%x==0){
            return true;
        }
        else return false;
}
console.log(def(5,5));
//3
function ball(ball){
    switch (ball){
        case 1: return "F";
            break;
        case 2: return "F";
            break;
        case 3: return "C";
            break;
        case 4: return "C+";
            break;
        case 5: return "B-";
            break;
        case 6: return "B";
            break;
        case 7: return "B+";
            break;
        case 8: return "A-";
            break;
        case 9: return "A";
            break;
        case 10: return "A+";
            break;
        default: return "input error";
    }
}
console.log(ball(8));

//4Создайте функцию, которая принимает в качестве аргумента целое число, соответствующее порядковому
// номеру месяца. Если месяц с таким номером существует, функция возвращает имя сезона (лето, осень,
// зима, весна), к которому относится
// месяц. Если нет – сообщение об ошибке.
function getSeason(num){
    switch (num){
        case 3:
        case 4:
        case 5:
            return "spring";
            break;
        case 6:
        case 7:
        case 8:
            return "summer";
            break;
        case 9:
        case 10:
        case 11:
            return "autumn";
            break;
        case 12:
        case 1:
        case 2:
            return "winter";
            break;
        default: return "input error";
    }
}
console.log(getSeason(2));

//5Используя цикл do..while, создайте функцию, которая принимает
// числа через prompt(), пока не будет введено число 0.
function getNum(){
    let x;
    do{
        x=parseInt(prompt("enter a value"));
        console.log(x);
    }while(x!=0)
}
/*getNum();*/
//6 Перепишите функцию из задачи 5 так, чтобы она принимала числа, пока их сумма остаётся меньше 100,
// выводила эту сумму в
// консоль, а возвращала количество введённых чисел.
function getNum2(){
    let sum=0;
    let x;
    do{
        x=parseInt(prompt("enter a value"))
        sum+=x;
        console.log(x,sum);
    }while(sum<100)
}
/*getNum2();*/

//7 Создайте функцию, которая выводит в консоль числа от 10 до 99, заканчивающиеся на 7 или делящиеся
// на 7 (в убывающем
// порядке).
function getNumbers(){
    let lastDigit;
    let str;
    for(let i=99; i>9;--i){
        if(i%7==0 ){console.log(i); continue}
        str=i.toString();
        lastDigit=str.charAt(str.length-1);
        if(lastDigit==7) console.log(i)
    }
}
getNumbers();

//8 Создайте функцию, которая принимает два аргумента –
// количество учеников в классе и количество парт в кабинете. Функция возвращает строку вида «не
// хватает парт: 2» / «лишних
// парт: 1». Важно: за одной партой может сидеть два ученика!
function getKlass(students,tables){
        let res=students-tables*2;
        if(res==1)return"we need one chair for one more student";
        if(res==0)return"all things are good";
        if(res>1)return"there is no " +Math.ceil(res/2)+" table(s) for "+res+" student(s)";
        if(res<0)return"there is "+(-res)+" more places for students";
}
console.log(getKlass(13,8));

//9Создайте функцию words(),  которая в зависимости от
// переданного в нее целого числа n, будет выводить слово
// «карандаш» с правильным окончанием («12 карандашей», но «22
// карандаша»).
function words(n){
    let str=n.toString();
    console.log(str.length);
    if(str.length==1){
        switch (str){
            case "1": return str+" карандаш";
            case "2":
            case "3":
            case "4": return str+" карандаша";
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
            case "0":return str+" карандашей";
            default: return "сам егог!";
        }
    }
    //to do
}
console.log(words(9));

//10Создайте функцию, которая получает два числа и возвращает знак их произведения. Если результат
// равен нулю, возвращать
// ‘+’.
//wtf??? znak proizvedeni9
function znak(a,b){
    if(a*b>=0)console.log("+");
    else console.log("-");
}
znak(5,-1);
//11 Создайте функцию, которая получает число и выводит в консоль
// все его делители.
function showDividers(num){
    for(let i=1;i<(num/2+1);i++){
        if(num%i==0){
            console.log(i);
        }
    }
}
showDividers(225)

//12 Создайте функцию, которая проверяет, можно ли представить
// число в виде суммы квадратов двух целых однозначных чисел.
function checkNum(num){
    let temp=num/2;
    if(isInteger(temp)){
        console.log((Math.sqrt(temp)));
        if(Math.sqrt(temp)*Math.sqrt(temp)*2==num)
            console.log("true");
        return;
    }
    console.log("false");
}
checkNum(50);
function isInteger(num) {
    return (num ^ 0) === num;
}