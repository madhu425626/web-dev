/*
function sumOfDigit (number) {
    let result = 0;
    for(let i = 1; i<=number; i++){
        result = result + i;
    }
    return result;
}

console.log(sumOfDigit(10));

*/







//sum of digit
function calculateSumOfDigit (inputDigit){
    if(inputDigit < 1){
        throw new Error ("enter only positive digit");
    }
    
    let inputDigitAsString = inputDigit.toString();
    let inputDigitAsSplit = inputDigitAsString.split(""); //""
    console.log(inputDigitAsSplit);

    let sumOfDigits= 0;

     inputDigitAsSplit.forEach(num => {
        sumOfDigits = sumOfDigits + parseInt(num);
        
        // console.log(sumOfDigits);
        
     });
     return sumOfDigits;

}


//2nd method

function calculateSumOfDigits2 (inputDigit2) {
    let sumOfDigits2 = 0;
    while(inputDigit2 > 0){
    let lastDigit = inputDigit2 % 10;
    sumOfDigits2 += lastDigit;
    inputDigit2 = Math.floor(inputDigit2 / 10);
    }
    return sumOfDigits2;
}

console.log(calculateSumOfDigit(15));
console.log(calculateSumOfDigit(999999999999999));
console.log(calculateSumOfDigits2(15));
console.log(calculateSumOfDigits2(999999999999999));





