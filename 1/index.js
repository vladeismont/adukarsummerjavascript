/*
////////////////////    1
console.log(''+1+0);
console.log(typeof(''+1+0));
console.log(''-1+0+'');
console.log(typeof(''-1+0));
console.log(true+false);
console.log(typeof(true+false));
console.log(6/3);
console.log(typeof(6/3));
console.log("2"*"3");
console.log(typeof("2"*"3"));
console.log(4+5+'px');
console.log(typeof(4+5+'px'));
console.log('$'+4+5);
console.log(typeof('$'+4+5));
console.log('4'-2);
console.log(typeof('4'-2));
console.log('4px'-2);
console.log(typeof('4px'-2));
console.log(7/0);
console.log(typeof(7/0));
console.log(' -9\n'+5);
console.log(typeof(' -9\n'+5));
console.log(' -9\n'-5);
console.log(typeof(' -9\n'-5));
console.log(null+1);
console.log(typeof(null+1));
console.log(undefined+1);
console.log(typeof(undefined+1));
console.log(null=='\n0\n');
console.log(typeof(null=='\n0\n'));

let a;
let b;
let x;
x=a;
a=b;
b=x;
//1
a=a+b;
b=a-b;
a=a-b;
//2
b=a+(a=b)-b; // sequence????????

a=a ^ b;
b= a^b;
a=a^b;

////////////////////    2
console.log("///////////////////2");


let n1=Number(prompt("enter first number",""));
let n2=Number(prompt("enter second number",""));
if(n1>n2){
    console.log(n1);
}else console.log(n2);
((n1>n2) ? console.log(n1) : console.log(n2));

let n3=Number(prompt("enter third number",""));

if((n1 > n2) && (n1 > n3)){
    console.log(n1);
    if(n2 > n3){
        console.log(n2);
        console.log(n3);
    }
    else{
        console.log(n3);
        console.log(n2);
    }
}
else if((n2 > n1) && (n2 > n3)){
        console.log(n2);
        if(n1 > n3){
            console.log(n1);
            console.log(n3);
        }
        else{
            console.log(n3);
            console.log(n1);
        }
    }
else{
    console.log(n3);
    if(n1 > n2){
        console.log(n1);
        console.log(n2);
    }
    else{
        console.log(n2);
        console.log(n1);
    }
}
let n4=Number(prompt("enter your number",""));
switch (n4){
    case 1:
        console.log("you entered one.");
        break;
    case 2:
        console.log("you entered two.");
        break;
    case 3:
        console.log("you entered three.");
        break;
    default:
        console.log("smth wrong...");
}
let i=1;
let result=0;
for(;i<=n4;i++){
    result+=i;
}
console.log(result);
i=n4;
for(;i>=0;i--){
    if(i%2==0)console.log(i);
}
i=n4;
while(i>=0){
    if(i%2==0)console.log(i);
    i-=1;
}

/////////2.   Логические операторы. Условные операторы. Циклы
//1

do{
    var n=Number(prompt("enter the flat number",""));
    if(isNaN(n) || n<1 || n>60 || !isInteger(n))
        alert("not the flat number!");
}while(isNaN(n) || n<1 || n>60|| !isInteger(n))
console.log(Math.ceil( n/20));

//2
var str=prompt("enter the car mark","");
switch(str){
    case "Ford":
        console.log(str + " - Country: USA");
        break;
    case "BMW":
        console.log(str + " - Country: Germany");
        break;
    case "Peugeot":
        console.log(str + " - Country: France");
        break;
    case "Citroen":
        console.log(str + " - Country: France");
        break;
    case "Toyota":
        console.log(str + " - Country: Japan");
        break;
    case "Hyundai":
        console.log(str + " - Country: South Korea");
        break;
    default: console.log("Unknown");
}
*/
//3
/*год, номер которого кратен 400, — високосный;
остальные годы, номер которых кратен 100, — невисокосные (например, годы 1700, 1800, 1900, 2100, 2200, 2300);
остальные годы, номер которых кратен 4, — високосные[5]. */
var n=Number(prompt("enter the year",""));
if(!((n % 4) || (!(n % 100) && (n % 400))) == true){
    console.log(n+" a leap year");
}
else console.log(n+" not a leap year");
//4

do{
    var n=Number(prompt("enter the number between 1 and 20",""));
    if(isNaN(n) || n<1 || n>20 || !isInteger(n))
        alert("not the number between 1 and 20!");
}while(isNaN(n) || n<1 || n>20|| !isInteger(n))
for(i=1;i<=10;i++){
    console.log(n*i);
}




function isInteger(num) {
    return (num ^ 0) === num;
  }