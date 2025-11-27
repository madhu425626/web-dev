function table (number){
    let result = 0;
    for(let i = 1; i<=10; i++){
        result = number * i;
        console.log(`${number} X ${i} = ${result}`);
    }
    return result;
}

console.log(table(5));


function table2(number2){
    let num = 0;
    for(let a = 1; a <= 10; a++){
        num += number2;
        console.log(`${number2} X ${a} = ${num}` );
    }
}

table2(5);
