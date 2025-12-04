//a program that swaps values
//swaping the values with the help of third variable
function swapingValues (a, b){
    let c = a;
    a = b;
    b = c;
    return {a, b};
}

console.log(swapingValues(15, 16));

//swaping values without using third variable
function swapingValues2 (a, b){
    a = a + b; // 5 + (b)6 = 11
    b = a - b; // b = 11 - 6 = 5
    a = a - b; // a = 11 - 5 = 6
    return {a, b};
}

console.log(swapingValues2(15, 16));