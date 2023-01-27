
console.log("_______________________________________________");
console.log("task 1");

function add(a,b) {
let result = a+b;
    return result;
}
sum=console.log(add(4,5));




console.log("_______________________________________________");

console.log("task 2");



function vovels(name){
    let list= 'aeiouAEIOU';
    let count=0;
  for(let x=0; x<name.length; x++){
    if(list.indexOf(name[x]) !== -1){
        count+=1;
    }

  }
  return count;
}
console.log(vovels("Apple"));




console.log("_______________________________________________");

console.log("task 3");

function raising(num1) {
    let number= num1**3
    return number;
}
console.log(raising(9));


console.log("_______________________________________________");

console.log("task 4");

function task4(number) {
    if (number%2==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }

}
task4(20);



console.log("_______________________________________________");

console.log("task 5");

function reverse(str) {
    let c ='';
    for(let x=str.length-1; x>=0; x--){
       c +=str[x];
    }
    return c;
}
console.log(reverse('hello'));

console.log("_______________________________________________");

console.log("task 6");

function task6(a, b) {
    let c = a*b;
    return c;
}
console.log(task6(6,10));



console.log("_______________________________________________");

console.log("task 7");

function task7(a) {
    let sum=0;
    for(x=0; x<a.length; x++){
      
        sum =Number(a[x])+sum;   
    }
    return sum;
}
console.log(task7("347"));


console.log("_______________________________________________");

console.log("task 8");

function task8(a) {
    num= Number(a);
     square=Math.sqrt(num);
  
    return square;
}
console.log(task8("16"));




console.log("_______________________________________________");
console.log("task 9");

function task9(word) {

    for(a=0; a<word.length-1; a++){

        if(word[a] == word[word.length-1-a] ){
            return true;
        }
        else {
            return false;
        }
    }
     
}
 console.log( task9('wow'));


 console.log("_______________________________________________");
console.log("task 10");

function task10(number) {
    for(a=0; a<=number; a++){
        factor=number*(number-1);
        return factor;
    }
    
}
console.log(task10(3));

console.log("_______________________________________________");
console.log("task 11");

 
function task11(num) {
   
 if(num<2){
    return 1;
 }
 else {
    return task11(num-2)+task11(num-1)
 }
    
}
console.log(task11(7));


console.log("_______________________________________________");
console.log("task 12");

function task12(n) {
    if(n<1){
        return 1;
    }
    else{
        return n*task12(n-1);
    }
}
console.log(task12(4));

console.log("_______________________________________________");
console.log("task 13");

// function(num){

// }