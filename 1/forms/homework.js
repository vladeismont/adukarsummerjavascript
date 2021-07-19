//2 Используя регулярные выражения, напишите скрипт, который заменяет слово «функция» в тексте на «function». Если получится, сделайте так, чтобы «функция» заменялась в любом падеже
var str = 'Twas the night before Xmas... функцию функция';
var newstr = str.replace(/функци.{1}/g, 'Function');
console.log(newstr);

//3 С помощью регулярных выражений определите, является ли строка корректным временем вида '09.59 am', '12.30 pm'.
str='09.59 am asdf 12.30 PM';
let reg=new RegExp(/([01]\d\.[0-6]\d\s(am|pm)){1}/gi);
console.log(str.match(reg));

//4 Удалите одной регуляркой все повторяющиеся слова из строки, например для 'dsf xxx aaa xxx sd aaa' должно вернуть 'dsf xxx aaa sd'.
str="dsf xxx aaa xxx sd aaa";
reg=new RegExp(/(\b\S+\b)(?=.*\1)/g);
console.log(str.replace(reg,""));
// ?????????