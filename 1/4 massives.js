//1.создайте массив и в цикле заполните его четными числами от 2 до 20
let ar=[];
for(let i=2;i<=20;i+=2){
    ar.push(i);
}
for(let j in ar){
    console.log(ar[j]);
};
//2.преобразуйте массив из 1 так, чтобы его элементы стали равны своему индексу, умноженному на 5
let len=ar.length;
ar.splice();
//ar.map(x=>(x/2)*5); no changes without mark =
for(let i=1;i<=len;i++){
    ar[i-1]=(i-1)*5;
}
for(let j in ar){
    console.log(ar[j]);
};

//3.преобразуйте массив из задачи 2 так, чтобы его элементы расположились в обратном порядке
ar.reverse();
for(let j in ar){
    console.log(ar[j]);
};
//4. получите от пользователя 3 числа, создайте из них массив. 
//4. используя циклы, найдите наибольшее из чисел и разделите на него каждый э-т массива
// let x=prompt("enter the first number",'');
// let y=prompt("enter the second number",'');
// let z=prompt("enter the third number",'');
let ar1=new Array(3);
ar1[0]=5;
ar1[1]=4;
ar1[2]=8;
var temp=ar1[0];
// console.log(typeof ar1 + temp);
while(temp<ar1[0] || temp<ar1[1] || temp<ar1[2]){
    if(temp<ar1[1])temp=ar1[1];
    if(temp<ar1[2])temp=ar1[2];

    if(temp>=ar1[0]&&temp>=ar1[1]&&temp>=ar1[2])
    ar1 = ar1.map(function(element) {
        return element/temp;
    });
}
for(let j in ar1){
    console.log(ar1[j]);
};

//1 massive[35]...
var oldArray1 = [];
for(let i=1;i<=35;++i){
    oldArray1[i-1]=i;
}
let elem3035=oldArray1[30]+" "+oldArray1[31]+" "+oldArray1[32]+" "+oldArray1[33]+" "+oldArray1[34];
oldArray1.splice(30,5,elem3035);
for(let j in oldArray1){
    console.log(oldArray1[j]);
};
var newArray1 = oldArray1.slice(0,10);
for(let j in newArray1){
    console.log(newArray1[j]);
};
oldArray1.splice(0,10); // delete first 10
for(let j in oldArray1){
    console.log(oldArray1[j]);
};
oldArray1= oldArray1.concat(newArray1);
for(let j in oldArray1){
    console.log(oldArray1[j]);
};
newArray1 = oldArray1.slice(0,10).reverse(); //copy 11-20 first oldArray elements
for(let j in newArray1){
    console.log(newArray1[j]);
};
oldArray1.splice(0,10); // delete first 11-20
for(let j in oldArray1){
    console.log(oldArray1[j]);
};
oldArray1=newArray1.concat(oldArray1); //adding reversed 11-20 to the start
for(let j in oldArray1){
    console.log(oldArray1[j]);
};
for(let i=11;i<=15;i++){
    oldArray1.splice(i-1,1,2**(i-9));
}
for(let j in oldArray1){
    console.log(oldArray1[j]);
};
for(let i=15;i<20;i++){
    oldArray1.splice(i,1,1);
}
for(let j in oldArray1){
    console.log(oldArray1[j]);
};

//2 фукнция, которая удаляет из массива повторяющиеся элементы
let arrtemp=[1,1,4,2,3,2,3];
function delSameElem(args){
    let result=[];
    for(let uniq of args){
        if(!result.includes(uniq)){
            result.push(uniq);
        }
    }
    return result;
}
arrtemp=delSameElem(arrtemp);
for(let j in arrtemp){
    console.log(arrtemp[j]);
};

//3
arrtemp=[0,1,4,0,3,2,3];
function delFalseElem(arr){
    return arr.filter(item => item);
}
arrtemp=delFalseElem(arrtemp);
for(let j in arrtemp){
    console.log(arrtemp[j]);
};


//homework
//1
function getRandomArray(len){
    let tmpar=[];
    for(let i=0;i<len;++i){
        tmpar[i]=Math.random();
    }
    return tmpar;
}
let tmpar=[];
tmpar=getRandomArray(5);
for(let j in tmpar){
    console.log(tmpar[j]);
};

