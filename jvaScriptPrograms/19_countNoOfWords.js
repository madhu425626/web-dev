//counting no of words
function countWords (sentence){
    console.log(sentence,"before trim");
    sentence = sentence.trim();
    console.log("sentence after trim",sentence); //trim() removes latral and ending spaces from sentences
    const splittedSentence = sentence.split(' ');
    console.log(splittedSentence,splittedSentence.length);
    // return splittedSentence.length;
    let nonEmptyElements = splittedSentence.filter((element) => element != '');
    console.log(nonEmptyElements, nonEmptyElements.length,);
    
}

countWords (`hello i am madhu`);
countWords (`hello i am madhu welcome back to your  Prime!!!`);
countWords (`    hello i am madhu welcome back to your    Prime!!!    `);

