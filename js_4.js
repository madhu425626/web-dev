//------------topics------------
// arrays
// array methods

/*
let marks = [97,72,88,56,63];
console.log(marks);

//length of an array
console.log(marks.length);

//storing string in aray
let heros = ["ironman","thor","marval","captain amarica"];
console.log(heros);

//array indices
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);

//value changing  [cant be changed in strings]
marks[0]=99;
console.log(marks[0]);

*/

//looping over array
// heros = ["ironman","thor","marval","captain amarica"];
//for loop
/*
madhu = ["ironman","thor","marval","captain amarica"];
for(let i = 0; i<madhu.length; i++) {
    console.log(madhu[i]);
}
*/

//for off loop
/*heros = ["ironman","thor","marval","captain amarica"];
for(let hero of heros){
    console.log(hero);
    console.log(hero.toUpperCase());
}
*/

//-------------question 1--------------
//avg of given marks

/*
let marks = [85,97,44,37,76,60]
let sum = 0;
for(let val of marks){
    sum += val;
    }
let avg = sum/marks.length;
console.log(`Avg marks of students are = ${avg}`); 
*/

//----------------question 2------------------
//------------- by using for of loop -------------------
/*

let items = [250,645,300,900,50];

let idx = 0;
for(let val of items){
   // console.log(`value at index = ${idx} is ${val}`);
    let offer = val/10;

   // console.log(`value at index after offer= ${idx} is ${val} `);
   
    items[idx] = items[idx] - offer;
    console.log(`value at index after offer= ${items[idx]}`);
     idx++;
}

*/

//------------------using for loop-----------------------------
/*
let items = [250,645,300,900,50];
for(let i = 0; i<items.length; i++){
let offer = items[i]/10;
items[i] -= offer;

}
console.log(`items price after discount is = ${items[i]}`);
*/

/*
//-----------topic: Array Methods -----------------
//push()
let num = [1,2,3,4];
let num1 = num.push(5);
num.push(5,6,7);
console.log(num);
console.log(num1);//displays poped item
//pop()
num.pop();
let num2 = num.pop();
console.log(num2);//displays poped item
console.log(num);
//toString()
let exm1 = num.toString()
console.log(exm1);
console.log(num);
console.log(typeof(num));
//concat
let alpha = ["a","b","C","d"];
console.log(alpha);
let numb = [1,2,3,4];
console.log(numb);
let upp = ["A","B","C","D"];
console.log(upp);
let out = alpha.concat(numb).concat(upp);//coctinating 3 arrays at a time
console.log(`Array after concatinaton is : ${out}`);
//unshift:adds element in the beginning
out.unshift("E");//added element in the beginning
console.log(out);
//shift: delets element in the beginning
console.log(out.shift());
console.log(out);//not chnged in original array
//slice()
console.log(out.slice(0,3));
//splice
let emp2 = [1,2,3,4,5,6];
emp2.splice(1,3,102,103,104);//ele removed and replaced simultaniously
console.log(emp2);
emp2.splice(0,0,101);//added ele at 0th index
console.log(emp2);
emp2.splice(4,1);//deleted ele at 4th index
console.log(emp2);
emp2.splice(4,4,105);
console.log(emp2);
emp2.splice(2);
console.log(emp2);//acts like slice gives upto 2nd index

*/

//-----------------question----------------

let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();//removed first company
console.log(companies);
companies.splice(1,1,"Ola");
console.log(companies);//replaced uber with ola
companies.push("Amazon");
console.log(companies);