//2 эл больше среднего арифм всех эл
function averageSum(arr){
    let sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
let avgSum=averageSum(tmpar);
console.log("avg sum: "+avgSum);
for(let j in tmpar){
    if(tmpar[j]>avgSum)
    console.log(tmpar[j]);
};
//3 find two less elements
var min = Infinity, secondMin = Infinity; 
for (var i= 0; i< tmpar.length; i++) {
    if (tmpar[i]< min) {
        secondMin = min;
        min = tmpar[i]; 
    } else if (tmpar[i]< secondMin) {
        secondMin = tmpar[i]; 
    }
}
console.log('Smallest number: ' + min);
console.log('Second smallest number: ' + secondMin);

//4 Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд, а на освободившиеся места вставьте нули.
let x=0;
tmpar=getRandomArray(5);
len=tmpar.length;
for(let i=0;i<len;i++){
    if(tmpar[i]<0.8){
        x=x+1;
        tmpar.splice(i,1);
        //console.log("#x = "+x);
    }
}
if(x>0){
    for(let i=0;i<x;i++){
        tmpar.unshift(0);
    }
}
for(let j in tmpar){
    console.log(tmpar[j]);
};

//5 Попарно сложите элементы двух массивов равной длины: первый эл массива 1 с последним эл массива 2, второй эл массива 1 с предпоследним эл массива 2 и так далее. Верните массив с результатами сложения.
//Решение каждой задачи должно быть оформлено как отдельная функция.
function arElSum(ar1,ar2){
    let len1=ar1.length;
    let res=[];
    for(let i=0;i<len1;i++){//if ar1.len=ar2.len
        let x=ar1[i]+ar2[len1-i-1];
        res.push(x);
    }
    return res;
}
tmpar=arElSum(getRandomArray(5), getRandomArray(5));
for(let j in tmpar){
    console.log(tmpar[j]);
};

//6 bubble sort
function bblSort(array){
    let swapped = true;
    let len=array.length;
    if(len>1)
	do {
		swapped = false;
		for (let j = 0; j < len; j++) {
            console.log(typeof array[j+1]); 
			if (array[j] > array[j + 1]) {
                // question:
                // if last element than is there execution of array[j+1] data?? see !210 string
				console.log("true:"+j); 
                let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
				swapped = true;
                
			}
		}
	} while (swapped);
	return array;
}
tmpar=bblSort(getRandomArray(5));
for(let j in tmpar){
    console.log(tmpar[j]);
};

//7 Проверьте, есть ли в массиве два числа, сумма которых очень близка к 1 (0.999 < sum < 1.001). Если такая пара (или такие пары) есть, выведите их в консоль.
function cmpNum(array){
    let len=array.length;
    for(let i=0;i<len-1;++i){
        for(let j=i+1;j<len-1;++j){
            if((array[i]+array[j])<1.001 &&(array[i]+array[j])>0.999)
                console.log(("#1="+array[i]+"; #2="+array[j]));
        }
    }
}
cmpNum(getRandomArray(5));  //"cmpNum(arraylenght)"...(5)


//8 Создайте массив той же длины, что исходный. На месте самого большого числа исходного массива в новом вставьте число 1, на месте второго по величине – 2 и так далее.
function bblSortReplace(array){
    for(let j in array){
        console.log(array[j]);
    };

    let array1=array.slice();
    array1.sort();
    array1.reverse();
    let len=array1.length;
    let ar=[];
    for(let i=0;i<len;++i){
        console.log("x----- "+array.indexOf(array1[i]));
        let x=array.indexOf(array1[i]);
        ar[x]=i+1;
    }
    return ar;
}
tmpar=bblSortReplace(getRandomArray(5));
for(let j in tmpar){
    console.log(tmpar[j]);
};

//9  Сделайте сдвиг массива вправо на X позиций (X передайте в функцию в качестве аргумента). Элементы, которые после сдвига "уходят" за пределы его длины, переместите на освободившиеся первые Х позиций.
function moveElements(len){
    let ar=getRandomArray(5);
    for(let j in ar){
        console.log(ar[j]);
    };
    let x=ar.length;
    for(let i=0;i<len;i++){
        var removed=ar[x-1];
        ar.splice(x-1,1);
        console.log(removed);
        ar.splice(0,0,removed);
    }
    for(let j in ar){
        console.log(ar[j]);
    };
}
moveElements(3);