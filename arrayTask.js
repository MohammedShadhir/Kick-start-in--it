console.log("_________________________");
console.log("task1");

// function task1(){
//     let num =[1,2,3,4];
//     sum=0;
//     for(i=0; i<num.length; i++){
//         sum+=num[i]

//     }
//     console.log(sum);
//     return sum;
// }
// task1();

function task1(){
    let num = [1,2,3,4];
    let total=num.reduce(function(a,b){
        let sum= a+b;
        return sum;
    })
    return total;
}
console.log(task1());




console.log("_________________________");
console.log("task2");

// function task2() {
//     let num =[1,2,8,4];
//     let num1=0;
    
//     for(i=0; i<num.length; i++){
//         if(num[i]>=num1){
//             num1=num[i];
            
//         }
//     }
//     console.log(num1);
//     return num1;
// }
// task2();

function task2() {
    let num = [1,2,3,4,5]
    let largestNumber=Math.max.apply(null,num)
    return largestNumber
}
console.log(task2());






console.log("_________________________");
console.log("task3");

// function task3() {
//     let num =[5,2,8,4];
//     let num1=num[0]
// for(i=1; i<num.length; i++){
//         if(num[i]<num1){
//             num1=num[i]
            
//         }
//     }
//     console.log(num1);
//     return num1;
// }
// task3();

function task3() {
    let num = [10,2,3,4,5]
    let largestNumber=Math.min.apply(null,num)
    return largestNumber
}
console.log(task3());





console.log("_________________________");
console.log("task4");

// function task4() {
//     let avg=0;
//     let sum=0;
//     let num =[1,2];

//     for(i=0; i<num.length; i++){
//         sum += num[i];
        
//         }
//         avg = sum/num.length;
//         console.log(avg);

//         return avg

// }
// task4();


function task4(){
    let num = [1,2];
    let total=num.reduce(function(a,b){
        let sum= (a+b)/num.length;
        return sum;
    })
    return total;
}
console.log(task4());








console.log("_________________________");
console.log("task5");

// function task5() {
//     let num =[1,2,3,4,6];
//     let num1=[];
//     for(i=0; i<num.length; i++){

//         if (num[i]%2 == 0) {
            
//             num1.push(num[i])
//         }

//     }
//     console.log(num1);
//     return num1
// }
// task5();

function task5() {
    let num=[1,2,3,4,5];
    let even = num.filter(function(value){
        if(value%2 == 0){
            return value;
        }
        
    })
    return even;

}
console.log(task5());






console.log("_________________________");
console.log("task6");

// function task6() {
//     let num =[1,2,3,4,6];
//     let num1=[];
//     for(i=0; i<num.length; i++){

//         if (num[i]%2 !== 0) {
            
//             num1.push(num[i])
//         }

//     }
//     console.log(num1);
//     return num1
// }
// task6();

function task6() {
    let num=[1,2,3,4,5];
    let odd = num.filter(function(value){
        if(value%2 !== 0){
            return value;
        }
        
    })
    return odd;

}
console.log(task6());





console.log("_________________________");
console.log("task7");


// function findFirstOccurrence(arr, num) {

//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === num) {
//         return i;
//       }
//     }
//     return -1;
//   }
//   console.log(findFirstOccurrence([1,1,2,3,4], 1));

function task7(number) {
    let num =[1,2,3,3,4,5];
    let index = num.indexOf(number);
    return index

}
console.log(task7(3));



  
console.log("_________________________");
console.log("task8");

//   function findLastOccurrence(arr, num) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] === num) {
//             return i;
//         }
//     }
//     return -1;
// }
// console.log(findLastOccurrence([1,1,1,2,3,4,5], 1));

function task8(number) {
    let num =[1,2,3,9,3,5];
    let index = num.lastIndexOf(number);
    return index

}
console.log(task8(3));


console.log("_________________________");
console.log("task9");

function task9() {
    let num =[1,3,5,8,9,2,6,4];
    let Sort=num.sort();
    return Sort;
}
console.log(task9());


console.log("_________________________");
console.log("task10");

function task10() {
    let num =[1,3,5,8,9,2,6,4];
    let Reverce=num.sort().reverse();
    return Reverce;
}
console.log(task10());