//practice
//1
function sum(a,b,c){
    return a+b+c;
}
//2
function sum(a){
    let z=0;
    for(let i=1;i<=a;i++){
        z+=i;
    }
    return z;
}
//3
var n=15
function digitsSum(x){
    let s=0;
    while(n!=0){
        s=s+x%10;
        n=Math.floor(x/10);
    }
    return s;
}
//4
function fact(x){
    return x?x*fact(x-1):1;
}

//3
//  let str=prompt("enter the song", "");
var str=10; //let same affect
function res(str){
    console.log(typeof str);
}
res();  //undefined - why?
const determineFunc = (param) => typeof param;
console.log("logs==>", determineFunc(10)); //number - why?
//3.what the difference????????

//4
function circleLength(r=10){
    
    return 2*r*4*Math.atan(1);
}
function circleArea(r=10){
    
    return r*r*4*Math.atan(1);
}
console.log(circleLength());

//6
function reverse(num, r = 0){
    if(!num) return r;
    r =  r * 10  + num % 10;
    return reverse(Math.floor( num / 10), r);
}
console.log(reverse(12345));