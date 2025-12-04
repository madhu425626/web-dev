function isPrime (inputNumber){
    let result = "true";
  for(let i = 2; i < inputNumber ; i++){
    
    console.log(`${inputNumber} % ${i}`, inputNumber % i);
    if(inputNumber % i === 0){
        result = "false";
        break;
    }
  } return result;
}

//optimising code

function isPrime2 (inputNumber2){
let result = true;
if(inputNumber2 % 2 === 0){
    result = false;
}
if(result === true){
    for(let i = 3; i < inputNumber2; i = i / 2){
        console.log(i);
    }
}
}

console.log("isPrime");
console.log(`97`,isPrime2(97));



console.log('5',isPrime(5)); //not prime
console.log('4',isPrime(4));
console.log('97',isPrime(97));
