function leapyear(year){
    if(year%4 === 0){
        if(year%100 === 0 && year%400 === 0){
            return True;
        
        }else if(year%100 !== 0 && year%400 !== 0){
            return True;
        // console.log("not leapyear");
    }
       
        // console.log(`${year} is a leapyear`);
    }
}

console.log(leapyear(1900));
console.log(leapyear(1800));
console.log(leapyear(1700));
console.log(leapyear(2100));
console.log(leapyear(2200));
// console.log(leapyear(1905));
// console.log(leapyear(1906));
// console.log(leapyear(1907));


function leapyear2 (year){
    return year%4 === 0;
}


console.log(leapyear2(2020));


function leapyear3 (year){
    if(year % 4 == 0){
        return true;
    }
    console.log("hello");
    return false;
}

console.log(leapyear3(2020));