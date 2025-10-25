// operatrs in java script 
a=10,b=20;
console.log("a =",a,"b =",b);
console.log("a + b =",a+b);


console.log("a ** b",a**b);

a--;
console.log("a =",a);

// license
let age = 20;
let license;
if(age>=18){
    console.log("license is granted")
}

//pramoted
/*
let marks = 90;
if(marks>=33){
    console.log("promoted")
} */

let Age = 20;
// let result = Age >= 18 ? "adult" : "non-adult";
// console.log(result);
Age >= 18 ? console.log("Adult"):console.log("non-Adult");
//compact if-else
    //fot theory mdn doc in google

//switch
const exp = "papaya";
switch(exp){
    case "oranges":
        console.log("oranges are $ 0.59")
        break;
    case "mango":
    case "papaya":
        console.log("mangoes and papayas are at $ 2.79");
        break;
    default:
        console.log(`sorry, we are out of {exp}.`);            
} 

// practice questions
// q1.get user to input a number using propmpt9('enter a no') check if the no is a multiple of 5 or not
// alert("hellooo"); popup 
// let nam = prompt("hello");
// console.log(nam);
/*
let num = prompt("enter a no :");
if (num%5===0){
    console.log(num,"is a multiple of 5");
}
else {
    console.log(num,"not a multiple of 5");
}
*/
// q2.giving grades to students
let marks = prompt("enter your marks :");
let grade;
if (marks>=91 && marks <=100){
    grade = "A";
}

else if (marks>=81 && marks<=90){
    grade = "B";
}

else if (marks>=71 && marks<=80){
    grade = "C";
}

else if (marks>=61 && marks<=70){
    grade = "D";
}
else if (marks>100 || marks<=60){
    grade = "E";
}
console.log("according to your :",marks," marks. your grade was : ",grade,)







































