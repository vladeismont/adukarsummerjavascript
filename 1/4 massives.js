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

//1
var oldArray = [];
for(let i=1;i<=35;++i){
    oldArray[i-1]=i;
}

var newArray = oldArray.slice(0,10);
for(let j in newArray){
    console.log(newArray[j]);
};
oldArray.splice(0,10); // delete first 10
for(let j in oldArray){
    console.log(oldArray[j]);
};
oldArray= oldArray.concat(newArray);
for(let j in oldArray){
    console.log(oldArray[j]);
};
var newArray = oldArray.slice(0,10).reverse(); //copy 11-20 first oldArray elements
for(let j in newArray){
    console.log(newArray[j]);
};
oldArray.splice(0,10); // delete first 11-20
for(let j in oldArray){
    console.log(oldArray[j]);
};
oldArray=newArray.concat(oldArray); //adding reversed 11-20 to the start
for(let j in oldArray){
    console.log(oldArray[j]);
};

for(let i=21;i<=25;i++){
    oldArray.splice(i-1,1,2**(i-19));
}
for(let j in oldArray){
    console.log(oldArray[j]);
};
for(let i=25;i<30;i++){
    oldArray.splice(i,1,1);
}
for(let j in oldArray){
    console.log(oldArray[j]);
};
let elem3135=oldArray[30]+" "+oldArray[31]+" "+oldArray[32]+" "+oldArray[33]+" "+oldArray[34];
oldArray.splice(30,5,elem3135);
for(let j in oldArray){
    console.log(oldArray[j]);
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
    // let result=arr.slice();
    // for(let i=0;i<arr.length-1;i++){
    //     if(i>-1 && (Boolean(arr[i]))){
    //         result=arr.splice(i,1);
    //         i--;
    //         console.log(i+" i");
    //     }
    // }
    // return result; smth wrong...
    return arr.filter(item => item);
}
arrtemp=delFalseElem(arrtemp);
for(let j in arrtemp){
    console.log(arrtemp[j]);
};