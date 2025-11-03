/*
// document object model DOM
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = "Hello madhu";
console.dir(h2.innerText);
*/


let divs = document.querySelectorAll(".box");
console.log(divs);
divs[0].innerText = "new unique value 0";
divs[1].innerText = "new unique value 1";
divs[2].innerText = "new unique value 2";

//same work done by loop
let idx = 0;
for(div of divs){
    div.innerText = `new unique value ${idx}`;
    idx++;
}

