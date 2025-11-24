/*

function arrayFunc (a,b,c) {
    let array = [a,b,c];
    let i = 0;
    let smallest = array[i];
    for(i = 0; i < array.length; i++){
        if(smallest >= array[i]){
           smallest = array[i]; 
        }
    }
   console.log(smallest); 
}
arrayFunc(6,0,1); //0
arrayFunc(1,3,5); //1
arrayFunc(16,5,0); //0
arrayFunc(61,10,-1); //-1
arrayFunc(6,-7,1); //-7

*/


function smallNo (d, e, f){
    if(d<e){
        if(d<f){
            console.log(`${d} is smallest`);
        }else{
            console.log(`${f} is smaller`);
        }
        
    }else if(e<f){
        console.log(`${e} is smallest`);
    }
}

smallNo(3,4,5);
smallNo(3,2,5);
smallNo(3,4,1);
smallNo(1,1,1);









