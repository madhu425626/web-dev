function isLargest (arrayOfnum){
    let smallest = arrayOfnum[0];
    
    let greatest = arrayOfnum[0];
    for(let i = 1; i<arrayOfnum.length; i++){
        if(greatest < arrayOfnum[i] ){
            greatest = arrayOfnum[i];
         
        }if(smallest > arrayOfnum[i]){
            smallest = arrayOfnum[i];
        }
        
    }
    return {greatest, smallest};
    
}

console.log(isLargest([1,10,0]));
console.log(isLargest([100,10,0]));
console.log(isLargest([1,10,110]));
console.log(isLargest([1,10,0,5,9,6,-75,64,5,4,4,4,426,246]));
