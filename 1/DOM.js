//practice
//Найдите (получите в переменную) на странице:
//1 Все элементы label внутри таблицы. Должно быть 3 элемента.
var tmp=document.getElementsByTagName('label');
console.log(tmp);
tmp=document.querySelectorAll('label');
console.log(tmp);

//2 Первую ячейку таблицы (со словом "Возраст").
tmp=document.querySelector("#age-table tr td");
console.log(tmp);

//3 вторую форму в док
tmp=document.querySelector('[name="search-person"]');
console.log(tmp);

//4 Форму с именем search, без использования её позиции в документе.
tmp=document.querySelector('[name="search"]');
console.log(tmp);

//5 Элемент input в форме с именем search. Если их несколько, то нужен
// первый.
tmp=document.getElementsByTagName('input')[0];
console.log(tmp);

//6 Элемент с именем info[0], без точного знания его позиции в документе.
tmp=document.querySelector('[name="info[0]"]');
console.log(tmp);

//7 Элемент с именем info[2], внутри формы с именем search-person.
tmp=document.querySelector('[name="info[2]"]');
console.log(tmp);