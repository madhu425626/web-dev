//.......for loop
/*for(let i=1; i<=10; i++){
    console.log(i);
}
*/

/*let sum = 0;
for(let i = 1; i<=5; i++){
    sum += i;
}
console.log(sum);*/

// ........adding n numbers
/*let sum = 0;
let n = 20;
for(let i=1; i<=n; i++){
    sum += i;
};
console.log(sum);*/


/*
//.............while loop
let i = 0;
while(i<=5){
    console.log(i);
    i++;
}
*/

/*
//.......do while
let i = 0;
do{
    console.log(i);
    i++;
}
while(i<=5)
*/

/*\


//.....................for of loop
//looping strtings and arrays
let str = "Madhu";
let size = 0;
for(let x of str){
    console.log(x);
    size++;
}
console.log(size);
console.log(str.length);

*/

/*
//..............for in loop 
//for objects
let std = {
    name : "madhu",
    rollno: 27,
    cgpa : 9.9,
    isPass : true,

}

for ( let i in std){
    console.log("key = ",i, " value = ", std[i]);
}
//---------------------------------------------------------------
myDetails = {
    name : "madhu",
    rollNo : 27,
    cgpa : 10.0,
    isPass : true,
};

for(let key in myDetails){
    console.log("key = ",key,"value = ",myDetails[key]);
};
*/


/*
//printing from 1 to 100
for(let i = 0; i<=10; i++){
    console.log(i);
}

//printing even no
for(let i = 0; i<=10; i++){
    if(i%2==0){
        console.log(i);
    }
}
    */



/*
let userInput = prompt("enter any no");

let num = 25;

if (userInput === num){
    console.log("enter  any guess");
}

else{
    return userInput;
}

*/

/*
let i = 0;
while(i<=10){
    console.log(i);
    i++;
}
console.log("loop ended");


let num = 25;
let userInput = Number(prompt("enter"));

while( userInput != num){
    userInput = Number(prompt(console.log("try Again")));
}

console.log("Correct!!!");

*/



/*
let arr = [1,2,3,4,5,6,7,8,9,10];
let i;
let userInput = Number(prompt("Enter any guess"));

for(i=0; i<=9; i++){
    while(arr[i] == userInput){
        console.log("try again");
        userInput = Number(prompt("enter another responce"));
    }
    console.log("Correct"); 
}

*/
//loops mastering

/*
//printing from 1 to 10

for(let i = 1; i<=10; i++){
    console.log(i);
}
*/

//printing even numbers from 1 to 10

/*
let i = 1;
while(i<=20){
    if(i%2==0){
        console.log(i)
    }
    i++;
}
*/

/*
//printing from 10 to 1
let i = 10;
while(i>=1){
    console.log(i);
    i--;
}
*/

/*
//printing first sum of n numbers

let n = 100;
let sum = 0;
let i = 1;
while(i<=n){
    sum += i;
    i++;
}
console.log(`the sum of ${n} numbers are :${sum}`);
*/


/*
//printing multiplication tables from user input
let userinp = Number(prompt("Enter The Multiplication Table That You Want To Print!!!!!!"));
let i = 1;
let result;
while(i<=10){
    result = i*userinp;
    console.log(`${userinp} X ${i} = ${result}.`);
    i++;
}
*/

/*


let n = Number(prompt("enterany no:"));
let fact = 1;
for(let i = 1; i<=n; i++){
    fact=fact*i;
    
}
console.log(`the factorial of given no ${n}! is : ${fact}`);


let a = Number(prompt("enter any number"));
let b = 1;
let i = 1;
 while(i<=a){
    b = b*i;
    i++;
 }


console.log(`the factorial of given no ${a}! is : ${b}`);

*/

/*
//6 printing array elements
let arr = [1,2,3,4,5];
for(let a = 0; a<=arr.length - 1; a++){
    console.log(arr[a]);
}
*/


/*
//6 printing all odd array elements
let arr = [1,2,3,4,5,7,8,9,10];
for(let a = 0; a<=arr.length - 1; a++){
    if (arr[a]%2 != 0)
    console.log(arr[a]);
}
*/

/*
//intermediate level
//printing the no of even and odd elements in an array
let arr = [1,2,3,4,5];
let even = 0;
let odd = 0;
for(let i = 0; i<=arr.length - 1; i++){
    if(arr[i]%2 == 0){
        even += 1;
    }else{
        odd  += 1;
    }
    
}
    console.log(`no of even numbers are ${even} and odd numbers are ${odd}`);

    */ 

//reverse an array
/*
let arr = [99,25,44,35,65,6,48];

let revarr = [];
console.log(arr);

for(let i = arr.length; i>=0; i--){
    revarr.push(arr[i]);
}

console.log(revarr);*/


/*
let array = [55,654,55,54,5,45,5,8,5,5544];
let reversedarray = [];
for(let i = array.length - 1; i>=0; i-- ){
reversedarray.push(array[i]);
}
console.log(reversedarray);
*/


/*
let arr = [10,58,69,14,12,13,14,15,16,17,18,19,24,25,36,27,28,29,37,38,39,47,48,45,46,49,57,58,69,67,68,69,78,79,89,99];
console.log(arr);


for(let i = 0; i<arr.length; i++){
   if(arr[i]>0 && arr[i]<11)
   {
    let sum = 0;
         console.log("numbers in between 0 and 10 are : ",arr[i]);
         sum = sum + 1;
        console.log(`the total numbers are : ${sum}`);
    }
    
    if(arr[i]>=11 && arr[i]<21){
        sum = 0;
    console.log("numbers in between 10 and 20 are : ",arr[i]);
    sum = sum + 1;
     console.log(`the total numbers are : ${sum}`);
    }
}

*/

