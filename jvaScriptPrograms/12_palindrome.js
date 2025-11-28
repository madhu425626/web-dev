function isPalindrome (inputString){
    // console.log(inputString);
    inputString = inputString.toLowerCase();

    for(let i = 0; i <= inputString.length / 2; i++){
        if(inputString[i] !== inputString[inputString.length - 1 - i]){
            return false;
        }
    }

 return true;
}

console.log(isPalindrome("madhu"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("malayalam"));
console.log(isPalindrome("thank you"));
console.log(isPalindrome("thatha"));
console.log(isPalindrome("Love You"));
console.log(isPalindrome("mom"));
console.log(isPalindrome("dad"));