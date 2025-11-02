//topics loops,strings,string methods
//Topic:-----------------------------Loops--------------------------

/*

for(let i=1; i<=10; i++){
    console.log("hello");
}

// calculating 1 to n numbers
let sum = 0;
let n = 15;
for(let i=1; i<=n ; i++ ){
    sum = sum + i;
}
console.log("value of sum",sum);
console.log("loop has ended");

// while loop
let i = 1;
while(i<=10){
    console.log(i);
    i++;
}

// do-while
// stmt and then CSSConditionRule
let j = 1;
do{
    console.log(j);
    j++;
}
while(j<=5);

//for of loop
let str = "abbugarimadhu";
let size = 0;
for(let k of str){
    console.log("k=",k);
    size++;
}
console.log("size of string is :",size);//string size



//for in loop for looping strings
const student  = {
    name : "madhu",
    age : 19,
    score : 9.8,
    isPass : true,
};

for(let key in student){
    console.log("key=", key, "value=",student[key],"type of :",typeof student[key]);
    
}
    */
/*
//practice questions
// q1.printing all even numbers
for(let i = 0; i<=100; i++){
    if(i%2==0){
    console.log("num=",i)
    }
};
*/
//q2. guessing the random number from user . untill he guesses correct
/*let guessnum=25;
let user_num=prompt("Guess THE number");
if(guessnum!=user_num){
   user_num=prompt("Guess Again!!!");
}
else if(guessnum==user_num) {
    console.log("Congratulatons you guessed correct num...");
}


let guessnum=25;
let user_num=prompt("Guess THE number");
while(guessnum!=user_num){
   user_num=prompt("Guess Again!!!");
}
console.log("Congratulatons you guessed correct num...")

*/
//---------------------------Topic:Strings-------------------------

let specialstring = `nenu chaala happy ga unnanu ndhukantey naku software job vacheysindhe`;
console.log(specialstring);

//String interpolution
let student = {
    name:"madhu",
    role:"web-devloper",
}
let output = `my name is ${student.name} and I work as ${student.role}`;  
console.log(output);
let string = "Abbugari\tMadhu";
console.log("abbugri\n madhu");
console.log("abbugri\t madhu");
console.log(string.length);
let str = "  Abbugari Madhu";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());//removes starting and ending spaces







