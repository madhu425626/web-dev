function isAmstrongNUmber (inputNumber){
   
    let array = []; //considering an array to push last digits
  
    
    let number  = inputNumber;
    while(number > 0){
    let lastDigit = number % 10;    // extracting last digit 
    array.push(lastDigit);//adding elements into array using push function
    number = Math.floor(number/10);// dropping last digit
    } //array_name.push(elements)
     
    const length = array.length;

    let sum  = 0;
    array.forEach(d =>{
        
        sum += Math.pow(d, length);
        console.log(d,length,sum)
      
        })

        return sum === inputNumber;
        // if(sum == inputNumber){
        //     return true;
        // }
        // return false;
    
    }

console.log(isAmstrongNUmber(153));

console.log(isAmstrongNUmber(370));

console.log(isAmstrongNUmber(371));

console.log(isAmstrongNUmber(132));

console.log(isAmstrongNUmber(1827));

console.log(isAmstrongNUmber(92727));