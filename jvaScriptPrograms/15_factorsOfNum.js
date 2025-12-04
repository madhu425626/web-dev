function factorOfNum (number){ 
    let factors = []; //defining an empty array
    let nonfactors = [];
    if(number <= 0){
        throw new Error("Enter only positieve numbers");
    }
    for(let i = 1; i <= number; i++){
    if(number % i === 0){
        factors.push(i);
    //   console.log(`Factors of ${number} are : ${result}`);  
    }else {
        nonfactors.push(i);
        
    }
      
    }
    console.log(`[${nonfactors}] are not Factors of ${number}`);
    console.log(`[${factors}] are Factors of ${number}`);
}

console.log(factorOfNum(10));
console.log(factorOfNum(0));