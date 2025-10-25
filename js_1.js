// Data types of javascript
name="Happy"; //1 String
console.log(name);
console.log(typeof name);

integer=27; //2 number
console.log(integer);
console.log(typeof integer);

decimal=2.7;//2 number
console.log(decimal);
console.log(typeof decimal);

isFollow=true;//3 boolean
console.log(isFollow);
console.log(typeof isFollow);

let hello1;//4 undefind
console.log(typeof(hello1));
console.log(hello1);

let x=null;//5 undefind
console.log(typeof(x));
console.log(x);

let y=BigInt(123456);//6 Big int
console.log(typeof(y));
console.log(y);

let z=Symbol("hello");//7 Symbol
console.log(typeof(z));
console.log(z);

//object
const student = {
    fullname :"madhu",
    age:24,
    score:90,
    isPass:true,
};

console.log(typeof student["fullname"]);
console.log(typeof student["age"]);
console.log(typeof student["isPass"]);
// home work problem 1
const pen = {
    name:"parker",
    isDeal:true,
    price:499,
    rating:4,
};

console.log(typeof pen ["name"]);
console.log(typeof pen ["isDeal"]);
 
// home work problem 2
const profile={
    myname:"madhav",
    isFollow:true,
    followers:99,
    following:999,
};

console.log(profile);
console.log(typeof profile);
console.log(typeof profile["followers"]);
console.log(typeof profile["following"]);
console.log(typeof profile["myname"]);
console.log(typeof profile["isFollow"]);