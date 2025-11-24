/*

//calculating area of rectangle
console.log("calculating area of rectangle");

function calculateArea(length, width){
return length*width;
    }

let length = 5;
let width = 9;
let area = calculateArea(length,width);
console.log(`the area of recrangle is length ${length} * width ${width} is : ${area}`);

*/

// calculating area of rectangle
function calArea(length, width) {
    if(length <= 0){
        throw new RangeError("length cannot be negative or zero");
    }

    if(width <= 0){
        throw new RangeError("width cannot be negative or zero");
    }

    console.log(length * width);
}

calArea(9,9);
// console.log(area);

calArea(5,5);


