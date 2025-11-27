/*
//finding factorial of a given no

let factorial = 5;
let n = 1;
for(let i = 1; i<=factorial; i++){
    n = n * i;
}
console.log(`the factorial of given ${factorial}! is ${n}`);
*/

function factorial (factorial)   {

    if (isNaN(factorial)) {
        throw new Error("Please enter a valid number!");
    }

    if(typeof factorial != "number"){
        throw new Error("only numbers are allowed");
    }

    if(factorial < 0){
        throw new Error("Factorial not found for nagative numbers");
    }
    else{
    let n = 1;
    for(let i = 1; i <= factorial; i++){
        n *= i;
    }
    return n;
}
}


// console.log(factorial (-9));

function calculatingFactorialUsingRecursion(inputNumber){
    console.log(`input number is ${inputNumber}`)
    if(inputNumber === 0 || inputNumber === 1){
        return 1;
    }
    if(inputNumber < 0){
        throw new Error("input number should be positieve or zero")
    }
    return inputNumber * calculatingFactorialUsingRecursion(inputNumber - 1);

}

console.log(calculatingFactorialUsingRecursion(5));




 

