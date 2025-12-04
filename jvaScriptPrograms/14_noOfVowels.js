 function vowels (tring){
    let vowelsCount = 0;
    let consonentsCount = 0;
    string = tring.toLowerCase();

    let vowels = "aeiou";
    let consonents = "bcdfghjklmnpqrstvwxyz"
    for(let i = 0; i<string.length; i++){
        // console.log(string[i]);
        if(string[i] === " " ||string[i] === "0123456789`@#$%^&*()_+" ) continue;
        if(vowels.includes(string[i])){
            vowelsCount++;
        }else if(consonents.includes(string[i])) {
            consonentsCount++;
        }else {
            throw new error ("Enter a valid string");
        }
    }return {vowelsCount, consonentsCount, tring};
 }
 console.log(vowels ("Madhu 123"));
 console.log(vowels ("I LOVE    YOU"));
 console.log(vowels ("THANK YOU UNIVERSE"));
 console.log(vowels ("FINALLY DREAM COMES TRUE"));
  console.log(vowels ("Ashish Saluja"));
  console.log(vowels ("Hello World"));
//  console.log(vowels ("*")); //string error
