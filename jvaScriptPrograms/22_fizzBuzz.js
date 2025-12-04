function fizzBuzz(inputNumber){
    for(let i = 1; i<=inputNumber; i++){
        if(i % 3 == 0 && i % 5 == 0){
            console.log("Fizz Buzz")       }
        else if(i % 3 == 0){
            console.log("Fizz");
        }
        else if(i % 5 == 0){
            console.log("Buzz");
        }else {
            console.log(i);
            
        }
}
}

console.log(fizzBuzz(36));
// console.log(fizzBuzz(15));