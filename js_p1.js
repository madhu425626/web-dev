// let modeBtn = document.querySelector("#mode");
// let currmode = "blue";
// let body = document.querySelector("body");



// modeBtn.addEventListener("click",() => {
    
//     if(currmode === "blue"){
//         currmode = "red";
//         //classList.add to access a class
//         body.classList.add("red");
//         body.classList.remove("blue");
//         // body.style.backgroundColor = "Black";
        
//     }else if(currmode === "red"){
//         currmode = "green";
//         body.classList.add("green");
//         body.classList.remove("red");
//         // body.style.backgroundColor = "White";
//     }else if(currmode === "green"){
//         body.classList.add("blue");
//         body.classList.remove("green");
//     }
//     console.log(currmode);
// });


let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");

let colors = ["blue", "orange", "red", "green"];
let index = 0; // start with blue

modeBtn.addEventListener("click", () => {
    // remove previous color
    body.classList.remove(colors[index]);

    // move to next color (loop using %)
    index = (index + 1) % colors.length;

    // add the new color
    body.classList.add(colors[index]);

    console.log("Current color:", colors[index]);
});













