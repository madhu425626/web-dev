/*
function reverseString (inputString) {
    if(typeof inputString !== "string"){
        throw new Error("only strings are allowed")
    }
    let result = "";
for(let i = inputString.length - 1; i>=0; i--){
    
    result = result + inputString[i];
}
    return result;
}

let output = reverseString(12345);
console.log(output);
// console.log(typeof reverseString);

*/


/*
//reversing an input string
function revString (inputString) {
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        result = result + inputString[i];
    }
    return result;

}

let output = revString("abbugarimadhu");
console.log(output);
*/



/*
function revString (inputString) {
    if (typeof inputString !== "string"){
        throw new Error("only Strings are allowed");
    }
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        result = result + inputString[i];
    }
    return result;

}

let output = revString("abbugarimadhu");
console.log(output);


*/


function revString (inputString) {
    
    let result = "";
    for(let i = inputString.length - 1; i >= 0; i--){
        result += inputString[i];
    }
    return result;

}

let output = revString(String(1234567890123456));
console.log(output);




















