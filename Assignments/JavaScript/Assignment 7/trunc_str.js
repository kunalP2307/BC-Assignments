/**
 * 1. Input a String S, and check its length and if the length is greater than 4,
    truncate the input String and output the result -
    Input: Ice Output: Ice
    Input:Icecream Output:Icec...
 */

function getNewString(string){
    return string.slice(0,4)
}

const prompt = require('prompt-sync')();
let string = prompt("Input String : ")
console.log("Output : "+getNewString(string))


