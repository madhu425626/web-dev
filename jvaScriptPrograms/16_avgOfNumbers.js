function avgOfNum (numbers){
    let numbers = numbers;
    let result = 0;
    for(let i = 0; i<numbers.length ; i++){
        result = result + numbers[i];
        
    }result = result/numbers.length;
    return result;
}



console.log(`the average of ${numbers} is :`,avgOfNum([1,-55,6,2,5,6,5]));