//    }else if(arr[i]>=21 && arr[i]<31){
//     console.log("numbers in between 20 and 30 are : ",arr[i]);
//    }else if(arr[i]>=31 && arr[i]<41){
//     console.log("numbers in between 30 and 40 are : ",arr[i]);
//    }else if(arr[i]>=41 && arr[i]<51){
//     console.log("numbers in between 40 and 50 are : ",arr[i]);
//    }else if(arr[i]>=51 && arr[i]<61){
//     console.log("numbers in between 50 and 60 are : ",arr[i]);
//    }else if(arr[i]>=61 && arr[i]<71){
//     console.log("numbers in between 60 and 70 are : ",arr[i]);
//    }else if(arr[i]>=71 && arr[i]<81){
//     console.log("numbers in between 70 and 80 are : ",arr[i]);
//    }else if(arr[i]>=81 && arr[i]<91){
//     console.log("numbers in between 80 and 90 are : ",arr[i]);
//    }else if(arr[i]>=91 && arr[i]<101){
//     console.log("numbers in between 90 and 100 are : ",arr[i]);
//    }else if(arr[i]>=101){
//     console.log("numbers in between 101 and above are : ",arr[i]);
//    }

// }


/*

let sum = 0;
let array = [1,2,3,4,5,6];
for (let i = 0; i<array.length; i++){
    if(array[i]>0 && array[i]<4){
        sum++
    }
    // console.log(array[i]);
    // sum++;
}
console.log(sum);
// console.log(array);

*/

/*

//finding largest no in array
let arr = [1,5,7,2,6,4,46,8,5,6,956,9,8,49,889,5,5,48,6,15,48];
let rra = [3,1];
let gratest = arr[0];
 for(let i = 0; i<arr.length; i++){
    if(arr[i]  > gratest){
        gratest = arr[i];
       console.log(gratest); 
        
    }
 }console.log(gratest);

 */

//star pattern
/*
let pattern = "";
for(let i = 0; i<=20; i++){
    pattern += "*";
    console.log(pattern);
}

*/

//tables------------------------
/*
for(let i = 1; i<= 10; i++){
console.log(`----------------${i}th Table --------------`);
    for(let j = 1; j<= 10; j++){
        
        console.log(`${i} x ${j} = ${i*j}`);
        
    }
    
}
    */


/*

//prime no finding
let n = 2;
let prime = "true";

for(let i = 2; i<n; i++){
    if(n%i == 0){
        prime = "false";
    }
}
console.log(prime ? "is prime no" : "not a prime no" );
*/
//no of vowels in a string
/*
let string = prompt("enter any string".toLowerCase);
string = string.toLowerCase();
console.log(string);


 let sum = 0;
for(let i = 0; i<=string.length; i++){
    if(string[i] == "a"){

       sum++;
    }else if(string[i] == "e"){

       sum++;
    }else if(string[i] == "i"){

       sum++;
    } else if(string[i] == "o"){

       sum++;
    } else if(string[i] == "u"){

       sum++;
    }
}
console.log(`the no of vowels in the given ${string} are ${sum}`)
*/

/*
 let string = "madhu";
 let sum = 0;
 string = string.toLowerCase();

 for(let i = 0; i<string.length; i++){
    if("aeiou".includes(string[i])){
        sum++;
    }
 }

 console.log(sum);
*/

/*
let string = "Madhu";
string = string.toLowerCase();
let sum = 0;
for(let i = 0; i<=string.length; i++){
    if("nsfkskfafkabf".includes(string[i])){
        sum++;
    }
}
console.log(sum);
*/


/*
//sum of a dgit
let num = 9874;
let sum = 0;
while(num>0){

sum += num%10;
num = Math.floor(num/10);
}
console.log(sum);
*/


/*
// console.log(Math.floor(-2.1));
// reversing string
let string = "madhu";
let revString = "";
for(let i = string.length - 1; i>=0; i--){
    revString += string[i];
}
console.log(revString);

*/


/*
//finding no of times charecter apply in a string
let name = "msdnfkjhfnvknsnvklsnnjscmslgjmlskfgs";
let sum = 0;
// console.log(name.length);
for(let i = 0; i< name.length; i++){
    if(name[i] == "f"){
        sum++;
    }
}
console.log(sum);

*/



/*
//guess the no
let num = 25;
let usernum = prompt("enter any no");
while(usernum != num ){
    usernum = prompt("try again");
}
console.log("congratulations you have guessed correct number");

*/


/*
//username and password
let username = "madhu4256";
let password = "Madhu@123#";

username = prompt("enter username");

while( username != "madhu4256"){
    username = prompt("enter again");
}
console.log("entered password is right");


password = prompt("enter password");

while(password != "Madhu@123#"){
    password = prompt("enter password again");
}

console.log("...Welcome!!!...");

*/


/*
//febinochi series
let a = 0;
let b = 1;

console.log(a);
console.log(b);

for(let i = 3; i<=10; i++){
    let next = a+b;
    console.log(next);
    a = b;
    b = next;
}
*/
  

 
 






