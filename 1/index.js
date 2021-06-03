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
b=a+(a=b)-b;

a=a ^ b;
b= a^b;
a=a^b;