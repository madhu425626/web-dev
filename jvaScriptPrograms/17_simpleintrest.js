function calSimpleIntrest(a,b,c){
    if(a < 0 || b < 0 || c < 0){
        throw new error ("enter only positieve numbers");
    }
    let principle = a;
    let rate = b;
    let time = c;
    let result = ((principle * rate * time)/100);
    let result2 = result.toFixed(2);//only 2 digits are considered after decimal
    // return result;
    console.log(`simple Intrest for ${principle} @ of ${rate}% for ${time} years is `,result2);
    
}

console.log(/*`simple Intrest for ${principle} @ of ${rate}% for ${time} years is `,*/ calSimpleIntrest(10000000,7,10));
// console.log( calSimpleIntrest(10000000,-1,10));
 console.log(calSimpleIntrest(20000,8.444545355,5));

 









    








