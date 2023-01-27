let str = "wow";
let len = str.length;
for(let i=0; i<len ; i++){
    if(str[i]!==str[len-1-i]){
       return  console.log("not palindromes");
    }
}
return console.log("palindromes");

   

         