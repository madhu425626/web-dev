
/*
//topic: Functions
function output(){ //creation of function
    console.log("hello BMW");
}

output(); //calling of function

//simple parameter
function output1(msg){
    console.log(msg);
}

output1("i love java script");

//sum of two digits
function output2(x,y){
    console.log(x+y);
}

output2(4,0);

//Arrow function
const arrowsum = (a,b) => {
    console.log(a+b);
}

const arrowmul = (a,b) => {
    console.log(a*b);
}
*/
//---------------question---------------
//finding out no of vowels from user input
//first we print
/*
function countVowels(str)  {
    for(const char of str) {
    console.log(char);
} 
}
*/
/*
function countVowels(str)  {
    let count = 0;
    for(const char of str) {
    if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
        count++;
    }
}
        console.log(count); 
}
*/
//

//---------------questinon 2------------------
//same task by using arrow function
/*
let countVowels = (str) => {
    let count = 0;
    for(let char of str){
        
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
   
}
 console.log(count);
}
*/
//-----------------topic:forEachloop---------------------

/*

let arr = [1,2,3,4,5];

//forEach syntax
/*
array_name.forEach (function_name of call back()){
   stmts;
   }

array_name.forEach (function_name of call back()) => {
   stmts;
   }   
*/

/*
arr.forEach(function print_value(val){
    console.log(val);
});

//by using arrow functions
arr.forEach((val) =>{
    console.log(val);
})

//idx,arr parameter
arr.forEach((val, idx, arr) =>{
    console.log(val,idx, arr);
})

//--------------question----------------
//for a given array of number print the square of each value
let nums = [2,4,6,8,];


nums.forEach(function( num){
console.log( num*=2);//num*=2
})

//fumction arrow
nums.forEach((num)=>{
    console.log(num*=2);
})


//easy way
let calSquares = (num) => {
    console.log( num *=2 );
     
}

nums.forEach(calSquares); //passing call back

*/
/*
//map method (imp)
let num1 = [1,2,3,4,5];

num1.map((nu1) => {
    console.log(nu1);
})

//storing elements into new array
let new_arr = num1.map((nu1) => {
    return nu1 * nu1;
})
  
console.log(new_arr);
console.log(new_arr);

//--map is used to create nwe array
//--forEach used for calc and printing

*/

//----------------filter method-----------------
//filtering array by some conditions
//eg: all even elements

/*
let arr = [1,2,3,4,5,6];
let even_Array = arr.filter((val) => {
    return val%2==0;
    
})

console.log(even_Array);

let odd_Array = arr.filter((valu) => {
    return  valu%2!==0;
})
console.log(odd_Array);
*/



/*
//------------reduce method----------------
//performs an operations and converts array to single value
//eg : avg , sum etc...
let  arr = [9,8,7,6]; //sum
let new_Array = arr.reduce((prev,curr) => {
    return prev + curr;
})
console.log(new_Array);

//grater no in array
let array = [1,6,8,6,8,9,6,8,5,9,8,6,8];
let grater = array.reduce((prev,curr) => {
    return prev>curr?prev:curr;
})

console.log(grater);
*/



//---------question---------------------
//take input from array and print upto n
//use reduce mathod to print addition of array
//and multiplicatiion of array
let num = prompt("enter a number");
let arr = [];
for(let i = 1; i<=num; i++){
    arr[i-1] = i;
}

console.log(`initial array elements = ${arr}`);

let add_arr = arr.reduce((pre,curr) => {
    return pre + curr;
})
console.log(`addition of all array elements are = ${add_arr}`);

let arr_mult = arr.reduce(( pre,curr ) => {
    return pre * curr;
})

console.log(`multiplication of all array elements are = ${arr_mult}`);
console.log("factorial values");









































