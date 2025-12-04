function exponentialMult (base, exponent){
    let result = 1;
    for(let i = 1; i<=exponent; i++){
        result = result * base;
    }
    return result;
}

console.log(exponentialMult(5, 2));
console.log(exponentialMult(5, 0));
console.log(exponentialMult(2, 9));
console.log(exponentialMult(5, "asds"));


