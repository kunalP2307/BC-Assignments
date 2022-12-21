/**
*   4. Input a String S with a word, and replace character “a” with “x” and
    display the result -
    Input: “apple” Output: “xpple” 
*/

function replaceChar(string){
    return string.replaceAll('a','x');
}

const prompt = require('prompt-sync')();
let string = prompt("Input String : ");
console.log("Output : "+replaceChar(string));
