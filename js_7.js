/*

let div = document.querySelector("div"); //accessing div selector
console.log(div);

//get Attribute
let c = div.getAttribute("class");
console.log(c);

// inshot
div = document.querySelector("div");
console.log(div.getAttribute("class"));

let para = document.querySelector("p");//accessing para selector
console.log(para.getAttribute("id"));
console.log(para.getAttribute("class"));

//setAttribute
 console.log(div.setAttribute("class","new class"));
 console.log(div.getAttribute("class"));
*/

/*
 //style
let div = document.querySelector("div");
div.style.backgroundColor ="red";
div.innerText="Madhu";
div.style.fontSize="25px";
div.style.visibility="hidden";

//inserting elements 
let btn = document.createElement("button");
btn.innerText="click me";
console.log(btn);

*/

/*
//adding new element using java script

let newHeading = document.createElement("h1"); //creating element
newHeading.innerHTML="<i>New Heading</i>"; //inserting text
document.querySelector("body").prepend(newHeading);
//accessing body  and  prepending the new heading


//i am creating a para using javascript
let para = document.createElement("p"); //elelment created
para.innerHTML="<h1>hi iam para</h1>";  //innertext
document.querySelector("body").prepend(para);

//removing para
para.remove();

//read append child and remove chils in MDN
*/

//--------------question 1--------------------
//create a button with inner text "click me" and background color
//"red" and text color "white"

let button = document.createElement("button");
button.innerText="click me";
button.style.backgroundColor="red";
button.style.color="white";
document.querySelector("body").prepend(button); //adding into browser

//--------------------question 2----------------------
let para = document.querySelector("p");
console.log(para);
// para.setAttribute("id","newClass");
//its overriden previous class with new class
// to overcome this we use classList.add="newClassName"
para.classList.add("newClass");
// para.classList.remove("newClass");






































































